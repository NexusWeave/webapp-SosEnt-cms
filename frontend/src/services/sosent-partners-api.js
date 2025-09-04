//  This file is an Api simulation of the SoSEnT web application project.
import {reactive } from 'vue';

import { generateHexID } from '@/utils/utils.js';

const partnerData = reactive(
    [

    ]);

export const fetchPartners = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(partnerData);}, 10);
    })
}