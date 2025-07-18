import {reactive } from 'vue';

import { generateHexID } from '@/utils/utils.js';

// API simulation
const articles = reactive(
    [
        {
            id: "0",
            head:
            {
                title: 'Sosialt entreprenørskap må ikke svekkes av registerkrav',
                cls:['flex-column-align-items-center', 'news-card', 'article-h2'],
                img:
                { 
                    alt: 'KIME-ressurssenter.jpg',
                    cls: ['article-image','article-img'],
                    src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                    caption: 'Foto: KIME Ressurssenter',
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
                    title: 'registerløsning',

                    cls: ['tag', 'news-tag'],
                    anchor:
                    {
                        href: '#',
                    }
                },
                {
                    id: 1,
                    title: 'rammevilkår',
                    cls: ['tag', 'news-tag'],
                }
            ],

            img:
            {
                alt: 'SoSent Logo',
                cls: ['article-image','article-img'],
                src: '/media/images/news/SosEnT-favicon.png',
            },

            anchor:
            {
                name: 'Les mer',
                cls: ['read-more'],
                href: '/aktuelt/artikkel/',
            },

            date:
            {
                cls: ['article-date'],
                type: 'published',
                updated: '01.06-2025',
                published: '01.06-2025',
            },

            ingress: {
                title: 'Sosialt entreprenørskap må ikke svekkes av registerkrav',
                cls: '',
                content: `"– Vi må ikke skylle de sosiale entreprenørene ut med badevannet gjennom en ny registerløsning". 
                Det sier generalsekretær Rune Kvarme i SosEnt Norge, som nylig var med på et dialogmøte i Digitaliserings- og 
                forvaltningsdepartementet."`
            },

            sections: [''],

            footer:
            {
                cls: ['footer'],
            }
        },
        {
            id: generateHexID(),
            head:
            {
                title: 'Nyhet 2',
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

            date:
            {
                cls: ['article-date'],
                updated: '02-10-2023',
                published: '02-10-2023',
            },

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

            sections: [],
            footer: null
        },
        {
            id: generateHexID(),
            head:
            {
                title: 'Nyhet 2',
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

            date:
            {
                cls: ['article-date'],
                updated: '02-10-2023',
                published: '02-10-2023',
            },

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

            sections: [],
            footer: null
        },

]);

// API simulation
export const fetchNews = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(articles);}, 10);
    })
}