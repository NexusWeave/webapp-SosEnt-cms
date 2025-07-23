//  This file is an Api simulation of the SoSEnT web application project.
import {reactive } from 'vue';

import { generateHexID } from '@/utils/utils.js';

// API simulation
const mediaContent = reactive();
export const fetchMedia = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(mediaContent);}, 10);
    })
}