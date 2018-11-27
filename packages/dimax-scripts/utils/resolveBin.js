'use strict';

const fs = require('fs');
const path = require('path');

// Finds the first instance of a specified executable
// in the PATH environment variable
const which = require('which');

/**
 * Resolves the relative path to a module's binary.
 *
 * @param {string} modName Module name.
 * @param {Object} [execData={}]
 *  Contains the information where to find the executable.
 * @param {string} [execData.executable=modName]
 *  The name of the executable. By default uses the value of the first param.
 * @param {string} [execData.cwd=process.cwd()]
 *  Path used to relatize the path for the bin file.
 * @return {string} Relative path to the bin file.
 */
module.exports = function resolveBin(
  modName,
  { executable = modName, cwd = process.cwd() } = {},
) {
  let pathFromWhich;

  try {
    pathFromWhich = fs.realpathSync(which.sync(executable));
  } catch (error) {
    // ignore error
  }

  try {
    // 1. Resolve the path for the package.json of the module.
    const modPkgPath = require.resolve(`${modName}/package.json`);
    // 2. Get the dirname for the container folder for the package.json
    const modPkgDir = path.dirname(modPkgPath);
    // 3. Get the `bin` attribute.
    const { bin } = require(modPkgPath);
    // 4. If the attribute is string, use that value,
    // if not, use the prop stored in the `executable` param.
    const binPath = typeof bin === 'string' ? bin : bin[executable];
    // 5. Full path to the bin file.
    const fullPathToBin = path.join(modPkgDir, binPath);

    // 6. If both are the same, use the executable since
    // npm/yarn will know where is located.
    if (fullPathToBin === pathFromWhich) {
      return executable;
    }

    // 7. Return the relative path from where I'm placed in the CLI.
    return fullPathToBin.replace(cwd, '.');
  } catch (error) {
    if (pathFromWhich) {
      return executable;
    }
    throw error;
  }
};
