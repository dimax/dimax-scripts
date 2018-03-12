/**
 * @author @lgraziani2712
 *
 * @flow
 */

'use strict';

module.exports = {
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['import'],
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
  settings: {
    'import/ignore': [
      'node_modules', // mostly CommonJS (ignored by default)
      /\.json$/, // can't parse JSON
      /\.(scss|less|css|pcss)$/, // can't parse unprocessed CSS modules, either
      /\.(jpe?g|png|gif|ico)$/, // can't parse images
      /\.svg(\?v=\d+.\d+.\d+)?$/, // can't parse images
      /\.eot(\?v=\d+.\d+.\d+)?$/, // can't parse fonts
      /\.(woff|woff2|ttf(\?v=\d+.\d+.\d+)?)$/, // can't parse fonts
    ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.vue'],
        moduleDirectory: ['node_modules'],
      },
    },
  },
  rules: {
    'import/extensions': [1, { js: 'never', json: 'always' }],
    'import/imports-first': 1,
    'import/newline-after-import': 2,
    'import/no-anonymous-default-export': [
      2,
      { allowObject: true, allowArray: true },
    ],
    'import/no-deprecated': 2,
    'import/no-duplicates': 2,
    'import/no-mutable-exports': 1,
    'import/no-unresolved': [2, { commonjs: true }],
    'import/prefer-default-export': 2,
    'import/order': [
      2,
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
  },
};
