//  This file is an Api simulation of the SoSEnT web application project.
import {reactive } from 'vue';

import { generateHexID } from '@/utils/utils.js';

const partnerData = reactive(
    {
        cls: ['partner-container', 'flex-wrap-row-justify-space-evenly'],
        data: 
        [
            {
                id: generateHexID(),
                type: ['external'],
                href: 'https://www.example.com',
                cls: ['flex-wrap-row-justify-space-evenly'],

                img:
                {
                    type: 'png',
                    alt: 'SoSent Logo',
                    cls:['partner-img'],
                    src: '/media/images/partners/SosEnT-favicon.png',
                },
            },
            {
                id: generateHexID(),
                type: ['external'],
                href: 'https://www.example.com',
                cls: ['flex-wrap-row-justify-space-evenly'],

                img:
                {
                    type: 'png',
                    alt: 'SoSent Logo',
                    cls:['partner-img'],
                    src: '/media/images/partners/SosEnT-favicon.png',
                },
            },
            {
                id: generateHexID(),
                type: ['external'],
                href: 'https://www.example.com',
                cls: ['flex-wrap-row-justify-space-evenly'],

                img:
                {
                    type: 'png',
                    alt: 'SoSent Logo',
                    cls:['partner-img'],
                    src: '/media/images/partners/SosEnT-favicon.png',
                },
            },
            {
                id: generateHexID(),
                type: ['img','external'],
                href: 'https://www.example.com',
                cls: ['flex-wrap-row-justify-space-evenly'],

                img:
                {
                    type: 'png',
                    alt: 'SoSent Logo',
                    cls:['partner-img'],
                    src: '/media/images/partners/SosEnT-favicon.png',
                },
            },
            {
                id: generateHexID(),
                type: ['img','external'],
                href: 'https://www.example.com',
                cls: ['flex-wrap-row-justify-space-evenly'],

                img:
                {
                    type: 'png',
                    alt: 'SoSent Logo',
                    cls:['partner-img'],
                    src: '/media/images/partners/SosEnT-favicon.png',
                },
            },
            {
                id: generateHexID(),
                type: ['img','external'],
                href: 'https://www.example.com',
                cls: ['flex-wrap-row-justify-space-evenly'],

                img:
                {
                    type: 'png',
                    alt: 'SoSent Logo',
                    cls:['partner-img'],
                    src: '/media/images/partners/SosEnT-favicon.png',
                },
            },
        ],
    },);

export const fetchPartners = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(partnerData);}, 10);
    })
}