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
                        id: generateHexID(),
                        cls: ['media-content'],
                        label: 'Medlemsoversikt',
                        type: ['pdf'],
                        href: '/media/files/organization/SosEnt-Norge-Medlemmer.pdf',
                    },
                    cls : ['member-container'],
            },
        }),
        actions:
        {
            addMembers(members)
            {
                members.forEach(member => 
                    {
                        member.type = 'external';
                        this.data.members.push(member);
                    });
                    console.log("Members added: ", this.data.members);
            },
            randomizeMembers()
            {
                const membersData = reactive(this.data.members);
                this.data.members = membersData.sort((a) => a.id[Math.random(0,membersData.length - 1)]);
            },
            fetchMembers()
            {
                if (this.isLoaded) return;

                fetchMembers().then((members) => 
                    {
                        this.addMembers(members);
                        this.randomizeMembers();
                        this.data.isLoaded = true;
                    }).catch((error) =>
                    {
                        console.warn("Error fetching members: ", error);
                        this.data.isLoaded = false;
                    });
            }
        },
        getters:
        {
            cls: (state) => {return state.data.cls;},
            media: (state) => {return state.data.media;},
            isLoaded: (state) => {return state.data.isLoaded;},
            members: (state) => {return state.data.members;}, // Return first 5 members
        },
    });