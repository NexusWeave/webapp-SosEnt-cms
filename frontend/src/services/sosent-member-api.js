//  This file is an Api simulation of the SoSEnT web application project.
import {reactive } from 'vue';

import { generateHexID } from '@/utils/utils.js';

// API simulation
const members = reactive(
    [
        {
            id: generateHexID(),
            label: 'Medlem 1',
            description: 'Beskrivelse av medlem 1.',
            anchor: 
            {
                label: 'Medlem 1',
                href: 'https://www.example.com',
            },
        },
        {
            id: generateHexID(),
            label: 'Medlem 2',
            href: 'https://www.example.com',
            description: 'Beskrivelse av medlem 2.',
        },
        {
            id: generateHexID(),
            label: 'Medlem 3',
            description: 'Beskrivelse av medlem 3.',
        },
        {
            id: generateHexID(),
            label: 'Medlem 4',
            href: 'https://www.example.com',
            description: 'Beskrivelse av medlem 4.',
        },
        {
            id: generateHexID(),
            label: 'Medlem 5',
            href: 'https://www.example.com',
            description: 'Beskrivelse av medlem 5.',
        },
        {
            
            label: 'Medlem 6',
            id: generateHexID(),
            href: 'https://www.example.com',
            description: 'Beskrivelse av medlem 6.',
        },
    ]);

export const fetchMembers = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(members);}, 10);
    })
}
