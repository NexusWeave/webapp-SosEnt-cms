//  This file is an Api simulation of the SoSEnT web application project.
import { generateHexID } from '@/utils/utils.js';

// API simulation
const mediaContent = {
    media:
    [
        {
            type: 'pdf',
            id: generateHexID(),
            label: 'Personvern',
            date: {published: '2025-06-28'},
            name: 'SosEnt-Norge-Personvern',
            description: 'Personverns ærklering for nettstedet.',
            
            tag: 
            [
                'dokumenter', 'personvern', 'pdf',
            ],
        },
        {
            type: 'pdf',
            id: generateHexID(),
            label: 'Grunnlags Dokument',
            date: {published: '2025-02-28'},
            name: 'SosEnt-Norge-GrunnlagsDokument',
            description: 'Grunnlags Dokument for foreningen.',

            tag: 
            [
                'organisasjonen', 'dokumenter', 'medlemskap', 'pdf',
                'grunnlags-dokument'
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