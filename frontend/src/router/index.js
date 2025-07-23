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
      name: 'news',
      path: '/aktuelt',
      component: () => import('../views/NewsView.vue'),
    },
    {
      name: 'article',
      path: '/aktuelt/artikkel/:id',
      component: () => import('../views/ArticleView.vue'),
    },
    {
      name: 'program',
      path: '/fordeler',
      component: () => import('../views/ProgramView.vue'),
    },
    {
      name: 'membership',
      path: '/medlemskap',
      component: () => import('../views/MembershipView.vue'),
    },

    {
      name: 'file-redirect',
      path: '/media/files/:pathMatch(.*)*',

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
