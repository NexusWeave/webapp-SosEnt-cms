//  This file is a part of the SoSEnT web application project.
import {reactive } from 'vue';
import { fetchOrganization } from '@/services/sosent-organization-api.js';


const organization = reactive();

export const fetchOrganization = async () =>
{
    return new Promise(resolve => {
        setTimeout(() => {resolve(organization);}, 10);
    })
}