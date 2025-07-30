//  This file is a part of the SoSEnT web application project.
import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { generateHexID } from '@/utils/utils.js';
import { fetchMembers } from '@/services/sosent-member-api.js';

export const memberStore = defineStore('memberData',
    {
        state: () => (
            {
                data: {
                    members: [],
                    isLoaded: false,
                    media:
                    {
                        type: ['pdf'],
                        id: generateHexID(),                       
                        label: 'Medlemsoversikt',
                        cls: ['pdf', 'media-content'],
                        href: '/media/files/organization/SosEnt-Norge-Medlemmer.pdf',
                    },
                    cls : ['flex-column-align-items-center', 'member-container'],
            },
        }),
        actions:
        {
            addMembers(members)
            {
                members.forEach(member => 
                    {
                        this.data.members.push(member);
                        //console.warn("Members added: ", member);
                    });
            },
            randomizeMembers()
            {
                const membersData = reactive(this.data.members);
                this.data.members = membersData.sort((a) => a.id[Math.random(0,membersData.length - 1)]);
            },
            fetchMembers()
            {
                if (this.data.isLoaded) return;

                fetchMembers().then((members) => 
                    {
                        this.addMembers(members);
                        this.randomizeMembers();
                        this.data.isLoaded = true;

                    }).catch((error) =>
                    {
                        console.error("Error fetching members: ", error);
                        this.data.isLoaded = false;
                    });
            }
        },
        getters:
        {
            cls: (state) => {return state.data.cls;},
            media: (state) => {return state.data.media;},
            members: (state) => {return state.data.members;},
            isLoaded: (state) => {return state.data.isLoaded;},
        },
    });