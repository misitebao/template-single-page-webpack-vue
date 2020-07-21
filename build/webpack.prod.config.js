/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 生产环境配置
 */ 

const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

module.exports = webpackMerge(baseConfig, {
  // 设置为生产模式
  mode: 'production',
});
