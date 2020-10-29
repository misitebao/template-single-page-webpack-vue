import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true, // 定义命名空间
  state: {
    appName: "single-page-webpack-vue", // 应用名称
    language: "zh-CN" // 语言
  },
  getters: {
    //获取应用名称大写
    appNameUpperCase: (state) => {
      return state.AppName.toUpperCase()
    }
  },
  mutations: {
    /**
     * @description: 设置App名称
     * @param {object} state 数据池
     * @param {object} payload 携带参数
     * @return {void} 
     */
    setAppName(state, payload) {
      state.AppName = payload.AppName
    },
    /**
     * @description: 公共批量赋值方法 但是仅仅只能从顶层赋值
     * @param {object} payload 携带参数
     */
    setValue(state, payload) {
      for (const key in payload) {
        state[key] = payload[key]
      }
    }
  },
  actions: {
    actionName({ state, commit }, payload) {
      commit(state.name, payload)
    }
  },
  modules: {

  }
})
