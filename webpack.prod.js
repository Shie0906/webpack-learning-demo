/*
 * @Description: 生产环境 webpack 配置
 * @Author: Shie
 * @Date: 2018-12-29
 * @Last Modified by: Shie
 * @Last Modified time: 2019-01-14 15:53:06
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production') // 我们使用 webpack 内置的 DefinePlugin 为所有的依赖定义 process.env.NODE_ENV 这个环境变量
    })
  ],
  mode: "production"
});

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
