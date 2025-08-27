//  This file is a part of the SoSEnT web application project.
import { defineStore } from 'pinia';
import { generateHexID } from '@/utils/utils.js';

export const mediaStore = defineStore('mediaData',
    {
        state: () => ({
            paths:
            {
                images: '/media/images/',
                documents: '/media/files/documents/',
            },
            data: {
                title: 'Dokumenter',
                media: [],
                archived: [],
                isLoaded: false,
            },
        }),
        actions:
        {
            addMedia(item)
            {
                const paths = this.paths;
                const media = this.data.media;

                item.id = generateHexID();

                switch (item.type)
                {
                    case 'pdf':
                        item.anchor =
                        {
                            label: item.label,
                            type: [item.type, 'external'],
                            href: paths.documents + item.name + '.' + item.type,
                        }
                }
                if (item.type === 'image')
                {
                    item.anchor.href = paths.images + item.anchor.href;
                }
                media.push(item);                
                //console.warn('Media added:', item.label);
            },

            async fetchData()
            { 
                const media = this.data;
                if (media.isLoaded) return;

                const path = '/apis/sosent-media-api.json';
                await fetch(path).then((response) => response.json()).then((data) => {
                    data.data.forEach((item) => {
                        this.addMedia(item);
                    });
                    media.isLoaded = true;
                }).catch((error) =>
                {

                    this.data.isLoaded = false;
                    console.error("Error fetching media: ", error);

                });
            },

        },
        getters:
        {
            mediaFilter: (state) => (tag) =>
            {
                let media = state.data.media;
                media = media.filter((item) => 
                    item.tag.includes(tag) &&
                    item.isFiltered === false
                );
                return media.sort((a, b) => {
                    return new Date(b.date.published) - new Date(a.date.published);
                });
            },
            title: (state) => state.data.title,
            media: (state) => state.data.media,
            isLoaded: (state) => state.data.isLoaded,
            
        },
    });
