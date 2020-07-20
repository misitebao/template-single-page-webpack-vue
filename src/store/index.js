/*
 * @Description: 全局store
 */

import Vue from 'vue'
import Vuex from 'vuex'

import userStore from './user/index.js'

Vue.use(Vuex)

// 生成store对象
const store = new Vuex.Store({
    namespaced: true, // 定义命名空间
    state: {
        name: 'index',
        globalNotification: { // 全局消息提示
            show: false, // 是否显示
            options: { // 默认提示消息参数
                title: '提示',
                message: '这是一条提示消息',
                type: 'info'
            }
        }
    },
    getters: {
        getterTest: (state, getters) => {
            return state.name
        }
    },
    mutations: {
        /**
         * @description: 公共批量赋值方法
         * @param {object} 自带参数
         * @param {type} 携带的数据
         */
        setValue(state, payload) {
            // 遍历赋值
            for (const key in payload) {
                state[key] = payload[key]
            }
        }
    },
    action: {
        actionTest({ state, getters, commit }, payload) {

        }
    },
    // 定义子模块
    modules: {
        userStore // 用户
    }
})


export default store
