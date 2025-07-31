//  This file is a part of the SoSEnT web application project.
import {reactive } from 'vue';
import { generateHexID } from '@/utils/utils';


const organization = reactive(
    {
        media:
        [
            {
                type: 'pdf',
                id: generateHexID(),
                date: {published: '01.04-2025'},
                description: 'Organisasjonskart over styret i SosEnt Norge.',
                anchor:
                {
                    type: ['pdf', 'external'],
                    label: 'Organisasjonskart',
                    href: '/media/files/documents/SosEnt-Norge-organisajonskart.pdf',
                },
            },
            {
                type: 'pdf',
                id: generateHexID(),
                date: {published: '01.04-2025'},
                description: 'Vedtekter for medlemmene i SosEnt Norge.',
                anchor:
                {
                    type: ['pdf', 'external'],
                    label: 'Vedtekter',
                    href: '/media/files/documents/SosEnt-Norge-vedtekter.pdf',
                },
            },
        ],
        team:
        [
            {
                id: generateHexID(),
                title: 'Styreleder',
                name: 'Helle V. Rødahl',
            // Make the email and phone numbers bot protected
            contactInfo:
            [
                {
                    id: 0,
                    anchor:
                    {
                        href: 'mailto:' + 'demo' +'@' + 'example.com',
                    },
                },
                {
                    id: 1,
                    anchor:
                    {
                        href : 'tel:' + '+47' + '12' + '34' + '56' + '78',
                    },
                },
            ],

            img:
            {
                type: 'jpg',
                cls: ['card-img'],
                alt: "JPG bilde av Helle V. Rødahl",
                src: '/media/images/team/profil-helle-privat.jpg',
            },
        },
        {
            id: generateHexID(),
            name: 'Rune J. Kvarme',
            title: 'Generalsekretær',

            contactInfo:
            [
                {
                    id: 0,
                    anchor:
                    {
                        href: 'mailto:' + 'rune.kvarme' + '@' + 'samfunnsbedriftene.no',
                    },
                },
                {
                    id: 1,
                    anchor:
                    {
                        href : 'tel:' + '+47' + '12' + '34' + '56' + '78',    
                    },
                    
                },
            ],

            img:
            {
                type: 'png',
                cls: ['card-img'],
                alt: "Rune J. Kvarme ",
                src: '/media/images/team/52700234381_5e75074f92_q.jpg',
            },
        },
        ],
    });

export const fetchData = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(organization);}, 10);
    })
}