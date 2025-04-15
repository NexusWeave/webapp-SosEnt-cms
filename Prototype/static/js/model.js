//  Modal tree

const modal =
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
        cls: "header-container flex-wrap-column-align-content-center-justify-content-space-evenly",
        nav: 
        {
            cls: "nav-container flex-wrap-row-justify-center",
            pages:
                [
                {
                    name: "news",
                    href: "news.html",
                    title: "Nytt i SOSENT",
                },
                {
                    name: "vedtekter",
                    title: "Vedtekter",
                    href: "vedtekter.html",
                },
                {
                    name: "questpack",
                    title: "questPack",
                    href: "questpack.html",
                },
                {
                    name: "aboutUs",
                    title: "Om oss",
                    href: "aboutUs.html",
                }
            ],
        },
        image:
            //  Logo for the header
            {
            cls: "logo-container flex-wrap-row-align-items-center-justify-space-between",
            alt: "SOSENT Norge Logo.jpg",
            src: "./static/img/logo/SOSENT_Norge_Logo.jpg",
            
        },
        

    },
    main: 
    {
        headline: "",
        paragraphs: [
            "Sosialentreprenørskap i Norge er en organisasjon som jobber for å fremme sosialt entreprenørskap i Norge. Vi ønsker å skape et nettverk av sosialentreprenører og støtte dem i deres arbeid.",
            "Vi tilbyr kurs, workshops og rådgivning for sosialentreprenører, samt informasjon om finansiering og støtteordninger.",
            "Vi jobber også for å øke bevisstheten om sosialt entreprenørskap i Norge og for å påvirke politiske beslutningstakere.",
        ],
    },
    footer:
    {

    },
    pages:

    [
        {
            name: "questpack",
            title: "questPack",
            description: "- Sosialentreprenørskap i Norge",
            image:
            [
                {
                    src: "",
                    alt: "",
                }
            ],
            index: false,
        },
        {
            name: "aboutUs",
            title: "Om oss",
            description: "",
            image:
            [
                {
                    src: "",
                    alt: "",
                }
            ],
            index: true,
        },
        {
            name: "Våre Vedtekter",
            title: "",
            description: "",
            image:
            [
                {
                    src: "",
                    alt: "",
                }
            ],
            index: false,
        },
        {
            name: "news",
            title: "Nytt i SOSENT",
            description: "",
            image:
            [
                {
                    src: "",
                    alt: "",
                }
            ],
            index: false,
        },
        {
            name: "bylaws",
            title: "Våre Vedtekter",
            description: "",
            image:
            [
                {
                    src: "",
                    alt: "",
                }
            ],
            index: false,
        },
    ],
    rules:
    [
        {
            headline: "Regel 1",
            paragraphs: [
            ]
        }
    ],
    members:
    [
        {
            businessName: "",
            organizationNumber: "",
            contactPerson: 
            {
                name:"",
                email: "",
                phoneNumber: "",
                website: "",
                address: "",
                postalCode: "",
                city: "",
            },
        }
    ],

    //  Datasets for the webapplication
    data:
    {
      articles:
      [
        {
            headline:"",
            paragraphs: [

            ]
        }
      ]
    },
} 