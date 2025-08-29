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
                    [
                        `SosEnt Norge – Landsforeningen for sosiale
                        entreprenører – er en interessepolitisk forening
                        som søker å styrke og påvirke rammebetingelser og
                        regelverk til beste for sosiale entreprenører i
                        Norge.`,
                        `Vi arbeider for å få etablert forståelsen og
                        aksepten for denne 4. sektoren hos myndigheter,
                        beslutningstakerne og de andre sektorene; offentlig,
                        privat og frivillig.`,

                        `Foreningen ønsker å være en kunnskapsbank for
                        sosiale entreprenører, og en høringsinstans for
                        saker som angår sosialt entreprenørskap. Vi vil
                        rådgi våre medlemmer, gjøre tilgjengelig
                        informasjon om støtte- og tilskuddsordninger og
                        bidra med aktuelle tolkninger av forskrifter og
                        regelverk. Vi vil også arrangere møteplasser og
                        nettverk for sosiale entreprenører og andre som
                        er interessert i sosialt entreprenørskap.`,
                        
                        `Foreningen etablerer fordelsprogram med aktuelle
                        leverandører av varer, programvare og
                        forsikringsordninger. Et medlemskap i SosEnt Norge
                        lønner seg!`,
                        `Foreningen ble stiftet i april 2025.
                        Samfunnsbedriftene ivaretar foreningens
                        sekretariat/sekretariatsfunksjoner, og
                        generalsekretæren har sin ansettelse der`, 
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
                console.warn("Member Added : ", member);
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
                        console.log("Media fetched successfully: ", data.data);
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