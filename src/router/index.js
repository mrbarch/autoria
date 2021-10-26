import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './../pages/Main'
import CheckedByPeople from "../pages/CheckedByPeople";
import LegkovieCatalog from "./../pages/LegkovieCatalog";
import AdvancedSearch from "../pages/AdvancedSearch";
import NewAuto from "../pages/NewAutoPage";
import Login from "../pages/LoginAndRegistration";
import List from "../pages/List";

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
  },
  {
    path: '/legkovieCatalog',
    name: 'legkovieCatalog',
    component: LegkovieCatalog
  },
  {
    path: '/newauto',
    name: 'newauto',
    component: NewAuto
  },
  {
    path: '/advancedSearch',
    name: 'advancedSearch',
    component: AdvancedSearch
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/search/:transportType/:mark/:model',
    name: 'search',
    component: List,
    beforeEnter: (to, from, next) => {
      if(to.fullPath.includes('%20')) {
        let fullPath = to.fullPath.replace('%20', '-')
        next(fullPath)
      } else {
        next()
      }
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
