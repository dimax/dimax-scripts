/**
 * @author lgraziani2712
 *
 * @flow
 */

'use strict';

const spawn = require('cross-spawn');
const yargsParser = require('yargs-parser');

const { hasPkgProp, hasFile } = require('../utils/package');
const { hereRelative } = require('../utils/resolvers');
const resolveBin = require('../utils/resolveBin');

/**
 * Remove the first two arguments because:
 *
 * 1. The first one is the executor (node).
 * 2. The second is the ignored bin (dimax-script).
 *
 * @type {Array<string>}
 */
let args = process.argv.slice(2);
const parsedArgs = yargsParser(args);

/**
 * Flag to know if the client app has a custom eslint config.
 *
 * @type {boolean}
 */
const useBuiltinConfig =
  !args.includes('--config') &&
  !hasFile('.eslintrc') &&
  !hasFile('.eslintrc.js') &&
  !hasPkgProp('eslintConfig');

const config = useBuiltinConfig
  ? ['--config', hereRelative('../config/.eslintrc.js')]
  : [];

/**
 * Flag to know if the client has a custom eslint ignore file.
 *
 * @type {boolean}
 */
const useBuiltinIgnore =
  !args.includes('--ignore-path') &&
  !hasFile('.eslintignore') &&
  !hasPkgProp('eslintIgnore');

const ignore = useBuiltinIgnore
  ? ['--ignore-path', hereRelative('../config/.eslintignore')]
  : [];

const cache = args.includes('--no-cache') ? [] : ['--cache'];

const fix = ['--fix'];

/////////////////////////////////////////
// Files to apply eslint configuration
/////////////////////////////////////////

const filesGiven = parsedArgs._.length > 0;

const filesToApply = filesGiven ? [] : ['.'];

if (filesGiven) {
  // we need to take all the flag-less arguments (the files that should be linted)
  // and filter out the ones that aren't JS files. Otherwise JSON or CSS files
  // may be passed through
  const acceptedFileExt = /\.(jsx?|vue)$/;

  args = args.filter(a => !parsedArgs._.includes(a) || acceptedFileExt.test(a));
}

const result = spawn.sync(
  resolveBin('eslint'),
  [...config, ...ignore, ...cache, ...fix, ...args, ...filesToApply],
  { stdio: 'inherit' },
);

process.exit(result.status);
