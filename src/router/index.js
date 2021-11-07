import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/headline',
    name: 'Headline',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Headline.vue')
  },
  {
    path: '/business',
    name: 'Business',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Business.vue')
  },
  {
    path: '/entertainment',
    name: 'Entertainment',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Entertainment.vue')
  },
  {
    path: '/sport',
    name: 'Sport',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Sport.vue')
  },
  {
    path: '/technology',
    name: 'Technology',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Technology.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
