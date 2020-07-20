/*
 * @Author       : songzhenze
 * @Date         : 2020-07-07 17:03:08
 * @LastEditors  : songzhenze
 * @LastEditTime : 2020-07-09 14:04:44
 * @Description  : eslint配置文件
 * @FilePath     : \single-page-webpack-vue\.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    // for 函数允许使用 ++ 运算符
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // 换行符统一使用 window 的 CRLF
    'linebreak-style': ['error', 'windows'],
    // 确保在导入路径中一致地使用文件扩展名，强制对除包导入之外的所有导入语句使用扩展。
    'import/extensions': ['error', 'ignorePackages'],
    // 允许导入 package.json 的 devDependencies
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: false, peerDependencies: false }],
    // 取消require必须放在代码最顶层的限制
    'global-require': ['off'],
  },
};
