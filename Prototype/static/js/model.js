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
                    name: "news",
                    title: "Nytt i SOSENT",
                    content:
                    {
                        headline: "Nytt i SOSENT",
                        article: [
                            {
                                headline: "Norges Lands forening for sosialt entreprenørskap",
                                paragraphs: [
                                ],
                            },
                        ],
                    },
                },
                {
                    name: "vedtekter",
                    title: "SOSENT Vedtekter",
                    content:
                    {
                        headline: "Nytt i SOSENT",
                        article: [
                            {
                                headline: "Norges Lands forening for sosialt entreprenørskap",
                                paragraphs: [
                                ],
                            },
                        ],
                    },
                },
                {
                    name: "questpack",
                    title: "Questpack",
                    content:
                    {
                        headline: "QuestPack",
                        article: [
                            {
                                headline: "",
                                paragraphs: [
                                ],
                            },
                        ],
                    },
                },
                {
                    name: "aboutUs",
                    title: "Om SOSENT",
                    content:
                    {
                        banner:
                            {
                                src: "",
                                alt: "Banner for SOSENT",
                            },
                        headline: "SOSENT- Norge Sammen for et bærekraftig Norge",
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