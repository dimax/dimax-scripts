'use strict';

const getRuleFinder = require('eslint-find-rules');

const ruleFinder = getRuleFinder('./packages/eslint-config-dimax/index.js');

test('Control eslint used rules', () => {
  expect(ruleFinder.getCurrentRules()).toMatchSnapshot();
});
