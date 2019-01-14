/*
 * @Description: 开发环境和生产环境公共的 webpack 配置
 * @Author: Shie
 * @Date: 2018-12-29
 * @Last Modified by: Shie
 * @Last Modified time: 2019-01-14 14:55:03
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    polyfills: './src/polyfills.js',
    app: './src/index.js',
    // another: './src/another-modules.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      // {
      //   test: require.resolve('./src/index.js'),
      //   use: 'imports-loader?this=>window'
      // },
      {
        test: require.resolve('./src/globals.js'),
        use: 'exports-loader?file,parse=helpers.parse'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'shimming'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ProvidePlugin({
      join: ['lodash', 'join']
    }),
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
