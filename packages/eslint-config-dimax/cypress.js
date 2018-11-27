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
