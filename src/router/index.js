/*
 * @Description: 路由
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import staticRoutes from './staticRoutes.js';

Vue.use(VueRouter);

// 动态路由
const dynamicRoutes = [];

// 模拟动态路由数据
const rou = [{
  path: 'zhangsan',
  componentName: 'zhangsan',
}, {
  path: 'lisi',
  componentName: 'lisi',
}, {
  path: 'wangwu',
  componentName: 'wangwu',
}];

// 遍历生成路由
for (let i = 0; i < 3; i++) {
  dynamicRoutes.push({
    path: `/${rou[i].path}`,
    name: rou[i].path,
    component: () => import(/* webpackChunkName: "[request]Router" */ `../views/${rou[i].componentName}.vue`),
  });
}

// 生成最终路由规则
const routes = dynamicRoutes.concat(staticRoutes);

// 生成路由对象
const router = new VueRouter({
  mode: 'hash', // 设置为hash模式
  routes,
});

export default router;
