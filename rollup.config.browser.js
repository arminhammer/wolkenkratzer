// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import sizes from 'rollup-plugin-sizes';
import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'src/index.umd.ts',
  format: 'umd',
  plugins: [
    typescript(),
    json(),
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
  dest: 'dist/index.umd.js',
  //external: ['cfn-doc-json-stubs'],
  //globals: { 'cfn-doc-json-stubs': 'cfn-doc-json-stubs' },
  sourceMap: true
};
