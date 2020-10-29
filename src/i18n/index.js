/*
 * @LastEditTime : 2020-10-28 14:04:33
 * @Description: 国际化语言
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from '@/store/index.js'

import messages from './locales/index.js'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: store.state.language || 'zh_CN',
  messages
})

export default i18n
