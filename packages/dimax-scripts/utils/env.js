/**
 * @author @lgraziani2712
 *
 * @flow
 */

'use strict';

const fs = require('fs');
const path = require('path');

const paths = require('./paths');
const { pkg: { version: APP_VERSION } } = require('./package');

// Make sure that including paths.js after env.js will read .env variables.
delete require.cache[require.resolve('./paths')];

const NODE_ENV = process.env.NODE_ENV;

if (!NODE_ENV) {
  throw new Error(
    'The NODE_ENV environment variable is required but was not specified.',
  );
}

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
const dotenvFiles = [
  `${paths.dotenv}.${NODE_ENV}.local`,
  `${paths.dotenv}.${NODE_ENV}`,
  // Don't include `.env.local` for `test` environment
  // since normally you expect tests to produce the same
  // results for everyone
  NODE_ENV !== 'test' && `${paths.dotenv}.local`,
  paths.dotenv,
].filter(Boolean);

// Load environment variables from .env* files. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv').config({
      path: dotenvFile,
    });
  }
});

// We support resolving modules according to `NODE_PATH`.
// This lets you use absolute paths in imports inside large monorepos:
// https://github.com/facebookincubator/create-react-app/issues/253.
// It works similar to `NODE_PATH` in Node itself:
// https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders
// Note that unlike in Node, only *relative* paths from `NODE_PATH` are honored.
// Otherwise, we risk importing Node.js core modules into an app instead of Webpack shims.
// https://github.com/facebookincubator/create-react-app/issues/1023#issuecomment-265344421
// We also resolve them to make sure all tools using them work consistently.
process.env.NODE_PATH = (process.env.NODE_PATH || '')
  .split(':')
  .filter(folder => folder && !path.isAbsolute(folder))
  .map(folder => path.resolve(paths.appDirectory, folder))
  .join(path.delimiter);

// Grab NODE_ENV and APP_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.
const APP = /^APP_/i;

/**
 * Raw and stringified client envs.
 *
 * @typedef {Object} ClientEnvData
 * @property {Object} raw
 *  Contains the Client envs as-is.
 * @property {Object} stringified
 *  Contains the Client envs JSON.stringify'ed,
 *  so we can feed into Webpack DefinePlugin
 */
/**
 *
 * @param {string} publicUrl Client base URL.
 * @return {ClientEnvData} `raw` and `stringified` client envs.
 */
function getClientEnvironment(publicUrl /*: string*/) {
  const raw = Object.keys(process.env)
    .filter(key => APP.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key];

        return env;
      },
      {
        // Useful for determining whether we’re running in production mode.
        // Most importantly, it switches React into the correct mode.
        NODE_ENV,
        // Useful for resolving the correct path to static assets in `public`.
        // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
        // This should only be used as an escape hatch. Normally you would put
        // images into the `src` and `import` them in code to get their paths.
        PUBLIC_URL: publicUrl,

        APP_VERSION,
      },
    );
  // Stringify all values so we can feed into Webpack DefinePlugin
  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);

      return env;
    }, {}),
  };

  return {
    raw,
    stringified,
  };
}

/**
 * Verifies if an env exists and is not undefined.
 *
 * @param {string} name Env name.
 * @return {boolean} If the env exist.
 */
function envIsSet(name /*: string*/) {
  return (
    process.env.hasOwnProperty(name) &&
    process.env[name] &&
    process.env[name] !== 'undefined'
  );
}

/**
 * Get env value.
 *
 * @param {string} name Env prop name.
 * @param {string} def Default value if env prop not exist.
 * @return {string} Env value or default.
 */
function parseEnv(name /*: string*/, def /*: string*/) {
  return envIsSet(name) ? JSON.parse(process.env[name]) : def;
}

module.exports = {
  getClientEnvironment,
  parseEnv,
  envIsSet,
};
