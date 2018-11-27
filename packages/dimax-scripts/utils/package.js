'use strict';

const fs = require('fs');
const path = require('path');

// Convert a value to an array
const arrify = require('arrify');
// The lodash method _.has exported as a Node.js module.
const has = require('lodash.has');

const paths = require('./paths');
// package.json content
const pkg = require(paths.packageJson);

/**
 * Concatenates every param and returns the resultant path.
 * Uses the app directory as initial position.
 *
 * @param {Array<string>} p All params.
 * @return {string} Relative path from the root App folder.
 */
const fromRoot = (...p) => path.join(paths.appDirectory, ...p);

/**
 * Verifies if a file exists.
 * Is relative to the root app folder.
 *
 * @param {Array<string>} p Relative path from the app folder.
 * @return {boolean} If the file exist.
 */
const hasFile = (...p) => fs.existsSync(fromRoot(...p));

/**
 * Check the existance of files. If any of them exist, returns
 * the `t` value. If no one exist, returns the `f` value.
 *
 * @param {string | Array<string>} files Array of file paths.
 * @param {boolean | any} [t=true] Return value if some files exist.
 * @param {boolean | any} [f=false] Return value if no files exist.
 * @return {any} `t` or `f` if some files exist or no one.
 */
const ifFile = (files, t = true, f = false) =>
  arrify(files).some(file => hasFile(file)) ? t : f;

/**
 * Checks if some props exist in the client's package.json.
 *
 * @param {string | Array<string>} props Package props to check if they exist.
 * @return {boolean} True if some of the props exist. False either way.
 */
const hasPkgProp = props => arrify(props).some(prop => has(pkg, prop));

// @see https://github.com/eslint/eslint/issues/9949
// eslint-disable-next-line valid-jsdoc
/**
 * Return true if some of the children props exist.
 *
 * @param {string} pkgProp Parent prop
 * @return {(props: string | Array<string>) => boolean}
 *  A currying function that receives an array of children props
 *  and returns a boolean.
 */
const hasPkgSubProp = pkgProp => props =>
  hasPkgProp(arrify(props).map(p => `${pkgProp}.${p}`));

// @see https://github.com/eslint/eslint/issues/9949
// eslint-disable-next-line valid-jsdoc
/**
 * Check if some sub props exist. If true, return `t`. False either way.
 *
 * @param {string} pkgProp Array of file paths.
 * @return {(props: string | Array<string>, t, f) => any}
 *  Curried function. Return `t` if true, `f` if false.
 */
const ifPkgSubProp = pkgProp => (props, t, f) =>
  hasPkgSubProp(pkgProp)(props) ? t : f;

const hasDep = hasPkgSubProp('dependencies');
const hasDevDep = hasPkgSubProp('devDependencies');
const hasPeerDep = hasPkgSubProp('peerDependencies');
const hasAnyDep = args => [hasDep, hasDevDep, hasPeerDep].some(fn => fn(args));

const ifDep = ifPkgSubProp('dependencies');
const ifDevDep = ifPkgSubProp('devDependencies');
const ifPeerDep = ifPkgSubProp('peerDependencies');
const ifAnyDep = (deps, t, f) => (hasAnyDep(arrify(deps)) ? t : f);

const ifScript = ifPkgSubProp('scripts');

module.exports = {
  fromRoot,
  hasFile,
  ifFile,
  hasPkgProp,
  hasPkgSubProp,
  ifPkgSubProp,
  hasPeerDep,
  hasDep,
  hasDevDep,
  hasAnyDep,
  ifPeerDep,
  ifDep,
  ifDevDep,
  ifAnyDep,
  ifScript,
  pkg,
};
