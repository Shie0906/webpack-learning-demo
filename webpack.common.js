const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
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
      title: '生产环境构建'
    })
  ],
  output: {
    filename: process.env.NODE_ENV === 'production' ? '[name].[hash].js' : '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
