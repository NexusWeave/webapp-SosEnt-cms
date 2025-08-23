//  This file is an Api simulation of the SoSEnT web application project.
import {reactive } from 'vue';
import { generateHexID } from '@/utils/utils.js';

// API simulation
const members = reactive(
    [
    ]);

export const fetchMembers = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(members);}, 10);
    })
}
