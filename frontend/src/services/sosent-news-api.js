import {reactive } from 'vue';

import { generateHexID } from '@/utils/utils.js';

// API simulation
const articles = reactive(
    [
        {
            id: "0",
            title: 'Sosialt entreprenørskap må ikke svekkes av registerkrav',
            /*tags:[
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
            ],*/
            img:
            { 
                alt: 'KIME-ressurssenter.jpg',
                cls: ['article-figure','article-img'],
                src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
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
                content: `"– Vi må ikke skylle de sosiale entreprenørene ut med badevannet gjennom en ny registerløsning". 
                Det sier generalsekretær Rune Kvarme i SosEnt Norge, som nylig var med på et dialogmøte i Digitaliserings- og 
                forvaltningsdepartementet."`
            },

            section:
            {
                title: 'Lorem ipsum dolor sit amet',
                contents:
                [
                    {
                            id: 0,
                            content:
                            {
                                cls: ['flex-row'],
                                img:
                                {
                                    src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                                    alt: 'KIME-ressurssenter.jpg',
                                    cls: ['section-img'],
                                },
                                text: "Introduction goes here."
                            },
                    },
                    {
                            id: 1,
                            content:
                            {
                                img:
                                {
                                    src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                                    alt: 'KIME-ressurssenter.jpg',
                                    cls: ['section-img'],
                                },
                                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur tincidunt magna pharetra feugiat.
                                Proin vestibulum pellentesque enim, eu semper arcu. Morbi at urna vitae nibh faucibus maximus vel nec mauris.
                                Maecenas et magna vestibulum, ultricies augue in, porta velit. Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Fusce a lacus tortor. Ut tempus orci est, sed sodales libero lacinia et. Ut a metus eget erat volutpat
                                convallis. Maecenas nec lectus nisi. Morbi ornare tellus sed laoreet ornare.`
                            }
                    },
                                        {
                            id: 2,
                            content:
                            {
                                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur tincidunt magna pharetra feugiat.
                                Proin vestibulum pellentesque enim, eu semper arcu. Morbi at urna vitae nibh faucibus maximus vel nec mauris.
                                Maecenas et magna vestibulum, ultricies augue in, porta velit. Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Fusce a lacus tortor. Ut tempus orci est, sed sodales libero lacinia et. Ut a metus eget erat volutpat
                                convallis. Maecenas nec lectus nisi. Morbi ornare tellus sed laoreet ornare.`
                            }
                    },
                ],

                conclusion:
                    {
                        exists: false,
                },
                img:
                    {
                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                        alt: 'KIME-ressurssenter.jpg',
                        cls: ['article-figure','article-img'],
                },
            },
        },
]);

// API simulation
export const fetchNews = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(articles);}, 10);
    })
}