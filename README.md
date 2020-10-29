# template-single-page-webpack-vue

<p align="center">
    <a href="https://github.com/misitebao/template-multi-page-vue-ssr" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/github/repo-size/misitebao/template-single-page-webpack-vue?style=for-the-badge" alt="version"/>
    </a>
    <a href="https://github.com/misitebao/template-multi-page-vue-ssr" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/github/v/release/misitebao/template-single-page-webpack-vue?style=for-the-badge" alt="version"/>
    </a>
    <a href="https://github.com/misitebao/template-multi-page-vue-ssr" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/github/license/misitebao/template-single-page-webpack-vue?style=for-the-badge" alt="version"/>
    </a>
</p>

English | [中文文档](README_zh.md)

Single page Vue project template based on webpack

## Run

```
serve:help        查看 server 命令帮助
build:help        查看 build 命令帮助
serve:local       以本地以开发服务启动
serve:local:dev   以本地以开发服务+代理开发环境启动
serve:local:test  以本地以开发服务+代理测试环境启动
serve:local:prod  以本地以开发服务+代理生产环境启动
build:dev         以开发环境构建
build:test        以测试环境构建
build:prod        以生产环境构建
serve:page        将打包文件以本地服务启动
```

## Directory structure

```
|-- single-page-webpack-vue 项目名称
    |-- public              公共资源
    |-- dist                打包生成目录
    |-- src                 源码目录
        |-- assets          静态资源
            |--img          图片
            |--stylus       stylus样式文件
        |-- components      组件目录
            |-- Module      模块
            |-- Default.vue 示例组件
        |-- i18n            国际化
            |-- locales     语言包
        |-- router          路由配置
        |-- services        接口服务
            |-- Module      模块
        |-- store           数据仓库
            |-- Module      模块
        |-- views           页面级组件目录
        |-- App.vue         根组件
        |-- main.js         项目打包入口
    |-- .env.build.dev
    |-- .env.build.prod
    |-- .env.build.test
    |-- .env.local
    |-- .env.local.dev
    |-- .env.local.prod
    |-- .env.local.test
    |-- .gitignore          git提交忽略文件
    |-- babel.config.js     babel配置文件
    |-- Dockerfile          Dickerfile
    |-- nginx.default.conf  Nginx配置文件
    |-- .package.json       node项目包管理配置
    |-- README.md           README
    |-- vue.config.js       项目打包配置文件
```
