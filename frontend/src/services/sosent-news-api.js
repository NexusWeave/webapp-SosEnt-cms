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
                                        
                                        alt: 'KIME-ressurssenter.jpg',
                                        caption: 'Foto: KIME Ressurssenter',
                                        cls: ['content-figure','article-img'],
                                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                                },
                                text: `Introduction to the article.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed erat arcu, tempus in pretium quis, tempus vel lectus.
                                Mauris vel sem elit. Vestibulum vitae dignissim purus.
                                Nam felis ante, mollis sed augue sed, pellentesque tempus lacus.
                                Etiam at pellentesque augue. Praesent eget finibus sapien.
                                Phasellus in tincidunt magna. Aliquam erat volutpat. Sed dapibus
                                maximus laoreet. Curabitur vehicula ante et nisl viverra vestibulum.
                                Maecenas luctus purus vel mollis dignissim. Vestibulum at libero sem.
                                Nam ut massa tristique, dapibus nulla non, tempor augue. Aliquam
                                efficitur erat nulla.
                                `,
                            },
                    },
                    {
                            id: 1,
                            content:
                            {
                                img:
                                {
                                    alt: 'KIME-ressurssenter.jpg',
                                    cls: ['content-figure', 'article-img'],
                                    src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                                },
                                text: `Donec vel orci leo. In eu nisi massa. Vestibulum dolor orci,
                                viverra aliquet leo rhoncus, bibendum blandit turpis. Nam blandit,
                                justo porta dignissim tincidunt, sem massa suscipit enim, ut posuere
                                velit erat id libero. Praesent pulvinar auctor lacus, vitae gravida
                                nulla pharetra eu. Cras luctus arcu eros, eu fermentum dui tristique
                                fermentum. Praesent cursus tellus et nibh hendrerit, ac iaculis massa
                                luctus. Donec malesuada egestas mattis.`,
                            }
                    },
                    {
                            id: 2,
                            content:
                            {
                                text: `Cras eleifend lobortis interdum.
                                Fusce ultricies faucibus ex in pharetra.
                                Vestibulum laoreet iaculis ante vitae viverra.
                                Suspendisse potenti. Morbi viverra enim risus.
                                Cras dictum tincidunt tortor, in consequat augue
                                faucibus et. Sed sit amet nibh consequat, luctus
                                ipsum sit amet, gravida arcu. Quisque malesuada
                                tellus in convallis tempus. Maecenas vel
                                vehicula dolor. Morbi semper erat ut arcu accumsan
                                egestas. Aliquam erat volutpat. Donec eget lacus
                                lectus. Etiam pretium ante arcu, eget elementum
                                dui pulvinar ac. Sed eu tempor dui, vel aliquam nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur tincidunt magna pharetra feugiat.
                                Proin vestibulum pellentesque enim, eu semper arcu. Morbi at urna vitae nibh faucibus maximus vel nec mauris.
                                Maecenas et magna vestibulum, ultricies augue in, porta velit. Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Fusce a lacus tortor. Ut tempus orci est, sed sodales libero lacinia et. Ut a metus eget erat volutpat
                                convallis. Maecenas nec lectus nisi. Morbi ornare tellus sed laoreet ornare.
                                Integer at leo quis magna dignissim pulvinar.`
                            }
                    },
                    {
                            id: 3,
                            content:
                            {
                                img:
                                    {
                                        
                                        alt: 'KIME-ressurssenter.jpg',
                                        caption: 'Foto: KIME Ressurssenter',
                                        cls: ['content-figure','article-img'],
                                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                                },

                                text: `Cras finibus tellus quis ipsum
                                hendrerit, vitae mattis erat ultricies.
                                Morbi pretium sodales libero id
                                sollicitudin. Etiam vulputate justo at
                                tortor semper scelerisque. Nulla est nisi,
                                fringilla sed est id, ullamcorper venenatis
                                quam. Duis id odio quis risus varius euismod.
                                Pellentesque nec feugiat nunc. Vivamus vel
                                purus id augue commodo pulvinar.`
                            }
                    },
                    {
                            id: 4,
                            content:
                            {
                                text: `Quisque eget lacus sit amet purus
                                cursus tincidunt. Sed ut nisi hendrerit,
                                mattis nisl nec, lobortis augue. Ut a
                                lacinia augue, quis dictum tellus.
                                Praesent tristique sem tortor, et
                                imperdiet turpis dapibus at. Etiam mollis
                                tincidunt justo in tincidunt. Etiam
                                accumsan a velit in ullamcorper. Fusce et
                                suscipit dui. Vestibulum dapibus ultricies
                                ullamcorper.`
                            }
                    },
                ],
                img:
                    {
                        
                        alt: 'KIME-ressurssenter.jpg',
                        caption: 'Foto: KIME Ressurssenter',
                        cls: ['article-figure','article-img'],
                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                },
                btn:
                {
                    text: 'Gå tilbake',
                    cls: ['btn'],
                    action: () => {window.history.back();},
                },

                /*conclusion:
                {
                    exists: true,
                    title: 'test',
                    list : 
                    [
                        {
                            id: generateHexID(),
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        },
                        {
                            id: generateHexID(),
                            text: 'Sed erat arcu, tempus in pretium quis, tempus vel lectus.',
                        },
                        {
                            id: generateHexID(),
                            text: 'Mauris vel sem elit. Vestibulum vitae dignissim purus.',
                        },
                    ],
                    content:'',
                },*/

            },
        },
        {
            id: "1",
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
                published: '01.05-2025',
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
                                        
                                        alt: 'KIME-ressurssenter.jpg',
                                        caption: 'Foto: KIME Ressurssenter',
                                        cls: ['content-figure','article-img'],
                                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                                },
                                text: `Introduction to the article.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed erat arcu, tempus in pretium quis, tempus vel lectus.
                                Mauris vel sem elit. Vestibulum vitae dignissim purus.
                                Nam felis ante, mollis sed augue sed, pellentesque tempus lacus.
                                Etiam at pellentesque augue. Praesent eget finibus sapien.
                                Phasellus in tincidunt magna. Aliquam erat volutpat. Sed dapibus
                                maximus laoreet. Curabitur vehicula ante et nisl viverra vestibulum.
                                Maecenas luctus purus vel mollis dignissim. Vestibulum at libero sem.
                                Nam ut massa tristique, dapibus nulla non, tempor augue. Aliquam
                                efficitur erat nulla.
                                `,
                            },
                    },
                    {
                            id: 1,
                            content:
                            {
                                img:
                                {
                                    alt: 'KIME-ressurssenter.jpg',
                                    cls: ['content-figure', 'article-img'],
                                    src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                                },
                                text: `Donec vel orci leo. In eu nisi massa. Vestibulum dolor orci,
                                viverra aliquet leo rhoncus, bibendum blandit turpis. Nam blandit,
                                justo porta dignissim tincidunt, sem massa suscipit enim, ut posuere
                                velit erat id libero. Praesent pulvinar auctor lacus, vitae gravida
                                nulla pharetra eu. Cras luctus arcu eros, eu fermentum dui tristique
                                fermentum. Praesent cursus tellus et nibh hendrerit, ac iaculis massa
                                luctus. Donec malesuada egestas mattis.`,
                            }
                    },
                    {
                            id: 2,
                            content:
                            {
                                text: `Cras eleifend lobortis interdum.
                                Fusce ultricies faucibus ex in pharetra.
                                Vestibulum laoreet iaculis ante vitae viverra.
                                Suspendisse potenti. Morbi viverra enim risus.
                                Cras dictum tincidunt tortor, in consequat augue
                                faucibus et. Sed sit amet nibh consequat, luctus
                                ipsum sit amet, gravida arcu. Quisque malesuada
                                tellus in convallis tempus. Maecenas vel
                                vehicula dolor. Morbi semper erat ut arcu accumsan
                                egestas. Aliquam erat volutpat. Donec eget lacus
                                lectus. Etiam pretium ante arcu, eget elementum
                                dui pulvinar ac. Sed eu tempor dui, vel aliquam nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur tincidunt magna pharetra feugiat.
                                Proin vestibulum pellentesque enim, eu semper arcu. Morbi at urna vitae nibh faucibus maximus vel nec mauris.
                                Maecenas et magna vestibulum, ultricies augue in, porta velit. Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Fusce a lacus tortor. Ut tempus orci est, sed sodales libero lacinia et. Ut a metus eget erat volutpat
                                convallis. Maecenas nec lectus nisi. Morbi ornare tellus sed laoreet ornare.
                                Integer at leo quis magna dignissim pulvinar.`
                            }
                    },
                    {
                            id: 3,
                            content:
                            {
                                img:
                                    {
                                        
                                        alt: 'KIME-ressurssenter.jpg',
                                        caption: 'Foto: KIME Ressurssenter',
                                        cls: ['content-figure','article-img'],
                                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                                },

                                text: `Cras finibus tellus quis ipsum
                                hendrerit, vitae mattis erat ultricies.
                                Morbi pretium sodales libero id
                                sollicitudin. Etiam vulputate justo at
                                tortor semper scelerisque. Nulla est nisi,
                                fringilla sed est id, ullamcorper venenatis
                                quam. Duis id odio quis risus varius euismod.
                                Pellentesque nec feugiat nunc. Vivamus vel
                                purus id augue commodo pulvinar.`
                            }
                    },
                    {
                            id: 4,
                            content:
                            {
                                text: `Quisque eget lacus sit amet purus
                                cursus tincidunt. Sed ut nisi hendrerit,
                                mattis nisl nec, lobortis augue. Ut a
                                lacinia augue, quis dictum tellus.
                                Praesent tristique sem tortor, et
                                imperdiet turpis dapibus at. Etiam mollis
                                tincidunt justo in tincidunt. Etiam
                                accumsan a velit in ullamcorper. Fusce et
                                suscipit dui. Vestibulum dapibus ultricies
                                ullamcorper.`
                            }
                    },
                ],
                img:
                    {
                        
                        alt: 'KIME-ressurssenter.jpg',
                        caption: 'Foto: KIME Ressurssenter',
                        cls: ['article-figure','article-img'],
                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                },
                btn:
                {
                    text: 'Gå tilbake',
                    cls: ['btn'],
                    action: () => {window.history.back();},
                },
            },
        },
        {
            id: "2",
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
                published: '01.04-2025',
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
                                        
                                        alt: 'KIME-ressurssenter.jpg',
                                        caption: 'Foto: KIME Ressurssenter',
                                        cls: ['content-figure','article-img'],
                                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                                },
                                text: `Introduction to the article.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed erat arcu, tempus in pretium quis, tempus vel lectus.
                                Mauris vel sem elit. Vestibulum vitae dignissim purus.
                                Nam felis ante, mollis sed augue sed, pellentesque tempus lacus.
                                Etiam at pellentesque augue. Praesent eget finibus sapien.
                                Phasellus in tincidunt magna. Aliquam erat volutpat. Sed dapibus
                                maximus laoreet. Curabitur vehicula ante et nisl viverra vestibulum.
                                Maecenas luctus purus vel mollis dignissim. Vestibulum at libero sem.
                                Nam ut massa tristique, dapibus nulla non, tempor augue. Aliquam
                                efficitur erat nulla.
                                `,
                            },
                    },
                    {
                            id: 1,
                            content:
                            {
                                img:
                                {
                                    alt: 'KIME-ressurssenter.jpg',
                                    cls: ['content-figure', 'article-img'],
                                    src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                                },
                                text: `Donec vel orci leo. In eu nisi massa. Vestibulum dolor orci,
                                viverra aliquet leo rhoncus, bibendum blandit turpis. Nam blandit,
                                justo porta dignissim tincidunt, sem massa suscipit enim, ut posuere
                                velit erat id libero. Praesent pulvinar auctor lacus, vitae gravida
                                nulla pharetra eu. Cras luctus arcu eros, eu fermentum dui tristique
                                fermentum. Praesent cursus tellus et nibh hendrerit, ac iaculis massa
                                luctus. Donec malesuada egestas mattis.`,
                            }
                    },
                    {
                            id: 2,
                            content:
                            {
                                text: `Cras eleifend lobortis interdum.
                                Fusce ultricies faucibus ex in pharetra.
                                Vestibulum laoreet iaculis ante vitae viverra.
                                Suspendisse potenti. Morbi viverra enim risus.
                                Cras dictum tincidunt tortor, in consequat augue
                                faucibus et. Sed sit amet nibh consequat, luctus
                                ipsum sit amet, gravida arcu. Quisque malesuada
                                tellus in convallis tempus. Maecenas vel
                                vehicula dolor. Morbi semper erat ut arcu accumsan
                                egestas. Aliquam erat volutpat. Donec eget lacus
                                lectus. Etiam pretium ante arcu, eget elementum
                                dui pulvinar ac. Sed eu tempor dui, vel aliquam nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur tincidunt magna pharetra feugiat.
                                Proin vestibulum pellentesque enim, eu semper arcu. Morbi at urna vitae nibh faucibus maximus vel nec mauris.
                                Maecenas et magna vestibulum, ultricies augue in, porta velit. Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Fusce a lacus tortor. Ut tempus orci est, sed sodales libero lacinia et. Ut a metus eget erat volutpat
                                convallis. Maecenas nec lectus nisi. Morbi ornare tellus sed laoreet ornare.
                                Integer at leo quis magna dignissim pulvinar.`
                            }
                    },
                    {
                            id: 3,
                            content:
                            {
                                img:
                                    {
                                        
                                        alt: 'KIME-ressurssenter.jpg',
                                        caption: 'Foto: KIME Ressurssenter',
                                        cls: ['content-figure','article-img'],
                                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                                },

                                text: `Cras finibus tellus quis ipsum
                                hendrerit, vitae mattis erat ultricies.
                                Morbi pretium sodales libero id
                                sollicitudin. Etiam vulputate justo at
                                tortor semper scelerisque. Nulla est nisi,
                                fringilla sed est id, ullamcorper venenatis
                                quam. Duis id odio quis risus varius euismod.
                                Pellentesque nec feugiat nunc. Vivamus vel
                                purus id augue commodo pulvinar.`
                            }
                    },
                    {
                            id: 4,
                            content:
                            {
                                text: `Quisque eget lacus sit amet purus
                                cursus tincidunt. Sed ut nisi hendrerit,
                                mattis nisl nec, lobortis augue. Ut a
                                lacinia augue, quis dictum tellus.
                                Praesent tristique sem tortor, et
                                imperdiet turpis dapibus at. Etiam mollis
                                tincidunt justo in tincidunt. Etiam
                                accumsan a velit in ullamcorper. Fusce et
                                suscipit dui. Vestibulum dapibus ultricies
                                ullamcorper.`
                            }
                    },
                ],
                img:
                    {
                        
                        alt: 'KIME-ressurssenter.jpg',
                        caption: 'Foto: KIME Ressurssenter',
                        cls: ['article-figure','article-img'],
                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                },
                btn:
                {
                    text: 'Gå tilbake',
                    cls: ['btn'],
                    action: () => {window.history.back();},
                },
            },
        },
        {
            id: "3",
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
                published: '01.05-2025',
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
                                        
                                        alt: 'KIME-ressurssenter.jpg',
                                        caption: 'Foto: KIME Ressurssenter',
                                        cls: ['content-figure','article-img'],
                                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                                },
                                text: `Introduction to the article.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed erat arcu, tempus in pretium quis, tempus vel lectus.
                                Mauris vel sem elit. Vestibulum vitae dignissim purus.
                                Nam felis ante, mollis sed augue sed, pellentesque tempus lacus.
                                Etiam at pellentesque augue. Praesent eget finibus sapien.
                                Phasellus in tincidunt magna. Aliquam erat volutpat. Sed dapibus
                                maximus laoreet. Curabitur vehicula ante et nisl viverra vestibulum.
                                Maecenas luctus purus vel mollis dignissim. Vestibulum at libero sem.
                                Nam ut massa tristique, dapibus nulla non, tempor augue. Aliquam
                                efficitur erat nulla.
                                `,
                            },
                    },
                    {
                            id: 1,
                            content:
                            {
                                img:
                                {
                                    alt: 'KIME-ressurssenter.jpg',
                                    cls: ['content-figure', 'article-img'],
                                    src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                                },
                                text: `Donec vel orci leo. In eu nisi massa. Vestibulum dolor orci,
                                viverra aliquet leo rhoncus, bibendum blandit turpis. Nam blandit,
                                justo porta dignissim tincidunt, sem massa suscipit enim, ut posuere
                                velit erat id libero. Praesent pulvinar auctor lacus, vitae gravida
                                nulla pharetra eu. Cras luctus arcu eros, eu fermentum dui tristique
                                fermentum. Praesent cursus tellus et nibh hendrerit, ac iaculis massa
                                luctus. Donec malesuada egestas mattis.`,
                            }
                    },
                    {
                            id: 2,
                            content:
                            {
                                text: `Cras eleifend lobortis interdum.
                                Fusce ultricies faucibus ex in pharetra.
                                Vestibulum laoreet iaculis ante vitae viverra.
                                Suspendisse potenti. Morbi viverra enim risus.
                                Cras dictum tincidunt tortor, in consequat augue
                                faucibus et. Sed sit amet nibh consequat, luctus
                                ipsum sit amet, gravida arcu. Quisque malesuada
                                tellus in convallis tempus. Maecenas vel
                                vehicula dolor. Morbi semper erat ut arcu accumsan
                                egestas. Aliquam erat volutpat. Donec eget lacus
                                lectus. Etiam pretium ante arcu, eget elementum
                                dui pulvinar ac. Sed eu tempor dui, vel aliquam nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur tincidunt magna pharetra feugiat.
                                Proin vestibulum pellentesque enim, eu semper arcu. Morbi at urna vitae nibh faucibus maximus vel nec mauris.
                                Maecenas et magna vestibulum, ultricies augue in, porta velit. Interdum et malesuada fames ac ante ipsum primis
                                in faucibus. Fusce a lacus tortor. Ut tempus orci est, sed sodales libero lacinia et. Ut a metus eget erat volutpat
                                convallis. Maecenas nec lectus nisi. Morbi ornare tellus sed laoreet ornare.
                                Integer at leo quis magna dignissim pulvinar.`
                            }
                    },
                    {
                            id: 3,
                            content:
                            {
                                img:
                                    {
                                        
                                        alt: 'KIME-ressurssenter.jpg',
                                        caption: 'Foto: KIME Ressurssenter',
                                        cls: ['content-figure','article-img'],
                                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                                },

                                text: `Cras finibus tellus quis ipsum
                                hendrerit, vitae mattis erat ultricies.
                                Morbi pretium sodales libero id
                                sollicitudin. Etiam vulputate justo at
                                tortor semper scelerisque. Nulla est nisi,
                                fringilla sed est id, ullamcorper venenatis
                                quam. Duis id odio quis risus varius euismod.
                                Pellentesque nec feugiat nunc. Vivamus vel
                                purus id augue commodo pulvinar.`
                            }
                    },
                    {
                            id: 4,
                            content:
                            {
                                text: `Quisque eget lacus sit amet purus
                                cursus tincidunt. Sed ut nisi hendrerit,
                                mattis nisl nec, lobortis augue. Ut a
                                lacinia augue, quis dictum tellus.
                                Praesent tristique sem tortor, et
                                imperdiet turpis dapibus at. Etiam mollis
                                tincidunt justo in tincidunt. Etiam
                                accumsan a velit in ullamcorper. Fusce et
                                suscipit dui. Vestibulum dapibus ultricies
                                ullamcorper.`
                            }
                    },
                ],
                img:
                    {
                        
                        alt: 'KIME-ressurssenter.jpg',
                        caption: 'Foto: KIME Ressurssenter',
                        cls: ['article-figure','article-img'],
                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                },
                btn:
                {
                    text: 'Gå tilbake',
                    cls: ['btn'],
                    action: () => {window.history.back();},
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