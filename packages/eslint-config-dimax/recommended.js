/**
 * @author @lgraziani2712
 *
 * @flow
 */

'use strict';

module.exports = {
  extends: ['eslint:recommended'],
  plugins: ['filenames'],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'script',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'array-callback-return': 1,
    'arrow-body-style': 1,
    'arrow-parens': 0,
    camelcase: 2,
    curly: [1, 'all'],
    'dot-notation': 1,
    'eol-last': 0,
    eqeqeq: 1,
    'linebreak-style': 1,
    'lines-around-directive': 1,
    'new-cap': [1, { properties: false }],
    'newline-after-var': 1,
    'newline-before-return': 1,
    'no-alert': 0,
    'no-array-constructor': 2,
    'no-case-declarations': 2,
    'no-console': 1,
    'no-const-assign': 1,
    'no-debugger': 1,
    'no-dupe-class-members': 2,
    'no-extra-semi': 0,
    'no-irregular-whitespace': 2,
    'no-iterator': 1,
    'no-lone-blocks': 0,
    'no-loop-func': 2,
    'no-mixed-spaces-and-tabs': 0,
    'no-new-object': 1,
    'no-nested-ternary': 2,
    'no-param-reassign': 1,
    'no-template-curly-in-string': 2,
    'no-underscore-dangle': [2, { allow: ['_id', '_rev'] }],
    'no-unexpected-multiline': 0,
    'no-unneeded-ternary': [1, { defaultAssignment: false }],
    'no-unused-vars': [2, { ignoreRestSiblings: true }],
    'no-useless-concat': 1,
    'no-useless-constructor': 1,
    'no-useless-escape': 1,
    'no-var': 1,
    'object-shorthand': 1,
    'one-var': [2, 'never'],
    'prefer-arrow-callback': 1,
    'prefer-const': 1,
    'prefer-rest-params': 1,
    'prefer-template': 1,
    strict: 2,
    'valid-jsdoc': 2,
    //////////////////////
    // Filenames
    //////////////////////
    'filenames/match-exported': 2,
  },
};
