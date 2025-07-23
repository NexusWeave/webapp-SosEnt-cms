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
                content: `Sosiale entreprenører uttrykker bekymring for en foreslått ny registerløsning.
Generalsekretær Rune Kvarme i SosEnt Norge advarer om at dette kan utelukke små aktører og kvele innovasjon.
Frykten er at strenge krav vil begrense velferdsbidraget fra sosialt entreprenørskap i landet.`
            },

            section:
            {
                title: 'Lorem ipsum dolor sit amet',
                img:
                    {
                        
                        alt: 'KIME-ressurssenter.jpg',
                        caption: 'Foto: KIME Ressurssenter',
                        cls: ['article-figure','article-img'],
                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                },
                contents:
                [
                    {
                        id: 0,
                        cls: ['flex-row'],
                        img:
                        {
                            alt: 'KIME-ressurssenter.jpg',
                            caption: 'Foto: KIME Ressurssenter',
                            cls: ['content-figure','article-img'],
                            src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                        },
                        content: `– Vi må ikke skylle de sosiale
                        entreprenørene ut med badevannet gjennom en ny
                        registerløsning. Det sier generalsekretær
                        Rune Kvarme i SosEnt Norge, som nylig var med på
                        et dialogmøte i Digitaliserings- og
                        forvaltningsdepartementet.`,
                    },
                    {
                        id: 1,
                        content:`– Det må ikke bli slik at et
                        «ideell-register» i praksis stenger veien for
                        enkeltpersonforetak, AS-er og andre
                        organisasjonsformer som benyttes av sosiale
                        entreprenører, legger han til. Den 11. juni deltok
                        Kvarme på et dialogmøte i Digitaliserings- og
                        forvaltningsdepartementet. Statssekretær Anette
                        Davidsen hadde invitert berørte bransjer til å
                        komme med synspunkter på utkastet til ny lov om
                        registrering av ideelle velferdsaktører. I fjor
                        holdt departementet en høring som en del av
                        forarbeidet med den nye loven. Her opplevde man
                        et relativt stort sprik mellom de ulike
                        høringsinnspillene til NOU 2024:1 Definisjon og
                        registrering av ideelle velferdsaktører.`,
                    },
                    {
                        id: 2,
                        title: 'Må ikke straffes for å være liten',
                        content: `– Det må heller ikke stilles så store
                        krav og kostnader til registrereringen at det
                        blir uoverkommelig for de ofte små sosiale
                        entreprenørene å bli en del av dette registret,
                        sa Kvarme på møtet.
                        – Et slikt register kan raskt bli det som NAV og
                        forvaltningen peker på når det kommer til
                        prosjektmidler, anbud og tilskudd. Og da
                        risikerer vi å stenge ute mange av de sosiale
                        entreprenørene som gjør en betydelig innsats
                        rundt omkring i landet vårt. For SosEnt Norge er
                        det også viktig at det ikke settes noen særlige
                        begrensinger på graden av kommersielle inntekter
                        for å kunne stå i det foreslåtte registret.
                        – Det må jo være bra at den kommersielle driften
                        ute hos de sosiale entreprenørene er med på å
                        betale den velferden som disse aktørene bidrar
                        til gjennom formålsparagraf og utbytteforbud,
                        avslutter Kvarme.`
                    },
                ],
                btn:
                {
                    text: 'Gå tilbake',
                    cls: ['button'],
                    action: () => {window.history.back();},
                },

            },
            conclusion:
            {
                title: 'Oppsummering av artikkelen',
                list :
                [
                    {
                        id: generateHexID(),
                        bullet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    },
                    {
                        id: generateHexID(),
                        bullet: 'Sed erat arcu, tempus in pretium quis, tempus vel lectus.',
                    },
                    {
                        id: generateHexID(),
                        bullet: 'Mauris vel sem elit. Vestibulum vitae dignissim purus.',
                    },
                ],
                img:
                {
                    alt: 'KIME-ressurssenter.jpg',
                    caption: 'Foto: KIME Ressurssenter',
                },
                date:
                {
                    published: '01.05-2025',
                }
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
                    cls: ['button'],
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
                    cls: ['button'],
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
                    cls: ['button'],
                    action: () => {window.history.back();},
                },
            },
        },
        {
            id: "4",
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
                published: '01.02-2025',
            },

            ingress: {
                title: 'Sosialt entreprenørskap må ikke svekkes av registerkrav',
                content: `Sosiale entreprenører uttrykker bekymring for en foreslått ny registerløsning.
Generalsekretær Rune Kvarme i SosEnt Norge advarer om at dette kan utelukke små aktører og kvele innovasjon.
Frykten er at strenge krav vil begrense velferdsbidraget fra sosialt entreprenørskap i landet.`
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
                    cls: ['button'],
                    action: () => {window.history.back();},
                },
            },
        },
        {
            id: "5",
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
                published: '01.01-2025',
            },

            ingress: {
                title: 'Sosialt entreprenørskap må ikke svekkes av registerkrav',
                content: `Sosiale entreprenører uttrykker bekymring for en foreslått ny registerløsning.
Generalsekretær Rune Kvarme i SosEnt Norge advarer om at dette kan utelukke små aktører og kvele innovasjon.
Frykten er at strenge krav vil begrense velferdsbidraget fra sosialt entreprenørskap i landet.`
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
                    cls: ['button'],
                    action: () => {window.history.back();},
                },
            },
        },
        {
            id: "6",
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
                published: '01.12-2024',
            },

            ingress: {
                title: 'Sosialt entreprenørskap må ikke svekkes av registerkrav',
                content: `Sosiale entreprenører uttrykker bekymring for en foreslått ny registerløsning.
Generalsekretær Rune Kvarme i SosEnt Norge advarer om at dette kan utelukke små aktører og kvele innovasjon.
Frykten er at strenge krav vil begrense velferdsbidraget fra sosialt entreprenørskap i landet.`
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
                    cls: ['button'],
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
