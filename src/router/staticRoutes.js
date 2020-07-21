/*
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 静态路由
 */ 

import Index from '../views/Index.vue';

// 定义路由规则
const staticRoutes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: Index, // 路由同步加载
  },
  {
    path: '/about',
    name: 'about',
    // 路由懒加载
    // 路由级别代码分割
    // 动态设置路由变量[request]
    component: () => import(/* webpackChunkName: "aboutRouter" */ '../views/About.vue'),
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "notfoundRouter" */ '../views/404.vue'),
  },
];

export default staticRoutes;
