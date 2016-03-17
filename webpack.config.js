var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnext = require('postcss-cssnext');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  entry: path.join(__dirname, 'src', 'js', 'app.jsx'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: PROD ? 'main.min.js' : 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'index.html')
    }),
    PROD ? new webpack.optimize.UglifyJsPlugin({minimize: true}) : undefined
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  postcss: function() {
    return [autoprefixer, precss, cssnext];
  }
};
