import { createRouter, createWebHistory } from 'vue-router'

import NewsView from '../views/NewsView.vue';
import HomeView from '../views/AboutView.vue';
import programView from '../views/ProgramView.vue';
import MembershipView from '../views/MembershipView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/aktuelt',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/fordeler',
      name: 'program',
      component: programView,
    },
    {
      path: '/medlemskap',
      name: 'membership',
      component: MembershipView,
    },
  ],
})

export default router
