// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
//import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import sizes from 'rollup-plugin-sizes';
//import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'dist/browser.js',
  output: {
    format: 'umd',
    file: 'dist/index.umd.js'
  },
  plugins: [
    //typescript({ verbosity: 3 }),
    json(),
    globals(),
    commonjs(/*{
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'node_modules/util/util.js': ['util']
      }
    }*/),
    resolve({
      browser: true
    }),
    //builtins(),
    sizes({ details: true })
  ],
  name: 'wolkenkratzer'
  //,
  //sourcemap: true
};
