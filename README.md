# vue-element

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 创建webpack项目

``` bash
# 安装依赖vue-router、element-ui、sass-loader、node-sass
cd vue-element
npm install vue-router --save-dev
npm i element-ui -S
npm install sass-loader node-sass --save-dev
npm install axios vue-axios --save

```
## 在项目中使用element-ui模块

```bash
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
```

## Element组件

```bash
# Layout布局
1.先行后列（一行24列）
# Container容器


```


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
