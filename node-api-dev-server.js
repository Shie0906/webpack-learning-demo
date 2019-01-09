/*
 * @Description: 通过 Node.js API 使用 webpack dev server 小例子
 * @Author: Shie
 * @Date: 2018-12-27
 * @Last Modified by: Shie
 * @Last Modified time: 2019-01-09 19:32:40
 */

const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
  // https://blog.csdn.net/u013243347/article/details/85223016
  disableHostCheck: true, // 为了浏览器能够自动刷新页面，新增该配置项：这是webpack本身出于安全考虑，因为不检查主机的应用程序容易受到DNS重新绑定攻击。但是，在我们的开发环境下，可以禁用掉disableHostCheck这一配置项。
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});
