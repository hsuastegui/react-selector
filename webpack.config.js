var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'lib');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/tool.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'selector.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;