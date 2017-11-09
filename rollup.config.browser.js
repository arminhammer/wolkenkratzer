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
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'node_modules/lodash/lodash.js': ['cloneDeep', 'omit', 'merge'],
        'node_modules/js-yaml/index.js': ['safeDump']
      }
    }),
    typescript({ verbosity: 3 }),
    json(),
    globals(),
    sizes({ details: true })
  ],
  name: 'wolkenkratzer'
};
