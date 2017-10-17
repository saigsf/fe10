import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/login';
import Register from '@/components/register';
import Home from '@/components/home';
import Navbar from '@/components/navbar';
import Users from '@/components/users';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/navbar',
        name: 'Navbar',
        component: Navbar
    }, {
        path: '/users',
        name: 'Users',
        component: Users
    }]
})