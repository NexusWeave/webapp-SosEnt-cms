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

                this.randomizeMembers();
            },
            randomizeMembers()
            {
                const membersData = reactive(this.data.members);
                const n = .5;

                this.data.members = membersData.sort(() => Math.random() - n);
                //console.warn("Members randomized");
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