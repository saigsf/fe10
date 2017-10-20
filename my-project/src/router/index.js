import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/home'
import Navbar from '@/components/navbar'
import Login from '@/components/login'
import Register from '@/components/register'
import Users from '@/components/users'
import NotFound from '@/components/notFound'
import UserDetall from '@/components/user-detall'
import Test from '@/components/test'
import Test1 from '@/views/user/index'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/h',
        name: 'Home',
        component: Home,
        children: [{
            path: '',
            name: 'HelloWorld',
            component: HelloWorld
        }, {
            path: 'login',
            name: 'Login',
            component: Login
        }, {
            path: 'register',
            name: 'Register',
            component: Register
        }, {
            path: 'users',
            name: 'Users',
            component: Users
        }, {
            path: 'user-detall/:id?/:name?',
            name: 'UserDetall',
            component: UserDetall
        }, {
            path: '*',
            redirect: (to) => {
                console.log(to)
                if (to.path === "/h/saigsf") {
                    return '/';
                } else {
                    return '/h';
                }
            }
        }]

    }, {
        path: '/test',
        name: 'Test',
        component: Test
    }, {
        path: '/test1',
        name: 'Test1',
        component: Test1
    }, {
        path: '*',
        component: NotFound
    }]
})