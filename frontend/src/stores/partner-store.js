//  This file is a part of the SoSEnT web application project.
import { defineStore } from 'pinia';
import { fetchApi } from '@/utils/utils.js';

export const partnerStore = defineStore('partnerData',
    {
        state: () => ({
            data: {
                cls: ['partner-container', 'flex-wrap-row-justify-space-evenly'],
                partners: [],
                isLoaded: false,
            },
            
        }),
        actions:
        {
            addPartner(partner)
            {
                partner.anchor.type = [partner.anchor.img.src.split('.')[1], 'external']
                partner.anchor.href = !partner.anchor.href ? null : partner.anchor.href;

                this.data.partners.push(partner);
                //console.warn("Partner added: ", partner);
                    
            },
            async fetchData()
            {
                if (this.data.isLoaded) return;

                const path = '/apis/sosent-partners-api.json';
                await fetch(path).then((response) => response.json()).then((data) => {
                    data.data.forEach((item) => {
                        this.addPartner(item);
                    });
                    this.data.isLoaded = true;
                }).catch((error) =>
                {

                    this.data.isLoaded = false;
                    console.error("Error fetching Partners: ", error);

                });
            },
        },
        getters:
        {
            cls: (state) => {return state.data.cls;},
            partners: (state) => {return state.data.partners;},
            isLoaded: (state) => {return state.data.isLoaded;},
        },
    });
