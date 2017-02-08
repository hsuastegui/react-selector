var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'lib');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    'webpack-dev-server/client?http://localhost:8881',
    APP_DIR + '/tool'
  ],
  target:'web',
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: 'http://localhost:8881/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
    modulesDirectories: ['node_modules']
  },
  module : {
    loaders : [
      {test: /\.jsx$|\.js$/, include: APP_DIR, loaders: ['babel-loader']},
      {test: /\.scss$|\.css$/, loaders: ['style-loader','style','css','sass']}
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
};