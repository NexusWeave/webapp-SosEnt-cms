//  This file is a part of the SoSEnT web application project.
import {reactive } from 'vue';
import { generateHexID } from '@/utils/utils';


const organization = reactive(
    {
        team:
        [

        ],
    });

export const fetchData = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(organization);}, 10);
    })
}