//  This file is a part of the SoSEnT web application project.
import { defineStore } from 'pinia';
import { fetchPartners } from '@/services/sosent-partners-api.js';

export const partnerStore = defineStore('partnerData',
    {
        state: () => ({
            data: {
                partners: [],
                isLoaded: false,
                
            },
            
        }),
        actions:
        {
            addPartner(partners)
            {
                partners.forEach(partner =>
                    {
                        partner.cls = ['partner-container', 'flex-wrap-row-justify-space-evenly']
                        this.data.partners.push(partner);
                        console.log("Partner added: ", partner);
                    }); 
                    
            },
            fetchPartners()
            {
                if (this.data.isLoaded)  return;

                fetchPartners().then((partners) =>
                    {
                        this.data.isLoaded = true;
                        this.addPartner(partners);

                    }). catch((error) =>
                    {
                        this.data.isLoaded = false;
                        console.warn("Partners Not found:", error);
                        
                    });
            }
        },
        getters:
        {
            partners: (state) => {return state.data.partners},
            isLoaded: (state) => {return state.data.isLoaded},

        },
    });
