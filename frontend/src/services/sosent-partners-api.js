//  This file is an Api simulation of the SoSEnT web application project.
import {reactive } from 'vue';

import { generateHexID } from '@/utils/utils.js';

const partnerData = reactive(
    [
        {
            id: generateHexID(),
            anchor: 
            {
                type: 'external',
                href: 'https://www.example.com',
                img:
                {
                    type: 'png',
                    alt: 'SoSent Logo',
                    cls:['partner-img'],
                    src: '/media/images/partners/SosEnT-favicon.png',
                },
            },
        },
        {
            id: generateHexID(),
            anchor: 
            {
                type: 'external',
                href: 'https://www.example.com',
                img:
                {
                    type: 'png',
                    alt: 'SoSent Logo',
                    cls:['partner-img'],
                    src: '/media/images/partners/SosEnT-favicon.png',
                },
            },
        },
        {
            id: generateHexID(),
            anchor: 
            {
                type: 'external',
                href: 'https://www.example.com',
                img:
                {
                    type: 'png',
                    alt: 'SoSent Logo',
                    cls:['partner-img'],
                    src: '/media/images/partners/SosEnT-favicon.png',
                },
            },
        },
        {
            id: generateHexID(),
            anchor: 
            {
                type: 'external',
                href: 'https://www.example.com',
                img:
                {
                    type: 'png',
                    alt: 'SoSent Logo',
                    cls:['partner-img'],
                    src: '/media/images/partners/SosEnT-favicon.png',
                },
            },
        },
        {
            id: generateHexID(),
            anchor: 
            {
                type: 'external',
                href: 'https://www.example.com',
                img:
                {
                    type: 'png',
                    alt: 'SoSent Logo',
                    cls:['partner-img'],
                    src: '/media/images/partners/SosEnT-favicon.png',
                },
            },
        },
        {
            id: generateHexID(),
            anchor: 
            {
                type: 'external',
                href: 'https://www.example.com',
                img:
                {
                    type: 'png',
                    alt: 'SoSent Logo',
                    cls:['partner-img'],
                    src: '/media/images/partners/SosEnT-favicon.png',
                },
            },
        },
        {
            id: generateHexID(),
            anchor: 
            {
                type: 'external',
                href: 'https://www.example.com',
                img:
                {
                    type: 'png',
                    alt: 'SoSent Logo',
                    cls:['partner-img'],
                    src: '/media/images/partners/SosEnT-favicon.png',
                },
            },
        },
    ],
);

export const fetchPartners = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(partnerData);}, 10);
    })
}