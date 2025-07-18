import {reactive } from 'vue';

import { generateHexID } from '@/utils/utils.js';

// API simulation
const articles = reactive(
    [
        {
            id: "0",
            head:
            {
                cls:['flex-column-align-items-center', 'news-card', 'header-h2'],
                title: 'Sosialt entreprenørskap må ikke svekkes av registerkrav',

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
                cls: 'article-img',
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
                cls: ['date'],
                type: 'published',
                updated: '2023-10-01',
                published: '2023-10-01',
            },

            ingress: {
                cls: '',
                content:"Vi må ikke skylle de sosiale entreprenørene ut med badevannet gjennom en ny registerløsning. Det sier generalsekretær Rune Kvarme i SosEnt Norge, som nylig var med på et dialogmøte i Digitaliserings- og forvaltningsdepartementet. "
            },

            sections: ["– Vi må ikke skylle de sosiale entreprenørene ut med badevannet gjennom en ny registerløsning. Det sier generalsekretær Rune Kvarme i SosEnt Norge, som nylig var med på et dialogmøte i Digitaliserings- og forvaltningsdepartementet."],
            
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
                cls: ['date'],
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
                title: 'Nyhet 3',
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
                }
            ],

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
            date:
            {
                cls: ['date'],
                published: '02-10-2023',
            },

            ingress: null,
            sections: [],
            footer: null
        },
        {
            id: generateHexID(),
            head:
            {
                title: 'Nyhet 4',
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
                }
            ],

            date:
            {
                cls: ['date'],
                published: '04-10-2023',
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

            ingress: null,
            section: null,
            footer: null
        },
        {
            id: generateHexID(),
            head:
            {
                title: 'Nyhet 5',
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
                }
            ],
            date:
            {
                cls: ['date'],
                published: '05-10-2023',
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