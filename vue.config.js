/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 项目配置
 */

module.exports = {
  publicPath: "/", // 根目录
  assetsDir: '', // 静态资源目录
  configureWebpack: { // 额外webpack配置
    devtool: process.env.NODE_ENV === "production" ? 'false' : 'source-map' //配置构建额 sourcemap
  },
  devServer: { // webpack-dev-server配置
    port: 3000, // 端口
    proxy: { // 配置请求代理 
      '/proxyApi': {
        target: process.env.VUE_APP_PROXY_TARGET,
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/proxyApi': '/'
        }
      },
    }
  }
}