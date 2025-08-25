//  This file is a part of the SoSEnT web application project.
import {reactive } from 'vue';
import { generateHexID } from '@/utils/utils';


const organization = reactive(
    {
        team:
        [
        {
            id: generateHexID(),
            title: 'Styreleder',
            name: 'Helle V. Rødahl',
            contactInfo:
            [
                {
                    id: 0,
                    anchor:
                    {
                        href: 'mailto:' + 'helle.' + 'rodahl' +'@' + 'bsn.oslo.kommune.no',
                    },
                },
                {
                    id: 1,
                    anchor:
                    {
                        href : 'tel:' + '+47' + '41' + '45' + '45' + '00',
                    },
                },
            ],

            img:
            {
                type: 'jpg',
                cls: ['card-img'],
                alt: "JPG bilde av Helle V. Rødahl",
                src: '/media/images/team/SosEnt-helle.jpg',
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
                        href : 'tel:' + '+47' + '41' + '54' + '03' + '53',
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