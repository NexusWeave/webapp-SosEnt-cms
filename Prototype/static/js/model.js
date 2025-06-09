//  Model tree

const model =
{
    // Application state
    app: 
        {
            currentPage: "",
            currentCarosel:
                {
                    src: "./static/img/images/klar00.jpg",
                    alt: "Fra Klar kompetanse - fotograf Vestbris AS",
                    caption: "",
                },
        },


    //  Header, nav, main and footer
    header:
    {
        title: "SoSEnt - Norge",
        description: "Landsforeningen for Sosiale Entrepenører i Norge",
        cls: "header-container flex-wrap-row-justify-center bg-brown",
        image:
            //  Logo for the header
        {
            cls: "logo-container flex-wrap-row-align-items-center-justify-space-between",
            alt: "sosent-logo.png",
            src: "./static/img/logo/SosEnt-logo.png",
        },
    },
    nav:
    {
        cls : "navbar bg-brown flex-wrap-row-align-items-center",
        pages:
        [
            {
                id: 0,
                type: "button",
                name: "aboutUs",
                title: "Om oss",
            },
            {
                id: 1,
                name: "news",
                type: "button",
                title: "Aktuelt",
            },
            {
                id: 2,
                type: "button",
                name: "arkiv",
                title: "Arkiv",
            },
            {
                id: 3,
                cls: "link nav-item",
                type: "button",
                name: "questback",
                title: "Medlemskap",
            },
        ],
    },
    main:
    {
        cls:"main-container flex-wrap-column-align-items-center",
    },
    footer:
    {
        

        cls: "bg-brown footer-container flex-wrap-column-align-items-center-justify-space-evenly",
        contact:
        {
            cls: "contact-container flex-wrap-row-justify-space-evenly",
        },
        
        nav:
        [
            {
                name : "Personvern",
                cls: "link nav-item",
                href: "https://docs.google.com/document/d/1AkTTNQei6pJWvRYc_VT93Rspk3MTJn_ai_TsHqXi88U/edit?usp=sharing",
                
            },
            {
                cls: "link nav-item",
                name: "NO 935 329 930",
                href: "https://www.proff.no/selskap/sosent-norge/oslo/medlemsorganisasjoner/IFGVD6Y10PU"
            },
        ]
    },
    
    //  Datasets for the webapplication
    data:
    {
        carousel:
        [

            {
                src: "./static/img/images/klar01.jpg",
                alt: "Fra Klar kompetanse - fotograf Vestbris AS",
                caption: "",
            },
            {
                src: "./static/img/images/klar02.jpg",
                alt: "Fra Klar kompetanse - kokk - Fotograf Karina Lange",
                caption: "",
            },
            {
                src: "./static/img/images/klar03.jpg",
                alt: "Fra Klar kompetanse - sveiser - Fotograf Karina Lange",
                caption: "",
            },
            {
                src: "./static/img/images/klar04.jpg",
                alt: "Teamet i KLAR kompetanse av Ellen Seljestokken, Rhonda Helen Nes Lothe, Hilde Vikse og Elina Tomren. Fotograf Benjamin Vikse",
                caption: "",
            },
        ],

        articlesBanner:
            [
                {
                    cls: "news-banner flex-wrap-row-justify-space-evenly",
                    date: "2023-10-01",
                    headline:"Referat Fra Styremøte 2023",
                    image:
                        {
                            src: "./static/img/sosent/Gemini_Generated_Image_opf6gwopf6gwopf6.jpeg",
                            alt: "Styret i SOSENT",
                        },

                        lede: `
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.`,

                        main: 
                        [
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                            nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                            porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                            Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                            erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                        
                            `Curabitur vehicula tortor tortor, ut lacinia felis vestibulum pellentesque.
                            Proin malesuada iaculis eros pulvinar efficitur. Nam eget pulvinar erat. Ut imperdiet
                            a tellus sit amet pulvinar. Nam accumsan dignissim gravida. Nam lacinia sodales faucibus.
                            Fusce sit amet sollicitudin sapien. Vestibulum sollicitudin orci leo. Nulla efficitur
                            vehicula augue a commodo. Vivamus vehicula ultricies nibh, id elementum nulla lacinia in.
                            Curabitur arcu lacus, tincidunt ut laoreet id, dapibus sed libero.`,

                            `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                            et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                            cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                            debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                            molestiae non recusandae.`
                        ],

                        ending: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                                velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?`,
                },
                {
                    cls: "news-banner flex-wrap-row-justify-space-evenly",
                    date: "2025-05-01",
                    headline:"SOSENT - Norges Landsforening For Sosialt Entreprenørskap",
                    image:
                        {
                            src: "./static/img/logo/SosEnt-favicon.png",
                            alt: "News banner",
                        },

                        lede: `
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.`,

                        main: 
                        [
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                            nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                            porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                            Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                            erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                        
                            `Curabitur vehicula tortor tortor, ut lacinia felis vestibulum pellentesque.
                            Proin malesuada iaculis eros pulvinar efficitur. Nam eget pulvinar erat. Ut imperdiet
                            a tellus sit amet pulvinar. Nam accumsan dignissim gravida. Nam lacinia sodales faucibus.
                            Fusce sit amet sollicitudin sapien. Vestibulum sollicitudin orci leo. Nulla efficitur
                            vehicula augue a commodo. Vivamus vehicula ultricies nibh, id elementum nulla lacinia in.
                            Curabitur arcu lacus, tincidunt ut laoreet id, dapibus sed libero.`,

                            `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                            et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                            cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                            debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                            molestiae non recusandae.`
                        ],

                        ending: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                                velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?`,
                },
                {
                        cls: "news-banner flex-wrap-row-justify-space-evenly",
                        date: "2025-05-01",
                        headline:"SOSENT - Norges Landsforening for sosialt entreprenørskap",
                        image:
                        {
                            src: "./static/img/logo/SosEnt-favicon.png",
                            alt: "News banner",
                        },
                        
                        lede: `
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.`,

                        main: 
                        [
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                            nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                            porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                            Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                            erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                        
                            `Curabitur vehicula tortor tortor, ut lacinia felis vestibulum pellentesque.
                            Proin malesuada iaculis eros pulvinar efficitur. Nam eget pulvinar erat. Ut imperdiet
                            a tellus sit amet pulvinar. Nam accumsan dignissim gravida. Nam lacinia sodales faucibus.
                            Fusce sit amet sollicitudin sapien. Vestibulum sollicitudin orci leo. Nulla efficitur
                            vehicula augue a commodo. Vivamus vehicula ultricies nibh, id elementum nulla lacinia in.
                            Curabitur arcu lacus, tincidunt ut laoreet id, dapibus sed libero.`,

                            `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                            et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                            cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                            debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                                        molestiae non recusandae.`

                        ],

                        ending: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                                velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?`,
                },
            ],
        
        nav:
        {
            pages:
            [
                {
                    id: 0,
                    name: "aboutUs",
                    content:
                    {
                        cls: "about-container flex-wrap-column-align-items-center",
                        headline: "SOSENT- Norge Sammen for et bærekraftig Norge",
                        text: "Kontakt oss gjerne for en kaffe prat",
                        banner:
                            {
                                src: "./static/img/sosent/Gemini_Generated_Image_opf6gwopf6gwopf6.jpeg",
                                alt: "SOSENT-Team.jpg",
                            },
                        
                        documentation:
                        {
                            headline: "Grunnlagsdokumentasjon",
                            description: "Her finner du organisasjonens grunnlagsdokumenter.",
                            files:
                            [
                                {
                                    name: "Vedtekter",
                                    description: "PDF av organisasjonens vedtekter",
                                    src: "./docs/vedtekter.pdf",
                                },
                                {
                                    name: "Styre medlemmer",
                                    description: "PDF av organisasjonens styremedlemmer",
                                    src: "./docs/vedtekter.pdf",
                                },
                            ],
                        },
                        
                        paragraphs: 
                        [
                            {
                                heading:"Om oss",
                                paragraph: 
                                [
                                    `SosEnt Norge – Landsforeningen for sosiale entreprenører – er en interessepolitisk forening
                                    som søker å styrke og påvirke rammebetingelser og regelverk til beste for sosiale entreprenører i Norge.`,

                                    `Vi arbeider for å få etablert forståelsen og aksepten for denne 4. sektoren hos myndigheter,
                                    beslutningstakerne og de andre sektorene; offentlig, privat og frivillig.`,

                                    `Foreningen ønsker å være en kunnskapsbank for sosiale entreprenører, og
                                    en høringsinstans for saker som angår sosialt entreprenørskap. Vi vil rådgi
                                    våre medlemmer, gjøre tilgjengelig informasjon om støtte- og
                                    tilskuddsordninger og bidra med aktuelle tolkninger av forskrifter og
                                    regelverk. Vi vil også arrangere møteplasser og nettverk for sosiale
                                    entreprenører og andre som er interessert i sosialt entreprenørskap.`,

                                    `Foreningen etablerer fordelsprogram med aktuelle leverandører av varer,
                                    programvare og forsikringsordninger. Et medlemskap i SosEnt Norge lønner seg!`,

                                    `Foreningen ble stiftet i april 2025. Samfunnsbedriftene ivaretar foreningens
                                    sekretariat/sekretariatsfunksjoner, og generalsekretæren har sin ansettelse der`,

                                ] 
                            },
                        ],
                        constitution: [
                            {
                                headline: "Virkeområde / Formål",
                                paragraphs: [
                                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                    nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                    porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                    Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                    erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                ],
                            },
                            {
                                headline: "Medlemskap",
                                paragraphs: [
                                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                    nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                    porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                    Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                    erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                ],
                            },
                            {
                                headline: "Organisasjonens styre",
                                paragraphs: [
                                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                    nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                    porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                    Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                    erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                ],
                            },
                            {
                                headline: "årsmøte",
                                paragraphs: [
                                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                    nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                    porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                    Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                    erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                ],
                            },
                            {
                                headline: "Aktiviteter",
                                paragraphs: [
                                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                    nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                    porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                    Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                    erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                ],
                            },
                            {
                                headline: "Forvaltning",
                                paragraphs: [
                                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                    nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                    porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                    Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                    erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                ],
                            },
                            {
                                headline: "Oppløsning",
                                paragraphs: [
                                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                    nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                    porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                    Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                    erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                ],
                            }, 
                        ],
                    },
                },
                {
                    id: 1,
                    name: "news",
                    content:
                    {
                        cls: "news-container flex-wrap-row-justify-space-evenly",
                        headline:"SOSENT - Norge Nyheter",

                        articles:
                            [
                                {
                                    cls: "news-banner flex-wrap-row link",
                                    date: "2023-10-01",
                                    headline:"Referat Fra Styremøte 2023",
                                    image:
                                    {
                                        cls: "article-image",
                                        src: "./static/img/sosent/Gemini_Generated_Image_opf6gwopf6gwopf6.jpeg",
                                        alt: "Styret i SOSENT",
                                    },

                                    lede: `
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur.`,

                                    main: [
                                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                        nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                        porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                        Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                        erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                        `,
                                        
                                        `Curabitur vehicula tortor tortor, ut lacinia felis vestibulum pellentesque.
                                        Proin malesuada iaculis eros pulvinar efficitur. Nam eget pulvinar erat. Ut imperdiet
                                        a tellus sit amet pulvinar. Nam accumsan dignissim gravida. Nam lacinia sodales faucibus.
                                        Fusce sit amet sollicitudin sapien. Vestibulum sollicitudin orci leo. Nulla efficitur
                                        vehicula augue a commodo. Vivamus vehicula ultricies nibh, id elementum nulla lacinia in.
                                        Curabitur arcu lacus, tincidunt ut laoreet id, dapibus sed libero.`,

                                        `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                        occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                                        et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                                        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                                        assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                                        debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                                        molestiae non recusandae.`

                                    ],

                                ending: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                                velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?`,
                                },
                                {
                                    cls: "news-banner flex-wrap-row",
                                    date: "2025-05-01",
                                    headline:"SOSENT - Norges Landsforening For Sosialt Entreprenørskap",
                                   image:
                                    {
                                        cls: "article-image",
                                        src: "./static/img/logo/SosEnt-favicon.png",
                                        alt: "News banner",
                                    }, 
     

                                    lede: `
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur.`,

                                    main: [
                                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                        nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                        porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                        Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                        erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                        `,
                                        
                                        `Curabitur vehicula tortor tortor, ut lacinia felis vestibulum pellentesque.
                                        Proin malesuada iaculis eros pulvinar efficitur. Nam eget pulvinar erat. Ut imperdiet
                                        a tellus sit amet pulvinar. Nam accumsan dignissim gravida. Nam lacinia sodales faucibus.
                                        Fusce sit amet sollicitudin sapien. Vestibulum sollicitudin orci leo. Nulla efficitur
                                        vehicula augue a commodo. Vivamus vehicula ultricies nibh, id elementum nulla lacinia in.
                                        Curabitur arcu lacus, tincidunt ut laoreet id, dapibus sed libero.`,

                                        `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                        occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                                        et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                                        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                                        assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                                        debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                                        molestiae non recusandae.`

                                    ],

                                ending: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                                velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?`,
                                },
                                {
                                    cls: "news-banner flex-wrap-row",
                                    date: "2025-05-01",
                                    headline:"SOSENT - Norges Landsforening for sosialt entreprenørskap",
                                    image:
                                    {
                                        cls: "article-image",
                                        src: "./static/img/logo/SosEnt-favicon.png",
                                        alt: "News banner",
                                    }, 

                                    lede: `
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur.`,

                                    main: [
                                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                        nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                        porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                        Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                        erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                        `,
                                        
                                        `Curabitur vehicula tortor tortor, ut lacinia felis vestibulum pellentesque.
                                        Proin malesuada iaculis eros pulvinar efficitur. Nam eget pulvinar erat. Ut imperdiet
                                        a tellus sit amet pulvinar. Nam accumsan dignissim gravida. Nam lacinia sodales faucibus.
                                        Fusce sit amet sollicitudin sapien. Vestibulum sollicitudin orci leo. Nulla efficitur
                                        vehicula augue a commodo. Vivamus vehicula ultricies nibh, id elementum nulla lacinia in.
                                        Curabitur arcu lacus, tincidunt ut laoreet id, dapibus sed libero.`,

                                        `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                        occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                                        et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                                        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                                        assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                                        debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                                        molestiae non recusandae.`

                                    ],

                                ending: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                                velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?`,
                                },
                            ]
                    },
                },
                {
                    id: 2,
                    name: "arkiv",
                    title: "Arkiv",
                    
                    content:
                    {
                        updated: "2023",
                        cls: "vedtekter-article",
                        headline:"Sosent Arkiv",
                        banner:
                        {
                            src: "./static/img/logo/sosent-logo.png",
                            alt: "SOSENT Logo",
                        },
                    }
                },
                {
                    id: 3,
                    name: "member",
                    title: "Info om medlemskap",
                    content:
                    {
                        cls: "member-container flex-wrap-row-justify-space-evenly",
                        headline: "Bli Medlem i SOSENT",
                        href: "https://response.questback.com/isa/qbv.dll/bylink?p=164g6KsM99iFiEoIuFBSPf4vlpq1wCY39OK0FW7sqwkdWfjDQ29a9XFSuJlAyLXr0",
                        paragraphs: [
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                            nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                            porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                            Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                            erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                            
                            `Curabitur vehicula tortor tortor, ut lacinia felis vestibulum pellentesque.
                            Proin malesuada iaculis eros pulvinar efficitur. Nam eget pulvinar erat. Ut imperdiet
                            a tellus sit amet pulvinar. Nam accumsan dignissim gravida. Nam lacinia sodales faucibus. `,
                        ]
                    }
                }
            ],
        },
        contact:
        {
            cls: "contact-container flex-wrap-row-justify-space-evenly",
            content:
            [
                {
                    name: "Helle V. Rødahl",
                    title: "Styreleder",
                    phone: "+47 12 34 56 78",
                    email: "helle@sosent.no",
                    image:
                        {
                            cls: "",
                            alt: "Helle V. Rødahl",
                            src: "./static/img/team/profil-helle-privat.jpg",
                        },
                },
                {
                    cls: "contact-container ",
                    name: "Rune J. Kvarme",
                    title: "Generalsekretær",
                    phone: "+47 12 34 56 78",
                    email: "rune@sosent.no",
                    image:
                        {
                            cls: "",
                            alt: "Rune J. Kvarme",
                            src: "./static/img/team/52700234381_5e75074f92_q.jpg",
                        },
                },
            ],
        },
        partners:
        [
            {
                name: "GET Academy",
                href: "https://www.getacademy.no/",
                logo:
                {
                    src: "./static/img/partners/GET_RGB_logo.png",
                    alt: "GET Acedemy Logo",
                },
            },
            {
                name: "Sosialt Entreprenørskap Norge",
                href: "https://sosent.no/",
                logo:
                {
                    src: "./static/img/logo/SosEnt-favicon.png",
                    alt: "SOSENT Logo",
                },
            },
        ],
    },
} 