/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 用户store
 */ 
// 定义用户store
const userStore = {
    namespaced: true, // 添加命名空间
    state: {
        name: 'about', // 名称标识
    },
    getters: {},
    mutations: {
        /**
         * @description: 公共批量赋值方法
         * @param {object} 自带参数
         * @param {type} 携带的数据
         */
        setValue(state, payload) {
            for (const key in payload) {
                state[key] = payload[key]
            }
        }
    },
    action: {},
    modules: {

    }
}

export default userStore
