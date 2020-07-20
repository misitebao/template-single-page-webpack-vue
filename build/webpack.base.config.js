/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 基础配置
 */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    publicPath: './',
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
  },
  plugins: [
    // 多环境配置环境变量
    new webpack.DefinePlugin({
      BUILD_ENV: JSON.stringify(process.env.BUILD_ENV),
    }),
    new HtmlWebpackPlugin({
      title: '首页',
      favicon: './src/assets/img/favicon.ico',
      filename: 'index.html',
      template: './src/public/index.html',
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // 设置打包后生成文件路径
      filename: 'css/[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.vue$/,
        use: [{ loader: 'vue-loader' }],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],

      },
      {
        test: /\.styl(us)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "stylus-loader"
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [{
          loader: 'url-loader',
          options: {
            limit: 80000,
            outputPath: 'img/',
            name: '[name].[hash].[ext]',
          },
        }],
      },
      {
        test: [/\.eot$/, /\.ttf/, /\.woff/, /\.woff2/],
        use: [{
          loader: 'url-loader',
          options: {
            limit: 80000,
            outputPath: 'font/',
            name: '[name].[hash].[ext]',
          },
        }],
      },
    ],
  },
};
