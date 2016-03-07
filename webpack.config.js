var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnext = require('postcss-cssnext');

module.exports = {
  entry: path.join(__dirname, 'src', 'js', 'app.jsx'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'main.js'
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, 'src', 'index.html')
  })],
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