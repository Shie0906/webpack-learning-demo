/*
 * @Description: 使用 webpack 命令行环境变量的配置文件
 * @Author: Shie
 * @Date: 2019-01-14 15:36:19
 * @Last Modified by: Shie
 * @Last Modified time: 2019-01-14 15:55:50
 */

const path = require('path');

module.exports = env => {
  console.log('NODE_ENV: ', env.NODE_ENV);
  console.log('Production: ', env.production);

  return {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
      ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
};
