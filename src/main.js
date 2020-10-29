import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



//中英文翻译
import i18n from './i18n/index.js'

Vue.config.productionTip = process.env.NODE_ENV === "production" || false
Vue.config.devtools = process.env.NODE_ENV === "development" || false;

window.BasePath = process.env.VUE_APP_BasePath

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
