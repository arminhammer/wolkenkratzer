// rollup.config.js
//import resolve from 'rollup-plugin-node-resolve';
//import builtins from 'rollup-plugin-node-builtins';
import nodeResolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import sizes from 'rollup-plugin-sizes';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/browser.ts',
  output: {
    format: 'umd',
    file: 'dist/index.umd.js'
  },
  plugins: [
    nodeResolve(),
    commonjs({
      //include: ['node_modules/lodash/**', 'node_modules/cfn-doc-json-stubs/**'],
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'node_modules/lodash/lodash.js': ['cloneDeep', 'compact', 'omit', 'merge'],
        'node_modules/js-yaml/index.js': ['safeDump']
        //'node_modules/lodash/_freeGlobal.js': ['_freeGlobal.js']
        //'node_modules/cfn-doc-json-stubs': ['cfn-doc-json-stubs']
      }
    }),
    typescript({ verbosity: 3 }),
    json(),
    //builtins(),
    globals(),
    sizes({ details: true })
  ],
  name: 'wolkenkratzer'
  //,
  //sourcemap: true
};
