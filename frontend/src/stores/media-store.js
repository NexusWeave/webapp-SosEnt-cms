//  This file is a part of the SoSEnT web application project.
import { defineStore } from 'pinia';
import { fetchMedia } from '@/services/sosent-media-api.js';

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
                console.warn('Media added:', item);
            },

            fetchMedia()
            { 
                const media = this.data;
                if (media.isLoaded) return;

                fetchMedia().then((data) =>
                    {
                        media.isLoaded = true;
                        data.forEach((item) => {
                            this.addMedia(item);
                        });
                    }).catch((error) =>
                    {
                        this.data.isLoaded = false;
                        console.error("Error fetching media: ", error);
                    });
            },
            sortMedia()
            {

            },
            archiveMedia()
            {
                const media = this.data.media;
                const archive = this.data.archived;
                media.forEach((item) => {
                    if (item.tag != 'organization')
                    {
                        archive.push(item);
                    }
                });
                this.data.media = media.filter(item => !item.archived);
            }

        },
        getters:
        {
            mediaFilter: (state) => (tag) =>
            {
                return state.data.media.filter((item) => item.tag.includes(tag));
            },
            title: (state) => state.data.title,
            media: (state) => state.data.media,
            isLoaded: (state) => state.data.isLoaded,
            
        },
    });
