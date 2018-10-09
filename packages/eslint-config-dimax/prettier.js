/**
 * @author @lgraziani2712
 *
 * @flow
 */

'use strict';

module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      1,
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
      },
    ],
  },
};
