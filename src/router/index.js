import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GameBoard from '../views/GameBoard'
import Rank from '../views/Rank'
import Login from '../views/Login'
import Register from '../views/Register'
import UserInfo from '../views/UserInfo'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/login',
    name: '登录',
    component: Login
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: '注册',
    component: Register
  },
  {
    path: '/gameBoard',
    name: '2048小游戏',
    component: GameBoard
  },
  {
    path: '/rank',
    name: '排行榜',
    component: Rank
  },
  {
    path: '/userInfo',
    name: '用户中心',
    component: UserInfo
  }
]

const router = new VueRouter({
  routes
})

export default router