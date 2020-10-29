/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 静态路由
 */

// 定义路由规则
const staticRoutes = [
    {
        path: '/',
        redirect: '/home'
    },
    {

        name: "home",
        path: "/home",
        component: () => import('@/views/Home.vue'),
        meta: {
            title: "首页"
        },
        children: [
            {
                path: "/login",
                component: () => import("@/views/Home/Home_login.vue"),
                name: "login",
                meta: {
                    title: "登录"
                }
            }
        ]
    },
    {
        name: 'about',
        path: '/about',
        // 路由懒加载
        // 路由级别代码分割
        // 动态设置路由变量[request]
        component: () => import(/* webpackChunkName: "aboutRouter" */ '@/views/About.vue')
    },
    {
        name: '*',
        path: '*',
        component: () => import(/* webpackChunkName: "notfoundRouter" */ '@/views/NotFound.vue')
    }
]

export default staticRoutes
