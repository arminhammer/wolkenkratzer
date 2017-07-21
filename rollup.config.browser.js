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
  format: 'umd',
  plugins: [
    json(),
    babel(),
    globals(),
    commonjs({
      include: ['node_modules/**'],
      addExports: {
        'node_modules/bluebird/js/release/bluebird.js': ['default']
      }
    }),
    resolve({
      module: true, // Default: true
      jsnext: true, // Default: false
      main: true, // Default: true
      browser: true, // Default: false
      extensions: ['.js', '.json'], // Default: ['.js']
      preferBuiltins: true, // Default: true
      modulesOnly: false // Default: false
    }),
    builtins(),
    flow({ all: true }),
    sizes({ details: true })
  ],
  moduleName: 'wolkenkratzer',
  dest: 'dist/browser/index.js',
  //external: ['cfn-doc-json-stubs'],
  //globals: { 'cfn-doc-json-stubs': 'cfn-doc-json-stubs' },
  sourceMap: true
};
