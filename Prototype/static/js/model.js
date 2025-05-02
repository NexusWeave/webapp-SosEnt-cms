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
        title: "Sosialentreprenørskap i Norge",
        description: "- Sosialentreprenørskap i Norge",
        cls: "header-container flex-wrap-column-align-content-center-justify-space-evenly",
        image:
            //  Logo for the header
            {
            cls: "logo-container flex-wrap-row-align-items-center-justify-space-between",
            alt: "sosent-logo.png",
            src: "./static/img/logo/sosent-logo.png",
            
        },
    },
    nav:
    {
        cls : "nav-container flex-wrap-row-align-items-center-justify-space-evenly",
        pages:
        [
            {
                id: 0,
                name: "news",
                type: "button",
                title: "Aktuelt",
                content:
                {
                    cls: "news-container flex-wrap-column-align-items-center",
                    headline:"SOSENT - Norge Nyheter",
                },
            },
            {
                id: 1,
                type: "button",
                name: "vedtekter",
                title: "SOSENT Vedtekter",
                
                content:
                {
                    updated: "2023",
                    cls: " flex-wrap-column-align-items-center",
                    headline:"Vedtekter for SOSENT",
                    banner:
                    {
                        src: "./static/img/logo/sosent-logo.png",
                        alt: "SOSENT Logo",
                    },
                    vedtekter:
                        [
                            {
                                headline: "Virkeområde / Formål",
                                paragraphs: [
                                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                    nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                    porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                    Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                    erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                    `,
                                ],
                            },
                            {
                                headline: "Medlemskap",
                                paragraphs: [
                                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                    nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                    porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                    Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                    erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                    `,
                                ],
                            },
                            {
                                headline: "Organisasjonens styre",
                                paragraphs: [
                                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                    nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                    porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                    Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                    erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                    `,
                                ],
                            },
                            {
                                headline: "årsmøte",
                                paragraphs: [
                                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                    nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                    porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                    Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                    erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                    `,
                                ],
                            },
                            {
                                headline: "Aktiviteter",
                                paragraphs: [
                                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                    nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                    porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                    Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                    erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                    `,
                                ],
                            },
                            {
                                headline: "Forvaltning",
                                paragraphs: [
                                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                    nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                    porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                    Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                    erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                    `,
                                ],
                            },
                            {
                                headline: "Oppløsning",
                                paragraphs: [
                                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                    nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                    porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                    Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                    erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                    `,
                                ],
                            },
                                
                        ]
                }
            },
            {
                id: 2,
                type: "button",
                name: "aboutUs",
                title: "Om oss",
                
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
                    paragraphs: 
                    [
                        `Vi i SOSENT jobber for at sosialt entreprenørskap skal være en sentral del av et bærekraftig samfunn og synliggjøre sosiale entreprenører
                        som viktige samfunnsaktører. Foreningen søker å bli et bindeledd på tvers av tradisjonelle skillelinjer som bidrar til at offentlig, privat,
                        frivillig og ideell sektor jobber sterkere sammen, og en kompetanseaktør på feltet i sosialt entreprenørskap i Norge.`,
            
                        `Formålet med foreningen er å definere sosialt entreprenørskap i norsk kontekst, spre kunnskap om denne fjerde sektoren og interessepolitisk
                        påvirkningsarbeid for å bedre levekårene til sosiale entreprenører i Norge, herunder organisasjonsformer. Videre å gjøre det lettere å finne
                        finansiering til drift og lage partnerskap med det offentlige, svare ut aktuelle høringer som angår de sosiale entreprenørene, kunnskapsspredning,
                        samt etablere matnyttige nettverk og møteplasser for foreningens medlemmer.`,
                    ],
                    
                    contact:
                    {
                        cls: "contact-container flex-wrap-row-justify-space-evenly",
                        content:
                        [
                            {
                                name: "Helle V. Rødahl",
                                title: "Styreleder",
                                phone: "+47 123 45 678",
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
                                name: "Rune V. Kvam",
                                title: "Generalsekretær",
                                phone: "+47 123 45 678",
                                email: "rune@sosent.no",
                                image:
                                {
                                    cls: "",
                                    alt: "Rune V. Kvam",
                                    src: "./static/img/team/52700234381_5e75074f92_q.jpg",
                                
                                },

                            },
                            
                        ],
                    },
                },
            },
            {
                id: 3,
                cls: "link nav-item",
                type: "link",
                name: "questback",
                title: "Meld Interesse her",
                href: "https://response.questback.com/isa/qbv.dll/bylink?p=164g6KsM99iFiEoIuFBSPf4vlpq1wCY39OK0FW7sqwkdWfjDQ29a9XFSuJlAyLXr0",
            },
        ],
    },
    main:
    {
        cls:"main-container flex-wrap-column-align-items-center",
    },
    footer:
    {
        

        cls: "footer-container flex-wrap-column-align-items-center-justify-space-evenly",
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

        articles:
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
                            src: "./static/img/logo/sosent-logo.png",
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
                            src: "./static/img/logo/sosent-logo.png",
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
                    name: "news",
                    content:
                    {
                        cls: "news-container flex-wrap-row-justify-space-evenly",
                        headline:"SOSENT - Norge Nyheter",

                        articles:
                            [
                                {
                                    cls: "news-banner flex-wrap-row",
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
                                        src: "./static/img/logo/sosent-logo.png",
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
                                        src: "./static/img/logo/sosent-logo.png",
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
                    id: 1,
                    name: "vedtekter",
                    title: "SOSENT Vedtekter",
                    
                    content:
                    {
                        updated: "2023",
                        cls: "vedtekter-article",
                        headline:"Vedtekter for SOSENT",
                        banner:
                        {
                            src: "./static/img/logo/sosent-logo.png",
                            alt: "SOSENT Logo",
                        },
                        vedtekter:
                            [
                                {
                                    headline: "Virkeområde / Formål",
                                    paragraphs: [
                                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                        nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                        porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                        Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                        erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                        `,
                                    ],
                                },
                                {
                                    headline: "Medlemskap",
                                    paragraphs: [
                                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                        nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                        porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                        Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                        erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                        `,
                                    ],
                                },
                                {
                                    headline: "Organisasjonens styre",
                                    paragraphs: [
                                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                        nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                        porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                        Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                        erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                        `,
                                    ],
                                },
                                {
                                    headline: "årsmøte",
                                    paragraphs: [
                                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                        nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                        porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                        Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                        erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                        `,
                                    ],
                                },
                                {
                                    headline: "Aktiviteter",
                                    paragraphs: [
                                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                        nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                        porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                        Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                        erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                        `,
                                    ],
                                },
                                {
                                    headline: "Forvaltning",
                                    paragraphs: [
                                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                        nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                        porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                        Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                        erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                        `,
                                    ],
                                },
                                {
                                    headline: "Oppløsning",
                                    paragraphs: [
                                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                        nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                        porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                        Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                        erat volutpat. Nam ac massa vel nunc scelerisque bibendum.
                                        `,
                                    ],
                                },
                                    
                            ]
                    }
                },

                {
                    id: 2,
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
                        paragraphs: 
                        [
                            {
                                heading:"Om oss",
                                paragraph: 
                                [
                                    `Vi i SOSENT jobber for at sosialt entreprenørskap skal være en sentral del av et bærekraftig samfunn og synliggjøre sosiale entreprenører
                                    som viktige samfunnsaktører. Foreningen søker å bli et bindeledd på tvers av tradisjonelle skillelinjer som bidrar til at offentlig, privat,
                                    frivillig og ideell sektor jobber sterkere sammen, og en kompetanseaktør på feltet i sosialt entreprenørskap i Norge.`,
                                ] 
                            },
                            {
                                heading:"Formålet med SoSEnT",
                                paragraph: 
                                [
                                    `Formålet med foreningen er å definere sosialt entreprenørskap i norsk kontekst, spre kunnskap om denne fjerde sektoren og interessepolitisk
                            påvirkningsarbeid for å bedre levekårene til sosiale entreprenører i Norge, herunder organisasjonsformer. Videre å gjøre det lettere å finne
                            finansiering til drift og lage partnerskap med det offentlige, svare ut aktuelle høringer som angår de sosiale entreprenørene, kunnskapsspredning,
                            samt etablere matnyttige nettverk og møteplasser for foreningens medlemmer.`,
                                ] 
                            },
                        ],
                        
                        contact:
                        {
                            cls: "contact-container flex-wrap-row-justify-space-evenly",
                            content:
                            [
                                {
                                    name: "Helle V. Rødahl",
                                    title: "Styreleder",
                                    phone: "+47 123 45 678",
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
                                    name: "Rune V. Kvam",
                                    title: "Generalsekretær",
                                    phone: "+47 123 45 678",
                                    email: "rune@sosent.no",
                                    image:
                                    {
                                        cls: "",
                                        alt: "Rune V. Kvam",
                                        src: "./static/img/team/52700234381_5e75074f92_q.jpg",
                                    
                                    },

                                },
                                
                            ],
                        },
                    },
                },
            ],
        },
    },
} 