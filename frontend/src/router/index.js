import { createRouter, createWebHistory } from 'vue-router'

import { mediaStore } from '@/stores/media-store';
import { newsStore } from '@/stores/news-store.js';
import { memberStore } from '@/stores/member-store.js';
import { partnerStore } from '@/stores/partner-store.js';
import { organizationStore } from '@/stores/organization-store';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/AboutView.vue'),

      beforeEnter: async (to, from, next) => {

        const news = newsStore();
        await news.fetchData();

        const organization = organizationStore();
        await organization.fetchData();

        !!news.article && !!organization.team && media.media ? next() : next();
      }
    },
    {
      name: 'news',
      path: '/aktuelt',
      component: () => import('../views/NewsView.vue'),

      beforeEnter: async (to, from, next) => {

        const news = newsStore();
        await news.fetchData();

        news.articles ? next() : next('/404');
        
      }
    },
    {
      name: 'article',
      path: '/aktuelt/artikkel/:id',
      component: () => import('../views/ArticleView.vue'),
      beforeEnter: async (to, from, next) => {

        const news = newsStore();
        await news.fetchData();

        const media = mediaStore();
        await media.fetchData();

        news.articles ? next() : next('/404');
        
      }
    },
    {
      name: 'program',
      path: '/fordeler',
      component: () => import('../views/ProgramView.vue'),

      beforeEnter: async (to, from, next) => {
      const media = mediaStore();
      await media.fetchData();

      media.isLoaded ? next() : next('/404');
      }
    },
    {
      name: 'membership',
      path: '/medlemskap',
      component: () => import('../views/MembershipView.vue'),
      
      beforeEnter: async (to, from, next) =>
      {

        const members = memberStore();
        await members.fetchData();
        
        const media = mediaStore();
        await media.fetchData();

        const partners = partnerStore();
        await partners.fetchData();

        members.isLoaded && partners.isLoaded && media.isLoaded ? next() : next();
      }

    },
    {
      name: '404',
      path: '/404',
      component: () => import('../views/error/404.vue'),

    },
    {
      name: '500',
      path: '/500',
      component: () => import('../views/error/500.vue'),

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
