// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 导入组件
import App from './App'
import Home from './components/home'
import Navbar from './components/navbar'
import router from './router'
import $ from 'jquery'
import '_bootstrap@3.3.7@bootstrap/dist/js/bootstrap.min.js'
import '_bootstrap@3.3.7@bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
new Vue({
    el: '#app',
    template: '<Home/>',
    components: {
        Home
    }
})