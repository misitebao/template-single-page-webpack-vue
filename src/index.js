/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 打包入口
 */

import Vue from 'vue';
import { Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/stylus/common.stylus';
import App from '@/App.vue';
import router from '@/router/index.js';
import store from '@/store/index.js';
import i18n from '@/i18n/index.js';

import config from '../config/index.js';

Vue.use(Button);
// 将常用变量挂载全局
/* global BUILD_ENV */
window.BasePath = config[BUILD_ENV].BasePath;
// 初始化组件尺寸
Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 };
Vue.config.productionTip = false;

// 初始化Vue对象
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
