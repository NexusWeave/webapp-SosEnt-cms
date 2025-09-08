//  This file is a part of the SoSEnT web application project.
import { defineStore } from 'pinia';
import { generateHexID} from '@/utils/utils';

export const organizationStore = defineStore('organizationData',
    {
        state: () => (
            {
                data:
                {
                    title: 'Om SosEnt Norge',
                    content:
                    [ `SosEnt Norge er en landsforening for sosiale entreprenører i Norge.
                        Foreningen ble etablert for å være et tydelig talerør for bransjen,
                        styrke rammevilkårene for sosiale entreprenører og synliggjøre deres
                        betydelige samfunnsbidrag.`,

                        `I en tid med økende utenforskap og behov for nye løsninger på sosiale
                        utfordringer, samler SosEnt Norge virksomheter som kombinerer sosialt
                        engasjement med entreprenørskap. Disse aktørene bidrar til å skape verdighet,
                        arbeid og kompetanse lokalt – og representerer det som ofte omtales som
                        «den fjerde sektoren».`,

                       `Foreningens hovedformål er å:
                            Definere og tydeliggjøre sosialt entreprenørskap i en norsk kontekst
                            Spre kunnskap om sosiale entreprenører og deres rolle i samfunnet
                            Påvirke politisk for å bedre rammevilkårene for sektoren
                            Legge til rette for finansiering og partnerskap med offentlige aktører
                            Skape møteplasser og nettverk for erfaringsdeling og faglig utvikling
                            Svare på relevante høringer og bidra i samfunnsdebatten`,

                        `SosEnt Norge har valgt Samfunnsbedriftene som sekretariat, noe som gir foreningen
                        tilgang til solid kompetanse innen politisk påvirkning, juridisk rådgivning og
                        nettverksbygging. Dette gjør det mulig for SosEnt Norge å fokusere på sine
                        kjerneoppgaver og styrke fellesskapet blant sosiale entreprenører i hele
                        landet`, 
                    ],

                    team: 
                    {
                        team: [],
                        isLoaded: false,
                        title: 'styre / sekretariat',
                    },
                }
            }),
        actions:
        {
            addToTeam(member)
            {

                member.id = generateHexID();
                
                const contactInfo = member.contactInfo;
                contactInfo.forEach((card) =>
                    {
                        const anchor = card.anchor;
                        const label = anchor.href.split(':');

                        card.id % 2 === 0 ? anchor.label = 'Send en Epost' : anchor.label = label[1];
                        card.id % 2 === 0 ? anchor.type = ['email', 'external'] : anchor.type = ['telephone', 'external'];
                        anchor.cls = anchor.type[0];
                    });
                //console.warn("Added to Organization : ", member);
                this.data.team.team.push(member);
            },
            async fetchData()
            { 
                if (this.data.isLoaded) return;

                const path = '/apis/sosent-organization-api.json';
                await fetch(path).then((response) => response.json()).then((data) => 
                    {
                        data.data.forEach((item) => {
                            this.addToTeam(item);
                        });
                        this.data.team.isLoaded = true;
                        //console.log("Organization fetched successfully: ", data.data);
                    }).catch((error) =>
                    {

                        this.data.team.isLoaded = false;
                        console.error("Error fetching media: ", error);

                    });
            },
        },
        getters:
        {
            title : (state) => {return state.data.title;},
            content: (state) => {return state.data.content;},
            isLoaded: (state) => {return state.data.isLoaded;},

            team: (state) => {return state.data.team;},     
            organizationMembers: (state) => {return state.data.team.team;},
            
        },
    });