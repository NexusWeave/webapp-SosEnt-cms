//  Modal tree

const model =
{
    // Application state
    app: 
        {
            currentPage: "aboutUs",
        },


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
            cls: "nav-container flex-wrap-row-justify-center",
            pages:
                [
                {
                    id: 0,
                    name: "news",
                    title: "Nytt i SOSENT",
                },
                {
                    id: 1,
                    name: "vedtekter",
                    title: "SOSENT Vedtekter",
                },
                {
                    id: 2,
                    name: "questpack",
                    title: "Questpack",
                },
                {
                    id: 3,
                    name: "aboutUs",
                    title: "Om SOSENT",

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
            content:
            {
                text: "Kontakt oss gjerne for en kaffe prat",
                phone: "+47 123 45 678",
                email: " sample@domaine.no",
                address: "1234 Street Name",
                postalCode: " 1234",
                city: "Oslo",
                org: "123456789",
            },
        },
    },
    

    //  Datasets for the webapplication
    data:
    {
        members:
        [
            {
                businessName: "GetAcademy",
                organizationNumber: "000 000 000",
                contactPerson: 
                {
                    name:"Ola Nordmann",
                    email: "sample@example.com",
                    phoneNumber: "(+47) 123 45 678",
                    website: "www.example.com",
                    address: "1234 Street Name",
                    postalCode: "1234",
                    city: "komune",
                    fylke: "fylke",
                },
            }
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
                        cls: "news-container flex-wrap-column-align-items-center",
                        headline:"SOSENT - Norge Nyheter",
                        

                        articles:
                            [
                                {
                                    cls: "news-banner",
                                    date: "2023-10-01",
                                    headline:"Referat for styremøte 2023",
                                    banner:
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
                                    cls: "news-banner",
                                    date: "2023-10-01",
                                    headline:"SOSENT - Norges Landsforening for sosialt entreprenørskap",
                                    banner:
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
                                }
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
                        cls: "vedtekter-container flex-wrap-column-align-items-center",
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
                    name: "questpack",
                    title: "Questpack",
                },
                {
                    id: 3,
                    name: "aboutUs",
                    content:
                    {
                        headline: "SOSENT- Norge Sammen for et bærekraftig Norge",
                        banner:
                            {
                                src: "",
                                alt: "Banner for SOSENT",
                            },
                        paragraphs: [
                            `Vi i SOSENT jobber for at sosialt entreprenørskap skal være en sentral del av et bærekraftig samfunn og synliggjøre sosiale entreprenører
                            som viktige samfunnsaktører. Foreningen søker å bli et bindeledd på tvers av tradisjonelle skillelinjer som bidrar til at offentlig, privat,
                            frivillig og ideell sektor jobber sterkere sammen, og en kompetanseaktør på feltet i sosialt entreprenørskap i Norge.`,
                
                            `Formålet med foreningen er å definere sosialt entreprenørskap i norsk kontekst, spre kunnskap om denne fjerde sektoren og interessepolitisk
                            påvirkningsarbeid for å bedre levekårene til sosiale entreprenører i Norge, herunder organisasjonsformer. Videre å gjøre det lettere å finne
                            finansiering til drift og lage partnerskap med det offentlige, svare ut aktuelle høringer som angår de sosiale entreprenørene, kunnskapsspredning,
                            samt etablere matnyttige nettverk og møteplasser for foreningens medlemmer.`,
                        ],
                    },
                },
            ],
        }
    },
} 