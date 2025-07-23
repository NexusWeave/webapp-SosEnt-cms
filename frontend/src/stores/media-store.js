//  This file is a part of the SoSEnT web application project.
import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { fetchMedia } from '@/services/sosent-media-api.js';

export const mediaStore = defineStore('mediaData',
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
