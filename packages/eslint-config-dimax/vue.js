/**
 * @author @lgraziani2712
 *
 * @flow
 */

'use strict';

module.exports = {
  extends: [
    './recommended.js',
    './jest.js',
    './imports.js',
    './prettier.js',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
  ],
  plugins: ['vue'],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 9,
    sourceType: 'module',
  },
  rules: {
    'vue/require-default-prop': 0,
  },
};
