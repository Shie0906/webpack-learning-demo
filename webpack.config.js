const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
// const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
  entry: {
    app: './src/index.js',
    // // Add the client which connects to our middleware
    // // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
    // // useful if you run your app from another point like django
    // client: ['./src/index.js', hotMiddlewareScript]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    // https://blog.csdn.net/u013243347/article/details/85223016
    disableHostCheck: true, // 为了浏览器能够自动刷新页面，新增该配置项：这是webpack本身出于安全考虑，因为不检查主机的应用程序容易受到DNS重新绑定攻击。但是，在我们的开发环境下，可以禁用掉disableHostCheck这一配置项。
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '管理输出'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/'
  },
  mode: "production"
};
