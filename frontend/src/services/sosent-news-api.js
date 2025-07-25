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
                    id: generateHexID(),
                    label: 'registerløsning',
                },
                {
                    id: generateHexID(),
                    label: 'rammevilkår',
                }
            ],

            img:
            { 
                alt: 'KIME-ressurssenter.jpg',
                cls: ['article-figure','article-img'],
                src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                caption: 'Foto: KIME Ressurssenter',
            },

            date:
            {
                updated: '01.06-2025',
                published: '01.06-2025',
            },

            ingress: {
                title: `Sosialt entreprenørskap må ikke svekkes av 
                registerkrav`,
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
                        cls: ['article-figure','article-img'],
                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                },
                contents:
                [
                    {
                        
                        cls: ['flex-row'],
                        id: generateHexID(),
                        content: `– Vi må ikke skylle de sosiale
                        entreprenørene ut med badevannet gjennom en ny
                        registerløsning. Det sier generalsekretær
                        Rune Kvarme i SosEnt Norge, som nylig var med på
                        et dialogmøte i Digitaliserings- og
                        forvaltningsdepartementet.`,
                        img:
                        {
                            alt: 'KIME-ressurssenter.jpg',
                            caption: 'Foto: KIME Ressurssenter',
                            cls: ['content-figure','article-img'],
                            src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                        },
                    },
                    {
                        id: generateHexID(),
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
                        id: generateHexID(),
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
            },
        },
        {
            id: "1",
            title: 'Sosialt entreprenørskap må ikke svekkes av registerkrav',
            tags:[
                {
                    id: generateHexID(),
                    label: 'registerløsning',
                },
                {
                    id: generateHexID(),
                    label: 'rammevilkår',
                }
            ],

            img:
            { 
                alt: 'KIME-ressurssenter.jpg',
                cls: ['article-figure','article-img'],
                src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                caption: 'Foto: KIME Ressurssenter',
            },

            date:
            {
                published: '01.05-2025',
            },

            ingress: {
                title: `Sosialt entreprenørskap må ikke svekkes av 
                registerkrav`,
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
                        cls: ['article-figure','article-img'],
                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                },
                contents:
                [
                    {
                        cls: ['flex-row'],
                        id: generateHexID(),
                        content: `– Vi må ikke skylle de sosiale
                        entreprenørene ut med badevannet gjennom en ny
                        registerløsning. Det sier generalsekretær
                        Rune Kvarme i SosEnt Norge, som nylig var med på
                        et dialogmøte i Digitaliserings- og
                        forvaltningsdepartementet.`,
                        img:
                        {
                            alt: 'KIME-ressurssenter.jpg',
                            caption: 'Foto: KIME Ressurssenter',
                            cls: ['content-figure','article-img'],
                            src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                        },
                    },
                    {
                        id: generateHexID(),
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
                        id: generateHexID(),
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
            },
        },
        {
            id: "2",
            title: 'Sosialt entreprenørskap må ikke svekkes av registerkrav',
            tags:[
                {
                    id: generateHexID(),
                    label: 'registerløsning',
                },
                {
                    id: generateHexID(),
                    label: 'rammevilkår',
                }
            ],

            img:
            { 
                alt: 'KIME-ressurssenter.jpg',
                cls: ['article-figure','article-img'],
                src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                caption: 'Foto: KIME Ressurssenter',
            },

            date:
            {
                published: '01.04-2025',
            },

            ingress: {
                title: `Sosialt entreprenørskap må ikke svekkes av 
                registerkrav`,
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
                        cls: ['article-figure','article-img'],
                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                },
                contents:
                [
                    {
                        cls: ['flex-row'],
                        id: generateHexID(),
                        content: `– Vi må ikke skylle de sosiale
                        entreprenørene ut med badevannet gjennom en ny
                        registerløsning. Det sier generalsekretær
                        Rune Kvarme i SosEnt Norge, som nylig var med på
                        et dialogmøte i Digitaliserings- og
                        forvaltningsdepartementet.`,
                        img:
                        {
                            alt: 'KIME-ressurssenter.jpg',
                            caption: 'Foto: KIME Ressurssenter',
                            cls: ['content-figure','article-img'],
                            src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                        },
                    },
                    {
                        id: generateHexID(),
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
                        id: generateHexID(),
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
            },
        },
        {
            id: "3",
            title: 'Sosialt entreprenørskap må ikke svekkes av registerkrav',
            tags:[
                {
                    id: generateHexID(),
                    label: 'registerløsning',
                },
                {
                    id: generateHexID(),
                    label: 'rammevilkår',
                }
            ],

            img:
            { 
                alt: 'KIME-ressurssenter.jpg',
                cls: ['article-figure','article-img'],
                src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                caption: 'Foto: KIME Ressurssenter',
            },

            date:
            {
                published: '01.03-2025',
            },

            ingress: {
                title: `Sosialt entreprenørskap må ikke svekkes av 
                registerkrav`,
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
                        cls: ['article-figure','article-img'],
                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                },
                contents:
                [
                    {
                        cls: ['flex-row'],
                        id: generateHexID(),
                        content: `– Vi må ikke skylle de sosiale
                        entreprenørene ut med badevannet gjennom en ny
                        registerløsning. Det sier generalsekretær
                        Rune Kvarme i SosEnt Norge, som nylig var med på
                        et dialogmøte i Digitaliserings- og
                        forvaltningsdepartementet.`,
                        img:
                        {
                            alt: 'KIME-ressurssenter.jpg',
                            caption: 'Foto: KIME Ressurssenter',
                            cls: ['content-figure','article-img'],
                            src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                        },
                    },
                    {
                        id: generateHexID(),
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
                        id: generateHexID(),
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
            },
        },
        {
            id: "4",
            title: 'Sosialt entreprenørskap må ikke svekkes av registerkrav',
            tags:[
                {
                    id: generateHexID(),
                    label: 'registerløsning',
                },
                {
                    id: generateHexID(),
                    label: 'rammevilkår',
                }
            ],

            img:
            { 
                alt: 'KIME-ressurssenter.jpg',
                cls: ['article-figure','article-img'],
                src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                caption: 'Foto: KIME Ressurssenter',
            },

            date:
            {
                published: '01.02-2025',
            },

            ingress: {
                title: `Sosialt entreprenørskap må ikke svekkes av 
                registerkrav`,
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
                        cls: ['article-figure','article-img'],
                        src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                },
                contents:
                [
                    {
                        cls: ['flex-row'],
                        id: generateHexID(),
                        content: `– Vi må ikke skylle de sosiale
                        entreprenørene ut med badevannet gjennom en ny
                        registerløsning. Det sier generalsekretær
                        Rune Kvarme i SosEnt Norge, som nylig var med på
                        et dialogmøte i Digitaliserings- og
                        forvaltningsdepartementet.`,
                        img:
                        {
                            alt: 'KIME-ressurssenter.jpg',
                            caption: 'Foto: KIME Ressurssenter',
                            cls: ['content-figure','article-img'],
                            src: '/media/images/team/ressurssenter/KIME-ressurssenter.jpg',
                        },
                    },
                    {
                        id: generateHexID(),
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
                        id: generateHexID(),
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
