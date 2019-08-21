import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Checkout from '@/components/Checkout'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    }
  ]
})
