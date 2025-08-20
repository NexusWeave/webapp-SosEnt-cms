//  This file is a part of the SoSEnT web application project.
import { computed } from 'vue';
import { defineStore } from 'pinia';
import { fetchApi } from '@/utils/utils.js';
import { partnerData } from '@/services/sosent-partners-api.js';

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
                const image = 'SosEnT-favicon.png';
                const path = '/media/images/partners/';

                partner.anchor =
                {
                    type: ['png', 'external'],
                    href: partner.anchor.href ?? null,
                    img:
                    {
                        alt: image,
                        type: 'png',
                        src: path + image,
                        cls : ['partner-figure', 'partner-img'],
                    },
                }

                this.data.partners.push(partner);
                //console.log("Partner added: ", partner);
                    
            },
            fetchPartners()
            {
                if (this.data.isLoaded)  return;

                fetchApi(partnerData).then((partners) =>
                    {
                        partners.forEach(partner => {
                            this.addPartner(partner);
                        });
                        this.data.isLoaded = true;
                    }). catch((error) =>
                    {
                        this.data.isLoaded = false;
                        console.warn("Partners Not found:", error);
                        
                    });

            }
        },
        getters:
        {
            cls: (state) => {return state.data.cls;},
            partners: (state) => {return state.data.partners;},
            isLoaded: (state) => {return state.data.isLoaded;},
        },
    });
