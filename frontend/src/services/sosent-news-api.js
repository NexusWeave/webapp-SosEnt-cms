import {reactive } from 'vue';

import { generateHexID } from '@/utils/utils.js';

// API simulation
const articles = reactive(
    [
        {
            id: '0',
            title: 'Sosialt entreprenørskap må ikke svekkes av registerkrav',
            img:
            { 
                alt: 'KIME-ressurssenter.jpg',
                cls: ['article-figure','article-img'],
                src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                caption: 'Illustrasjonsbilde fra KIMEs gründerprogram for flerkulturelle entreprenører. Foto: MIKS Ressurssenter',
            },

            date:
            {
                published: '2025.06.13',
            },

            ingress: {
                content: `Sosiale entreprenører uttrykker bekymring for
                en foreslått ny registerløsning. Generalsekretær Rune
                Kvarme i SosEnt Norge advarer om at dette kan utelukke
                små aktører og kvele innovasjon. Frykten er at strenge
                krav vil begrense velferdsbidraget fra sosialt
                entreprenørskap i landet.`
            },

            section:
            {
                title: 'Lorem ipsum dolor sit amet',
                img:
                    {
                        
                        alt: 'KIME-ressurssenter.jpg',
                        caption: 'Foto: KIME Ressurssenter',
                        cls: ['figure-grid','article-img'],
                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                },
                contents:
                [
                    {
                        
                        cls: ['flex-row'],
                        id: 0,
                        content: [`Vi må ikke skylle de sosiale
                        entreprenørene ut med badevannet gjennom en ny
                        registerløsning. Det sier generalsekretær
                        Rune Kvarme i SosEnt Norge, som nylig var med på
                        et dialogmøte i Digitaliserings- og
                        forvaltningsdepartementet.`, 
                        `Det må ikke bli slik at et «ideell-register» i
                        praksis stenger veien for enkeltpersonforetak, AS-er
                        og andre organisasjonsformer som benyttes av sosiale
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
                        registrering av ideelle velferdsaktører.`],
                        img:
                        {
                            alt: 'KIME-ressurssenter.jpg',
                            caption: 'Foto: KIME Ressurssenter',
                            cls: ['figure-grid','article-img'],
                            src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                        },
                    },
                    {
                        id: 2,
                        title: 'Må ikke straffes for å være liten',
                        content: [`Det må heller ikke stilles så store
                        krav og kostnader til registrereringen at det
                        blir uoverkommelig for de ofte små sosiale
                        entreprenørene å bli en del av dette registret,
                        sa Kvarme på møtet.`, `Et slikt register kan raskt
                        bli det som NAV og forvaltningen peker på når det
                        kommer til prosjektmidler, anbud og tilskudd. Og da
                        risikerer vi å stenge ute mange av de sosiale
                        entreprenørene som gjør en betydelig innsats
                        rundt omkring i landet vårt. For SosEnt Norge er
                        det også viktig at det ikke settes noen særlige
                        begrensinger på graden av kommersielle inntekter
                        for å kunne stå i det foreslåtte registret.`,
                        `Det må jo være bra at den kommersielle driften
                        ute hos de sosiale entreprenørene er med på å
                        betale den velferden som disse aktørene bidrar
                        til gjennom formålsparagraf og utbytteforbud,
                        avslutter Kvarme.`]
                    },
                ],
            },
            tags:
            [
                /*{
                    id: generateHexID(),
                    label: "Nyheter",
                },*/
            ]
        },
        {
            id: "1",
            title: 'Ny landsforening skal styrke sosiale entreprenører',
            img:
            { 
                alt: 'KIME-klar-kompetanse-kokk-herre-dame.jpg',
                cls: ['article-figure','article-img'],
                src: '/media/images/misc-images/klar-kompetanse-kokk-herre-dame.jpg',
                caption: 'Fotograf Karina Lange, Klar Kompetanse',
            },

            date:
            {
                published: '2025.04.22',
            },

            ingress: {
                content: `SosEnt Norge er etablert for å styrke sosiale entreprenører,
                fremme deres samfunnsnytte og forbedre rammevilkårene. Foreningen blir
                et viktig talerør og en møteplass for erfaringsutveksling, med
                Samfunnsbedriftene som sekretariat. Meld din interesse!`
            },

            section:
            {
                title: `Ny forening samler og styrker Norges "fjerde sektor"`,
                contents:
                [
                    {
                        id: 0,
                        content: [`Den nye foreningen SosEnt Norge skal
                        være et talerør for bransjen, fremme
                        erfaringsutveksling og synliggjøre medlemmenes
                        betydelige samfunnsnytte. Sett gjerne av to
                        minutter for å melde interesse.`,
                        `I en tid med økende utenforskap, ser vi en voksende
                        interesse for å fremme løsninger på ulike sosiale
                        problemer, sier generalsekretær Rune Kvarme i SosEnt
                        Norge. Han leder den nye foreningen som skal samle
                        de ulike sosiale entreprenørene og jobbe for å
                        styrke rammevilkårene deres.`,
                        `Dette er virksomheter som gir verdighet til
                        enkeltmennesker og som utvikler arbeidskraft og
                        kompetanse lokalt. Da trenger de en sterkere stemme
                        opp mot ulike myndigheter og i samfunnsdebatten
                        generelt.`
                    ],
                    cta:
                        [
                            {
                                id: generateHexID(),
                                title: 'Er du en sosial entreprenør?',
                                content: `Ellers ønsker du å bli det? Da ville det
                                hjelpe oss stort om du tok deg to minutter til å
                                melde din interesse ved besvare noen spørsmål. Å
                                svare er helt uforpliktende og innebærer ikke
                                innmelding.`,
                                anchor: 
                                [
                                    {
                                        id: generateHexID(),
                                        href: '#/medlemskap',
                                        label: 'MELD DIN INTERESSE',
                                    },
                                ],
                            },
                            {
                                id: generateHexID(),
                                title: 'Sosiale entreprenører',
                                content: `Sosiale entreprenører jobber for å løse
                                samfunnsutfordringer gjennom innovative løsninger
                                som kombinerer økonomisk bærekraft med sosiale mål.
                                Til tross for deres betydelige samfunnsbidrag,
                                møter de ofte utfordringer knyttet til finansiering,
                                reguleringer og anerkjennelse.`,
                            },
                            {
                                id: generateHexID(),
                                title: 'SosEnt Norge',
                                content: `SosEnt Norge skal jobbe for at sosiale
                                entreprenører skal få bedre rammevilkår. I
                                grunnlagsdokumentet kan du lese mer om bakgrunn,
                                interimstyret og finansiering: Grunnlagsdokumentet
                                for SosEnt Norge`,
                                media:
                                [
                                    {
                                        id: generateHexID(),
                                        filter: 'grunnlags-dokument',
                                    }
                                ]
                            },
                        ],
                    },

                    {
                        id: 1,
                        title: 'Hva er SosEnt Norge?',
                        content: 
                        [ `I denne bransjen er det mange dyktige og sterke
                        fagmiljøer. Ved å komme sammen og dele erfaringer,
                        tror vi også det er et potensial for at de kan
                        spille hverandre enda bedre. Som kjent kan det være
                        mye å lære av andre.`,
                        ],
                    },
                    {
                        id: 4,
                        title: 'Hva skal SosEnt Norge gjøre?',
                        content: ['formålet med SosEnt Norge er å:'],
                        list: [
                            {
                                id: generateHexID(),
                                bullet: `Definere sosialt entreprenørskap i en
                                norsk kontekst.`,
                            },
                            {
                                id: generateHexID(),
                                bullet: `Spre kunnskap om denne «fjerde sektoren».`,
                            },
                            {
                                id: generateHexID(),
                                bullet: `Påvirke interessepolitisk for å bedre
                                rammevilkårene til sosiale entreprenører i Norge.`,
                            },
                            {
                                id: generateHexID(),
                                bullet: `Gjøre det lettere å finne finansiering
                                til drift og lage partnerskap med det offentlige.`,
                            },
                            {
                                id: generateHexID(),
                                bullet: `Svare ut aktuelle høringer som angår
                                de sosiale entreprenørene.`,
                            },
                            {
                                id: generateHexID(),
                                bullet: `Spredning av kunnskap, og lage
                                matnyttige nettverk og møteplasser for
                                foreningens medlemmer.`,
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: 'Samfunnsbedriftene er sekretariat',
                        content: [`Samfunnsbedriftene er valgt som
                        sekretariat for den nye foreningen. Det er flere
                        grunner til dette. For det første har
                        Samfunnsbedriftene mye kompetanse innenfor
                        politisk påvirkning, juridisk rådgivning og
                        nettverksbygging. For det andre kan
                        Samfunnsbedriftenes tilknytning til KS gi sosiale
                        entreprenører en viktig plattform for å fremme
                        sine interesser. Ved å benytte seg av
                        Samfunnsbedriftenes kapasitet, kan SosEnt Norge
                        dessuten konsentrere seg om sine kjerneoppgaver.
                        Det hører også med til historien at det var
                        Samfunnsbedriftene som i 2024 tok initiativ til å
                        samle de ulike sosiale entreprenørene og sondere
                        viljen til å danne en forening.`]
                    },
                    {
                        id: 6,
                        title: 'Er du en sosial entreprenør?',
                        content: 
                        [`Ellers ønsker du å bli det? Da ville det hjelpe
                        oss stort om du tok deg to minutter til å melde din
                        interesse ved besvare noen spørsmål. Å svare er
                        helt uforpliktende og innebærer ikke innmelding.`
                        ],
                        anchor:
                        {
                            cls: ['read-more'],
                            href: '#/aktuelt/artikkel/1',
                            label: 'samle de ulike sosiale entreprenørene ',
                        },
                    },
                ],
            },
            tags:
            [
                /*{
                    id: generateHexID(),
                    label: 'Nyheter',
                }*/
            ],
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
            },
        },
        {
            id: "2",
            title: "SosEnt Norge i møte med Arbeids- og inkluderingsdepartementet",
            img:
                {
                    alt: "99ad4db9501e7456c8359501bbc9d0bffa7e6701-1814x1199.webp",
                    caption: "Fra venstre: generalsekretær Rune Kvarme, statssekretær Per Olav Skurdal Hopsø, styreleder Helle Rødahl og assosiert administrasjonsrådgiver Anna Trageton Skofteland. Foto: Arbeids- og inkluderingsdepartementet.",
                    cls: ["figure-grid","article-img"],
                    src: "/media/images/news/99ad4db9501e7456c8359501bbc9d0bffa7e6701-1814x1199.webp"
                },

            date:
            {
                published: '2025.08.29',
            },

            ingress: {
                content: "Som del av innsatsen med å gjøre seg kjent, var SosEnt Norge den 28. august i møte med statssekretær Per Olav Skurdal Hopsø (Ap) i Arbeids- og inkluderingsdepartementet."
            },

            section:
            {
                title: "- Som del av innsatsen med å gjøre seg kjent, var SosEnt Norge den 28. august i møte med statssekretær Per Olav Skurdal Hopsø (Ap) i Arbeids- og inkluderingsdepartementet.",
                contents:
                [
                    {
                        id: 0,
                        content:
                        [
                            "Møtet fant sted i Arbeids- og inkluderingsdepartementets lokaler i Oslo. Fra SosEnt Norges side deltok generalsekretær Rune Kvarme, styreleder Helle Rødahl og assosiert administrasjonsrådgiver Anna Trageton Skofteland.",
                            "Etter å ha presentert organisasjonen som han leder, belyste Kvarme noen av problemstillingene som må løses for at man for alvor kan sette sosialt entreprenørskap på kartet.",
                            "Under sin presentasjon påpekte han blant annet at SosEnt Norge skal være et talerør for sosiale entreprenører, fremmer erfaringsutveksling og synliggjør medlemmenes betydelige samfunnsnytte."
                        ],
                    },
                    {
                        id: 1,
                        title: "Foreningens formål",
                        content:
                        [
                        ],

                        list:
                        [
                            {
                                id: generateHexID(),
                                bullet: "Definere sosialt entreprenørskap i en norsk kontekst",
                            },
                            {
                                id: generateHexID(),
                                bullet: `Spre kunnskap om denne «fjerde sektoren».`,
                            },
                            {
                                id: generateHexID(),
                                bullet: "Påvirke rammevilkår for sosiale entreprenører"
                            },
                            {
                                id: generateHexID(),
                                bullet: "Skape møteplasser og nettverk",
                            },
                            {
                                id: generateHexID(),
                                bullet: "Skape møteplasser og nettverk",
                            },
                            {
                                id: generateHexID(),
                                bullet: `Spredning av kunnskap, og lage
                                matnyttige nettverk og møteplasser for
                                foreningens medlemmer.`,
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "Ønsker kontakt",
                        content:
                        [
                            "Skurdal Hopsø ga uttrykk for at han syntes dette var et spennende initiativ. Han ønsket den nye foreningen velkommen, og vil at vi holder kontakt i tiden fremover.",
                            "Dette møtet var en del av SosEnt Norges pågående innsats for å gjøre foreningen kjent. Dette vil omfatte møter med ulike departementer, direktorater og politiske partier."
                            
                        ],
                    },

                ],
            },
            tags:
            [/*
                {
                    id: generateHexID(),
                    label: "Nyheter",
                },
                {
                    id: generateHexID(),
                    label: "Arbeids- og inkluderingsdepartementet",
                }*/
            ]
        },
    ]);

// API simulation
export const fetchNews = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(articles);}, 10);
    })
}
