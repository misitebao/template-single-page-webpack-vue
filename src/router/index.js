/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 动态路由
 */


import Vue from 'vue'
import VueRouter from 'vue-router'
import staticRoutes from './staticRoutes.js'

Vue.use(VueRouter)


// 动态路由
var dynamicRoutes = []

// 模拟动态路由数据
var routeList = [{
    path: 'tom',
    componentName: 'Tom'
}]

for (let i = 0, len = routeList.length; i < len; i++) {
    dynamicRoutes.push({
        path: `/${routeList[i].path}`,
        name: routeList[i].path,
        // 路由懒加载
        // 路由级别代码分割
        // 动态设置路由变量[request]
        component: () => import(/* webpackChunkName: "[request]Router" */ `../views/${routeList[i].componentName}.vue`)
    })

}



// 生成最终路由规则
const routes = dynamicRoutes.concat(staticRoutes)

// 生成路由对象
const router = new VueRouter({
    mode: 'hash', // 设置为hash模式
    routes
})

export default router


