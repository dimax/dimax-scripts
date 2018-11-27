'use strict';

module.exports = {
  extends: [
    './recommended.js',
    './jest.js',
    './imports.js',
    './prettier.js',
    'plugin:vue/essential',
  ],
  plugins: ['vue'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 9,
    sourceType: 'module',
  },
  rules: {
    'vue/attribute-hyphenation': 1,
    'vue/component-name-in-template-casing': 1,
    'vue/name-property-casing': 1,
    'vue/no-template-shadow': 2,
    'vue/prop-name-casing': 1,
    'vue/require-prop-types': 2,
    'vue/v-bind-style': 1,
    'vue/v-on-style': 1,
  },
};
