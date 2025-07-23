//  This file is a part of the SoSEnT web application project.
import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { fetchOrganization } from '@/services/sosent-organization-api.js';

export const organizationStore = defineStore('organizationData',
    {
        state: () => ({
            data: {
                title: 'Media',
                cls: ['flex-column', 'flex-wrap-row-justify-space-evenly'],
                items: [],
                isLoaded: false,
            },
        }),
        actions:
        {
        },
        getters:
        {
        },
    });