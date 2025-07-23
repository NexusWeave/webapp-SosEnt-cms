//  This file is a part of the SoSEnT web application project.
import { reactive } from 'vue';
import { defineStore } from 'pinia';

import { fetchPartners } from '@/services/sosent-partners-api.js';

export const partnerStore = defineStore('partnerData',
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
