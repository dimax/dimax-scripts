/**
 * @author @lgraziani2712
 *
 * @flow
 */

'use strict';

module.exports = {
  extends: ['./recommended.js', './jest.js', './imports.js', './prettier.js'],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 9,
  },
};
