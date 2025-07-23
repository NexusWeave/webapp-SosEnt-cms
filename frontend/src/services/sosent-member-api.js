//  This file is an Api simulation of the SoSEnT web application project.
import {reactive } from 'vue';

import { generateHexID } from '@/utils/utils.js';

// API simulation
const members = reactive(
    {
        columns: 
        [
            {
                id: 0,
                title: 'Navn',
            },
        ],
        members: 
        [
            {
                id: generateHexID(),
                type: 'external',
                name: 'Medlem 1',
                href: 'https://www.example.com',
                description: 'Beskrivelse av medlem 1.',
            },
            {
                id: generateHexID(),
                type: 'external',
                name: 'Medlem 2',
                href: 'https://www.example.com',
                description: 'Beskrivelse av medlem 2.',
            },
            {
                id: generateHexID(),
                type: 'external',
                name: 'Medlem 3',
                description: 'Beskrivelse av medlem 3.',
            },
            {
                id: generateHexID(),
                type: 'external',
                name: 'Medlem 4',
                href: 'https://www.example.com',
                description: 'Beskrivelse av medlem 4.',
            },
            {
                id: generateHexID(),
                type: 'external',
                name: 'Medlem 5',
                href: 'https://www.example.com',
                description: 'Beskrivelse av medlem 5.',
            },
            {
                id: generateHexID(),
                type: 'external',
                name: 'Medlem 6',
                href: 'https://www.example.com',
                description: 'Beskrivelse av medlem 6.',
            },
        ],
        media:
        {
            file:
            {
                id: generateHexID(),
                type: ['pdf', 'external'],
                cls: ['media-content'],
                href: '/media/files/organization/SosEnt-Norge-Medlemmer.pdf',
                name: 'Medlemsoversikt',
            },
        },
    }
);

export const fetchMembers = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(members);}, 10);
    })
}
