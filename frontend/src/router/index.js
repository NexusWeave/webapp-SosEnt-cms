import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import { newsStore } from '@/stores/news-store.js';
import { memberStore } from '@/stores/member-store.js';
import { partnerStore } from '@/stores/partner-store.js';
import { organizationStore } from '@/stores/organization-store';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/AboutView.vue'),

      beforeEnter: async (to, from, next) => {

        const news = newsStore();
        const members = memberStore();
        const partners = partnerStore();
        const organization = organizationStore();
        
        await news.fetchNews();
        await members.fetchMembers();
        await partners.fetchPartners();
        await organization.fetchOrganization();

        news.isLoaded && members.isLoaded && partners.isLoaded && organization.isLoaded ? next() : next();
      }
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
      beforeEnter: async (to, from, next) => {

        const news = newsStore();

        await news.fetchNews();

        console.warn('Article ID:', to.params.id);
        console.warn('Articles:', news.articles);

        news.articles ? next() : next('/404');
        
      }
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
