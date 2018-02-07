/**
 * @author @lgraziani2712
 *
 * @flow
 */

'use strict';

const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved.
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath /*: string*/) =>
  path.resolve(appDirectory, relativePath);

module.exports = {
  appDirectory,
  clientMainJs: resolveApp('client/index.js'),
  coverageDirectory: resolveApp('reports/coverage'),
  dotenv: resolveApp('.env'),
  nodeModules: resolveApp('node_modules'),
  localEnv: resolveApp('.env.local'),
  packageJson: resolveApp('package.json'),
  resolveApp,
  serverMainJs: resolveApp('server/index.js'),
  yarnLockFile: resolveApp('yarn.lock'),
};
