import {reactive } from 'vue';

import { generateHexID } from '@/utils/utils.js';

// API simulation
const articles = reactive(
    [
        {
            id: "0",
            title: 'Sosialt entreprenørskap må ikke svekkes av registerkrav',
            tags:[
                {
                    id: 0,
                    title: 'registerløsning',

                    cls: ['news-tag'],
                    anchor:
                    {
                        href: '#',
                    }
                },
                {
                    id: 1,
                    title: 'rammevilkår',
                    cls: ['news-tag'],
                }
            ],
            img:
            { 
                alt: 'KIME-ressurssenter.jpg',
                cls: ['article-image','article-img'],
                src: '/media/images/team/ressurssenter/KIME-rarticleessurssenter.jpg',
                caption: 'Foto: KIME Ressurssenter',
            },
            anchor:
            {
                name: 'Les mer',
                cls: ['read-more'],
                href: '/aktuelt/artikkel/',
            },

            date:
            {   
                type: 'published',
                cls: ['article-date'],
                updated: '01.06-2025',
                published: '01.06-2025',
            },

            ingress: {
                title: 'Sosialt entreprenørskap må ikke svekkes av registerkrav',
                img:
                { 
                    alt: 'KIME-ressurssenter.jpg',
                    cls: ['article-figure','article-img'],
                    src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                    caption: 'Foto: KIME Ressurssenter',
                },


                content: `"– Vi må ikke skylle de sosiale entreprenørene ut med badevannet gjennom en ny registerløsning". 
                Det sier generalsekretær Rune Kvarme i SosEnt Norge, som nylig var med på et dialogmøte i Digitaliserings- og 
                forvaltningsdepartementet."`
            },

            sections: [
                {
                    id: 0,
                    title: 'Lorem ipsum dolor sit amet',
                    cls: ['section-title'],
                    content: [
                        {
                            id: 0,
                            content:
                            [
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur tincidunt magna pharetra feugiat.
                                Proin vestibulum pellentesque enim, eu semper arcu. Morbi at urna vitae nibh faucibus maximus vel nec mauris.
                                Maecenas et magna vestibulum, ultricies augue in, porta velit. Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Fusce a lacus tortor. Ut tempus orci est, sed sodales libero lacinia et. Ut a metus eget erat volutpat
                                convallis. Maecenas nec lectus nisi. Morbi ornare tellus sed laoreet ornare.`
                            ]
                        },
                    ] 

                },
            ],

            footer: {}
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
                    cls: ['news-tag']
                    
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
                cls: ['article-figure','article-image'],
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
                    cls: ['article-figure','article-image'],
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
                    cls: ['news-tag']
                    
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
                cls: ['article-figure','article-image'],
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