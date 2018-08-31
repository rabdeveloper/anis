import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutUs from '@/components/pages/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/our-cars',
      name: 'page.our-cars',
      component: HelloWorld
    },
    {
      path: '/prices',
      name: 'page.prices',
      component: HelloWorld
    },
    {
      path: '/about-us',
      name: 'page.about',
      component: AboutUs,
    },

  ]
})
