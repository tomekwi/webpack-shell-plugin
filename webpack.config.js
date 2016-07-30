const path = require('path');
const webpack = require('webpack');

var WebpackShellPlugin = require('./lib');

module.exports = {
  watch: true,
  entry: path.resolve(__dirname, 'test/entry.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  /*devServer: {
    contentBase: path.resolve(__dirname, 'test')
  },*/
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    new WebpackShellPlugin({
      beforeBuildStart: ['echo "Before Webpack Start"'],
      onBuildStart: ['echo "Webpack Start"'],
      onBuildEnd: ['echo "Webpack End"'],
      onBuildExit: ['echo "After Webpack End"']
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
