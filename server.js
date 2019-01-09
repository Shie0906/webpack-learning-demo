/*
 * @Description: 使用 webpack-dev-middleware 自定义开发服务，结合 webpack-hot-middleware 实现模块热替换
 * @Author: Shie
 * @Date: 2018-12-24
 * @Last Modified by: Shie
 * @Last Modified time: 2019-01-09 19:32:49
 */

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Add webpack-hot-middleware attached to the same compiler instance
app.use(webpackHotMiddleware(compiler));

// Serve the files on port 3000.
app.listen(3000, function() {
  console.log('Example app listening on port 3000!\n');
});
