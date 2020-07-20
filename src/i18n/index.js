/*
 * @Description: i18n配置
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en_US from './locales/en_US.js'
import zh_CN from './locales/zh_CN.js'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'zh_CN', // 设置默认为中文
    messages: {
        en_US,
        zh_CN
    }
})

export default i18n;