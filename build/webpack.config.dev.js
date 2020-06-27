const path = require('path');
const {server,port} = require('../public/config');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ROOT = path.dirname(__dirname);
const publicPath = path.join(ROOT, 'public');
const outputPath = path.join(ROOT, 'runtime');
const contentBasePath = outputPath;

console.log('--------------------------------------');
console.log('port：', port);
console.log('root：',ROOT);
console.log('outputPath: ', outputPath);
console.log('publicPath: ', publicPath);
console.log('contentBasePath: ', contentBasePath);
console.log('URL: ', `http://${server}:${port}/index.html`);
console.log('--------------------------------------');

module.exports = {
  mode: 'development',
  entry: path.join(ROOT, './src/main.ts'),
  output: {
    path: outputPath,
    filename: 'main.js'
  },
  resolve: {
    extensions: [".ts",".js"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      template: path.join(ROOT, '/public/index.html'),
      filename: contentBasePath,
      inject: true,
      title: 'NOBE-PAINTER',
      minify: false,
    })
  ],
  
  devServer: {
    contentBase: contentBasePath,
    host: server,
    port: port,
    openPage: 'index.html',
    compress: true,
    hot: true,
    watchContentBase: true,
    open: true,

  }
};