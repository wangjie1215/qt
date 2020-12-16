import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login.vue'
import Idex from '@/views/Idex.vue'
import Register from '@/views/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Idex',
      name: 'Idex',
      component: Idex
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
