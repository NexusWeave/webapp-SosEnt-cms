import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/aktuelt',
      name: 'news',
      component: () => import('../views/NewsView.vue'),
    },
    {
      path: '/fordeler',
      name: 'program',
      component: () => import('../views/ProgramView.vue'),
    },
    {
      path: '/medlemskap',
      name: 'membership',
      component: () => import('../views/MembershipView.vue'),
    },
    {
      path: '/Privacy-Policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue'),
    },
  ],
})

export default router
