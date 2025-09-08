//  This file is a part of the SoSEnT web application project.
import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { generateHexID } from '@/utils/utils.js';

export const memberStore = defineStore('memberData',
    {
        state: () => (
            {
                data: {
                    members: [],
                    isLoaded: false,
                    cls : ['flex-column-align-items-center', 'member-container'],
            },
        }),
        actions:
        {
            addMembers(member)
            {
                member.id = generateHexID();
                this.data.members.push(member);
                //console.warn("Members added: ", member);

                this.randomizeMembers();
                
            },
            randomizeMembers()
            {
                const membersData = reactive(this.data.members);
                const n = .5;

                this.data.members = membersData.sort(() => Math.random() - n);
                //console.warn("Members randomized");
            },
            async fetchData()
            { 
                const media = this.data;
                if (media.isLoaded) return;

                const path = '/services/sosent-member-api.json';
                await fetch(path).then((response) => response.json()).then((data) => {
                    data.data.forEach((item) => {
                        this.addMembers(item);
                    });
                    media.isLoaded = true;
                }).catch((error) =>
                {

                    this.data.isLoaded = false;
                    console.error("Error fetching Members: ", error);

                });
            },

        },
        getters:
        {
            members: (state) =>
                {
                    const n = 6;
                    let members = state.data.members;
                    members = members.filter(member => member.isActive);
                return members.slice(0, n);
                },
            isLoaded: (state) => {return state.data.isLoaded;},
        },
    });