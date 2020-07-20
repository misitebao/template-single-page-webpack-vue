/*
 * @Description: 开发环境
 */
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

module.exports = webpackMerge(baseConfig, {
  // 设置为开发模式
  mode: 'development',
  devtool: 'inline-source-map',
  // 设置开发服务
  devServer: {
    open: true,
    contentBase: path.join(__dirname, '../dist'),
    publicPath: '/',
    host: '127.0.0.1',
    compress: true,
    port: 3001,
    hot: true,
    overlay: true,
  },
});
