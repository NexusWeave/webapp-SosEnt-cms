import {reactive } from 'vue';

import { generateHexID } from '@/utils/utils.js';

// API simulation
const articles = reactive(
    [
        {
            id: "0",
            head:
            {
                title: 'Nyhet 1',
                date: '2023-10-01',
                cls:['flex-column-align-items-center', 'news-card'],

                img:
                {
                    alt: 'SoSent Logo',
                    cls: 'article-img',
                    src: '/media/images/news/SosEnT-favicon.png',
                },

                anchor:
                {
                    name: 'Les mer',
                    cls: ['read-more'],
                    href: '/aktuelt/artikkel/',
                },
            },
            tags:[
                {
                    id: 0,
                    title: 'News',
                    cls: ['tag', 'news-tag']
                    
                }],

            img:
            {
                alt: 'SoSent Logo',
                cls: 'article-img',
                src: '/media/images/news/SosEnT-favicon.png',
            },

            anchor:
            {
                name: 'Les mer',
                cls: ['read-more'],
                href: '/aktuelt/artikkel/',
            },

            ingress: null,
            sections: null,
            footer: null
        },
        {
            id: generateHexID(),
            head:
            {
                title: 'Nyhet 2',
                date: '2023-10-02',
                cls:['flex-column-align-items-center', 'news-card'],
                
                img:
                {
                    alt: 'SoSent Logo',
                    cls: 'article-img',
                    src: '/media/images/news/SosEnT-favicon.png',
                },

                anchor:
                {
                    name: 'Les mer',
                    cls: ['read-more'],
                    href: '/aktuelt/artikkel/',
                },
            },

            tags:
            [
                {
                    id: 0,
                    title: 'News',
                    cls: ['tag', 'news-tag']
                    
                }],

            img:
            {
                alt: 'SoSent Logo',
                cls: 'article-img',
                src: '/media/images/news/SosEnT-favicon.png',
            },

            anchor:
            {
                name: 'Les mer',
                cls: ['read-more'],
                href: '/aktuelt/artikkel/',
            },

            ingress: 
            {
                cls: '',
                content: '',
            },

            sections: null,
            footer: null
        },
        {
            id: generateHexID(),
            head:
            {
                title: 'Nyhet 3',
                date: '2023-10-03',
                cls:['flex-column-align-items-center', 'news-card'],
                
                img:
                {
                    alt: 'SoSent Logo',
                    cls: 'article-img',
                    src: '/media/images/news/SosEnT-favicon.png',
                },

                anchor:
                {
                    name: 'Les mer',
                    cls: ['read-more'],
                    href: '/aktuelt/artikkel/',
                },
            },
            tags:
            [
                {
                    id: 0,
                    title: 'News',
                    cls: ['tag', 'news-tag']
                }],

            img:
            {
                alt: 'SoSent Logo',
                cls: 'article-img',
                src: '/media/images/news/SosEnT-favicon.png',
            },

            anchor:
            {
                name: 'Les mer',
                cls: ['read-more'],
                href: '/aktuelt/artikkel/',
            },

            ingress: null,
            sections: null,
            footer: null
        },
        {
            id: generateHexID(),
            head:
            {
                title: 'Nyhet 4',
                date: '2023-10-04',
                cls:['flex-column-align-items-center', 'news-card'],
                
                img:
                {
                    alt: 'SoSent Logo',
                    cls: 'article-img',
                    src: '/media/images/news/SosEnT-favicon.png',
                },

                anchor:
                {
                    name: 'Les mer',
                    cls: ['read-more'],
                    href: '/aktuelt/artikkel/',
                },
            },
            tags:
            [
                {
                    id: 0,
                    title: 'News',
                    cls: ['tag', 'news-tag']
                }],

            img:
            {
                alt: 'SoSent Logo',
                cls: 'article-img',
                src: '/media/images/news/SosEnT-favicon.png',
            },

            anchor:
            {
                name: 'Les mer',
                cls: ['read-more'],
                href: '/aktuelt/artikkel/',
            },

            ingress: null,
            section: null,
            footer: null
        },
        {
            id: generateHexID(),
            head:
            {
                title: 'Nyhet 5',
                date: '2023-10-05',
                cls:['flex-column-align-items-center', 'news-card'],
                
                img:
                {
                    alt: 'SoSent Logo',
                    cls: 'article-img',
                    src: '/media/images/news/SosEnT-favicon.png',
                },

                anchor:
                {
                    name: 'Les mer',
                    cls: ['read-more'],
                    href: '/aktuelt/artikkel/',
                },
            },

            tags:
            [
                {
                    id: 0,
                    title: 'News',
                    cls: ['tag', 'news-tag']
                }],

            img:
            {
                alt: 'SoSent Logo',
                cls: 'article-img',
                src: '/media/images/news/SosEnT-favicon.png',
            },

            anchor:
            {
                name: 'Les mer',
                cls: ['read-more'],
                href: '/aktuelt/artikkel/',
            },
            content:
            {
                footer: null,
                ingress: null,
                section: null
            }

        }
]);

// API simulation
export const fetchNews = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(articles);}, 10);
    })
}