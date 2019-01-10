/*
 * @Description: 开发环境和生产环境公共的 webpack 配置
 * @Author: Shie
 * @Date: 2018-12-29
 * @Last Modified by: Shie
 * @Last Modified time: 2019-01-10 15:55:05
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    // another: './src/another-modules.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '生产环境构建'
    })
  ],
  output: {
    filename: process.env.NODE_ENV === 'production' ? '[name].[hash].js' : '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
};
