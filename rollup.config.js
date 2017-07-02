// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import flow from 'rollup-plugin-flow';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/index.js',
  format: 'umd',
  plugins: [
    flow(),
    json(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    commonjs(),
    resolve(),
    globals(),
    builtins()
  ],
  moduleName: 'wolkenkratzer',
  dest: 'dist/index.js',
  external: ['lodash', 'bluebird'],
  sourceMap: true
};
