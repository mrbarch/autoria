import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './../pages/Main'
import CheckedByPeople from "../pages/CheckedByPeople";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/checkedByPeople',
    name: 'checkedByPeople',
    component: CheckedByPeople
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
