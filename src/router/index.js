import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GameBoard from '../views/GameBoard'
import Rank from '../views/Rank'
import Login from '../views/Login'
import Register from '../views/Register'
import RegisterSuccess from '../views/RegisterSuccess'
import LoginSuccess from '../views/LoginSuccess'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/gameBoard',
    name: 'GameBoard',
    component: GameBoard
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank
  },
  {
    path: '/registerSuccess',
    name: 'RegisterSuccess',
    component: RegisterSuccess
  },
  {
    path: '/loginSuccess',
    name: 'LoginSuccess',
    component: LoginSuccess
  }
]

const router = new VueRouter({
  routes
})

export default router