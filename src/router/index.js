import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router)

export default new Router({
  routes: [
  
      {
        path: '/',
        name: 'home',
        component: () => import('@/components/home/Index.vue')
      },
      {
        path: '/our-cars',
        name: 'page.our-cars',
        component: () => import('@/components/staticpages/OurCars.vue')
      },
      {
        path: '/prices',
        name: 'page.prices',
        component: () => import('@/components/staticpages/AboutUs.vue')
      },
      {
        path: '/about-us',
        name: 'page.about',
        component: () => import('@/components/staticpages/AboutUs.vue')
      },
      {
        path: '/contact-us',
        name: 'page.contact',
        component: () => import('@/components/staticpages/ContactUs.vue')
      },
      {
        path: '/blog',
        name: 'page.blog',
        component: () => import('@/components/staticpages/Blog.vue')
      },
  

  ]
})
