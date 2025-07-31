//  This file is an Api simulation of the SoSEnT web application project.
import {reactive } from 'vue';

import { generateHexID } from '@/utils/utils.js';

// API simulation
const mediaContent = {
    media:
    [
        {
            type: 'pdf',
            id: generateHexID(),
            label: 'organisasjonens Kart',
            date: {published: '01.04-2025'},
            name: 'SosEnt-Norge-organisajonskart',
            description: 'organisasjonenskart over styret i foreningen.',

            tag:
            [
                'organisasjonen', 'dokumenter', 'medlemskap', 'pdf',
                'organisasjonskart'
            ],
        },
        {
            type: 'pdf',
            label: 'Vedtekter',
            id: generateHexID(),
            name: 'SosEnt-Norge-Vedtekter',
            date: {published: '01.04-2025'},
            description: 'Vedtekter for medlemmene i foreningen.',

            tag: 
            [
                'organisasjonen', 'dokumenter', 'medlemskap', 'pdf',
                'vedtekter'
            ],
            
        },
        {
            type: 'pdf',
            id: generateHexID(),
            label: 'Grunnlags Dokument',
            date: {published: '02.28-2025'},
            name: 'SosEnt-Norge-GrunnlagsDokument',
            description: 'Grunnlags Dokument for foreningen.',

            tag: 
            [
                'organisasjonen', 'dokumenter', 'medlemskap', 'pdf',
                'grunnlag', 'cta-dokument'
            ],

        },
        {
            type: 'pdf',
            label: 'Medlemmer',
            id: generateHexID(),
            name: 'SosEnt-Norge-Medlemmer',
            date: {published: '02.28-2025'},
            description: 'Liste med medlemmer av foreningen.',

            tag:
            [
                'organisasjonen', 'dokumenter', 'medlemskap', 'pdf',
                'medlemmer'
            ],
        },
    ],
}

export const fetchMedia = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(mediaContent.media);}, 10);
    })
}