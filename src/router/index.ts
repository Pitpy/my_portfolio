import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PackageView from '@/views/PackageView.vue'

const router = createRouter({
  history: createWebHistory('/'), // Important
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/#tech-stack',
      name: 'tech-stack',
      component: HomeView,
    },
    {
      path: '/package',
      name: 'package',
      component: PackageView,
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  },
})

export default router
