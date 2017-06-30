const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'wolkenkratzer.min.js',
    libraryTarget: 'umd',
    library: 'wolkenkratzer'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      }
    ]
  } //,
  //plugins: [new webpack.optimize.UglifyJsPlugin()]
};
