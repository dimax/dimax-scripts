/**
 * @author lgraziani2712
 *
 * @flow
 */

'use strict';

const path = require('path');

const resolveBin = require('./resolveBin');
const { pkg } = require('./package');

/**
 * Returns the absolute path to file.
 *
 * @param {string} p Relative path to file.
 * @return {string} Absolute path to file.
 */
const here = p => path.join(__dirname, p);

/**
 * Returns the relative path to files from where the process is.
 *
 * @param {string} p Relative path to file.
 * @return {string} Relative path from where the process is.
 */
const hereRelative = p => here(p).replace(process.cwd(), '.');

/**
 * This is used for IDK NOW
 *
 * @return {string} Path for the dimax-scripts binary.
 */
function resolveDimaxScripts() {
  if (pkg.name === 'dimax-scripts') {
    return require.resolve('./bin/').replace(process.cwd(), '.');
  }

  return resolveBin('dimax-scripts');
}

module.exports = {
  here,
  hereRelative,
  resolveDimaxScripts,
};
