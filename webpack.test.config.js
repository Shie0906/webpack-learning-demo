const webpack = require('webpack'),
  path = require('path'),
  fs = require('fs');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const SRC = path.resolve(__dirname, "src"),
  NODE_MODULES = path.resolve(__dirname, "node_modules")

const config = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        test: [
          /\.png$/,
          /\.jpg$/
        ],
        loader: "url-loader"
      },
      {
        test: /\.css$/,
        include: [
          NODE_MODULES,
          SRC
        ],
        loader: 'style-loader!css-loader',
      }
    ]
  },
  resolve: {
    root: SRC,
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    publicPath: '/assets',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ]
};

if (process.env.NODE_ENV === 'production') {
  console.log('production process.env.NODE_ENV: ', process.env.NODE_ENV)
  config.plugins.push(
    new UglifyJSPlugin({
      sourceMap: true
    })
  )
} else {
  console.log('development process.env.NODE_ENV: ', process.env.NODE_ENV)
  config.devtool = "#cheap-module-source-map"
  config.devServer = {
    contentBase: './public',
    hot: true,
    inline: true,
    host: "0.0.0.0",
    port: 2708
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = config