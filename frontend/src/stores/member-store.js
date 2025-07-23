//  This file is a part of the SoSEnT web application project.
import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { fetchMembers } from '@/services/sosent-member-api.js';

export const memberStore = defineStore('memberData',
    {
        state: () => ({
            data: {
                title: 'Medlemmer',
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