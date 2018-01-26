/**
 * @author @lgraziani2712
 *
 * @flow
 */

'use strict';

module.exports = {
  extends: ['plugin:flowtype/recommended'],
  plugins: ['flowtype'],
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
    flowtype: ['onlyFilesWithFlowAnnotation'],
  },
  rules: {
    'flowtype/generic-spacing': 0,
    'flowtype/space-after-type-colon': 0,
    'flowtype/space-before-generic-bracket': 0,
    'flowtype/space-before-type-colon': 0,
    'flowtype/union-intersection-spacing': 0,
  },
};
