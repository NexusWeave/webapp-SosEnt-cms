//  This file is an Api simulation of the SoSEnT web application project.
import {reactive } from 'vue';

import { generateHexID } from '@/utils/utils.js';

const organization = reactive();

export const fetchOrganization = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(organization);}, 10);
    })
}