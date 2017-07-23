// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import flow from 'rollup-plugin-flow';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import sizes from 'rollup-plugin-sizes';

export default {
  entry: 'src/index.browser.js',
  format: 'iife',
  plugins: [
    json(),
    babel(),
    globals(),
    commonjs(),
    resolve({
      browser: true
    }),
    builtins(),
    flow({ all: true }),
    sizes({ details: true })
  ],
  moduleName: 'wolkenkratzer',
  dest: 'dist/index.browser.js',
  //external: ['cfn-doc-json-stubs'],
  //globals: { 'cfn-doc-json-stubs': 'cfn-doc-json-stubs' },
  sourceMap: true
};
