/**
 * @author @lgraziani2712
 *
 * @flow
 */

'use strict';

module.exports = {
  plugins: ['prettier'],
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
    'prettier/prettier': [
      1,
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        parser: 'babylon',
      },
    ],
  },
};
