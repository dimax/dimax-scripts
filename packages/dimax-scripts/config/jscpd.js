'use strict';

const mkdirp = require('mkdirp');

const { resolveApp } = require('../utils/paths');

mkdirp(resolveApp('reports'));

module.exports = {
  languages: ['javascript', 'jsx', 'vue'],
  files: ['**/*.js', '**/*.jsx', '**/*.vue'],
  exclude: ['**/*.min.js', '**/node_modules/**'],
  output: resolveApp('reports/duplication.json'),
  reporter: 'json',
};
