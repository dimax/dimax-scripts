/**
 * @author @lgraziani2712
 *
 * @flow
 */

'use strict';

module.exports = {
  plugins: ['cypress'],
  env: {
    'cypress/globals': true,
  },
  rules: {
    'jest/valid-expect': 0,
  },
};
