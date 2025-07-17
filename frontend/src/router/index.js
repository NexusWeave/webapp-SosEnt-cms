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
      path: '/aktuelt/artikkel/:id',
      name: 'news-article',
      component: () => import('../views/utils/ArticleView.vue'),
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
      path: '/media/files/:pathMatch(.*)*',
      name: 'file-redirect',

      beforeEnter(to, from, next) 
      {
        const Path = window.location.orgin + to.path;
        window.open(Path, '_blank');
        next('/'); // Prevent navigation to the route
      }
    },
  ],
})

export default router
