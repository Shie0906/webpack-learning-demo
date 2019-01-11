/*
 * @Description: 开发环境和生产环境公共的 webpack 配置
 * @Author: Shie
 * @Date: 2018-12-29
 * @Last Modified by: Shie
 * @Last Modified time: 2019-01-11 15:38:53
 */

const path = require('path');
const webpack = require('webpack');
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
      title: '缓存'
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  output: {
    filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js' : '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
