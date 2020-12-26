import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import AddJoke from '@/views/AddJoke.vue'
import Newshiwei from '@/views/Newshiwei.vue'
import AppMain from '@/views/AppMain.vue'
import Admin from '@/views/Admin.vue'
import Personal from '@/views/Personal.vue'
import Comment from '@/views/Comment.vue'
import XiangQing from '@/views/XiangQing.vue'
import test from '@/views/test.vue'
import list2 from '@/views/sys/list2.vue'
import UserList from '@/views/sys/UserList.vue'
import jokeList from '@/views/sys/jokeList.vue'

Vue.use(Router)
export default new Router({
  routes: [{
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
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/AddJoke',
      name: 'AddJoke',
      component: AddJoke
    },
    {
      path: '/Newshiwei',
      name: 'Newshiwei',
      component: Newshiwei
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/Comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/XiangQing',
      name: 'XiangQing',
      component: XiangQing
    },
    {
      path: '/AppMain',
      name: 'AppMain',
      component: AppMain,
      children: [{
          path: '/sys/list2',
          name: 'list2',
          component: list2
        },
        {
          path: '/sys/UserList',
          name: 'UserList',
          component: UserList
        },
        {
          path: '/sys/jokeList',
          name: 'jokeList',
          component: jokeList
        }]
    },
     {
      path: '/test',
      name: 'test',
      component: test
    }]
})
