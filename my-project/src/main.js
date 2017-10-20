// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'
import Vuex from 'vuex'


// 导入组件
import App from './App'
import router from './router'
import store from './store'
// import routes from './routes'
// 导入依赖的js/css
import $ from 'jquery'
import '_bootstrap@3.3.7@bootstrap/dist/js/bootstrap.min.js'
import '_bootstrap@3.3.7@bootstrap/dist/css/bootstrap.min.css'
import './assets/css/font-awesome.css'



Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
Vue.prototype.$resource = VueResource
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})