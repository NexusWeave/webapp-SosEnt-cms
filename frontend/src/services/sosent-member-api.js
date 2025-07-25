//  This file is an Api simulation of the SoSEnT web application project.
import {reactive } from 'vue';
import { generateHexID } from '@/utils/utils.js';

// API simulation
const members = reactive(
    [
        {
            id: generateHexID(),
            description: 'Beskrivelse av medlem 1.',
            anchor: 
            {
                label: 'Medlem 1',
                href: 'https://www.example.com',
            },
        },
        {
            id: generateHexID(),
            description: 'Beskrivelse av medlem 2.',
            anchor: 
            {
                label: 'Medlem 2',
                href: 'https://www.example.com',
            },
        },
        {
            id: generateHexID(),
            description: 'Beskrivelse av medlem 3.',
            anchor: 
            {
                label: 'Medlem 3',
                href: 'https://www.example.com',
            },
        },
        {
            id: generateHexID(),
            description: 'Beskrivelse av medlem 4.',
            anchor: 
            {
                label: 'Medlem 4',
                href: 'https://www.example.com',
            },
        },
        {
            id: generateHexID(),
            description: 'Beskrivelse av medlem 5.',
            anchor: 
            {
                label: 'Medlem 5',
                href: 'https://www.example.com',
            },
        },
        {
            id: generateHexID(),
            description: 'Beskrivelse av medlem 5.',
            anchor: 
            {
                label: 'Medlem 6',
                href: 'https://www.example.com',
            },
        },
    ]);

export const fetchMembers = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(members);}, 10);
    })
}
