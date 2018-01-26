/**
 * @author @lgraziani2712
 *
 * @flow
 */

'use strict';

module.exports = {
  plugins: ['jest'],
  rules: {
    'jest/no-disabled-tests': 2,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
    'jest/valid-expect': 2,
  },
  env: {
    'jest/globals': true,
  },
};
