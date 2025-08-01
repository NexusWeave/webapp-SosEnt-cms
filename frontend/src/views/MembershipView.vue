<template>
    <section class="flex-column-align-items-center">
        <h2>{{ membership.title }}</h2>
        <section class="flex-wrap-row-justify-space-evenly">
            <section class="flex-column">
                <section v-for="content in membership.content" :key="content.id"
                class="section-content">
                    <h3>{{ content.title }}</h3>
                    <p>
                        {{ content.content }}
                        <Anchor v-if="content.anchor" :data="content.anchor" />
                    </p>
                    <List v-if="content.list" :data=" content" :cls="[]"/>

                    <Partners v-if ="isPartners && !!content.partners" :data="content.partners.value"
                    :cls="[['flex-wrap-row-justify-space-evenly',
                    'partner-container'], 'partner-content']" />

                    <List v-if="isMembers && !!content.members" :data="content.members.value"
                    :cls="['flex-column', 'connection-container']"/>

                    <Media v-if="isMedia && !!content.media" :data="media"
                        filter="medlemskap"
                        :cls="['media-container',
                        'flex-wrap-row-justify-space-evenly',
                        ['media-content', 'flex-column', 'component-theme']]"/>
                </section>                    
                    
                </section>
        </section>
        
        <section v-if="membership.schema">
                <h3>{{ membership.schema.title }}</h3>
                <Form :schema="membership.schema" />
        </section>    
    </section>
</template>

<script setup>

    import { computed } from 'vue';

    import { mediaStore } from '@/stores/media-store';
    import { memberStore } from '@/stores/member-store';
    import { partnerStore } from '@/stores/partner-store.js';

    import List from '@/components/utils/List.vue';
    import Media from '@/components/media/Media.vue';
    import Partners from '@/components/utils/Partners.vue';
    import Anchor from '@/components/navigation/Anchor.vue';
    
    const media = mediaStore();
    const isMedia = computed(() => media.isLoaded);
    const membersDocs = computed(() => media.filter('medlemskap'));

    const members = memberStore();
    const partners = partnerStore();
    const isMembers = computed(() => members.isLoaded);
    const isPartners = computed(() => partners.isLoaded);

    console.log('Members:', isMembers.value);
    const connection =
    {
        title: 'Medlemmer og samarbeids-partnere',
        isConnections: computed(() => !!isMembers.value || !!isPartners.value),
        members: computed(() => 
        {
            if (!isMembers.value) return false; 
            return {
                members: members.members,
                isMembers: members.isLoaded,
                };

        }),
        partners: computed(() => 
        {
            if (!isPartners.value) return false;
            return {
                partners: partners.partners,
                isPartners: isPartners.value,
            };
        }),
    }
  
    const membership = {
        title: 'Medlemskap i SoSEnT Norge',
        cls: ['membership', 'section'],
        content: [
            {
                id: 0,
                title: 'Informasjon om medlemskap',
                content:`Som medlem i SosEnt Norge får du tilgang til et
                unikt nettverk av sosiale entreprenører, ressurser og
                støtteordninger som kan hjelpe deg i din virksomhet.
                Vi jobber for å fremme sosiale entreprenører i Norge,
                og gir deg muligheten til å påvirke utviklingen av
                sektoren. Bli med på laget og bidra til å styrke
                sosialt entreprenørskap i Norge!`,
                list:
                {
                    title: `Foreslått årlig medlemsavgift:`,
                    list: 
                    [
                        {
                            id: 0,
                            cls: ['list-item'],
                            bullet:`Virksomheter med 1-2 årsverk: 1000 kr,`,
                        },
                        {
                            id: 1,
                            cls: ['list-item'],
                            bullet:`3-5 Årsverk: 3000 kr,`,
                        },
                        {
                            id: 2,
                            cls: ['list-item'],
                            bullet:`over 5 ansatte 5000kr`,
                        },
                        {
                            id: 3,
                            cls: ['list-item'],
                            bullet:`Ordninger for Støttemedlemmer, etter avtale.`,
                        },
                    ],
                },
            },
            {
                id: 1,
                title: 'Våre Partnere',
                partners: computed(() => 
                {
                    if (!isPartners.value) return false;
                    return {
                        partners: partners.partners,
                        isPartners: isPartners.value,
                    };
                }),
                
            },
            {
                id: 2,
                title: 'Våre Medlemmer',
                members: computed(() => 
                {
                    if (!isMembers.value) return false; 

                    return {
                        members: members.members,
                        isMembers: members.isLoaded,
                        };

                }),
            },
            {
                id: 3,
                title: 'Foreningens dokumenter',
                media: computed(() => 
                {
                    if (!isMedia.value) return false;
                    return {
                        title: 'Medlemskap',
                        media: !! membersDocs,
                    };
                }),
            },
            {
                id: 4,
                title: 'Meld interesse',
                content:`Er du, eller er i ferd med å bli en sosial
                entreprenør kan du melde din interesse for SosEnt Norge
                ved å kontakte oss. Å kontakte oss er uforpliktende, og
                innebærer ikke innmelding i SosEnt Norge. Når foreningen
                har finansieringen på plass vil det bli sendt ut et
                innmeldingsskjema til de av dere som har svart at dere
                ønsker tilbud om medlemskap`,                
                anchor:
                {
                    cls: ['card-data'],
                    label: 'Meld interesse her',
                    type: ['external'],
                    href: 'mailto:' + 'rune.kvarme' + '@' + 'samfunnsbedriftene.no',
                },
            },

        ],
        

        /*schema: {
            title:'Meld Interesse',
            description: 'Bli medlem i SoSEnT Norge',
            form: 
            {
                name: 'membershipForm',
                fields: [
                    {
                        type: 'text',
                        name: 'name',
                        label: 'Navn',
                        required: true
                    },
                    {
                        type: 'email',
                        name: 'email',
                        label: 'E-post',
                        required: true
                    },
                    {
                        type: 'checkbox',
                        name: 'terms',
                        label: 'Jeg godtar vilkårene for medlemskap',
                        required: true
                    }
                ],
                btn:
            {
                type: 'submit',
                label: 'Bli medlem',
                class: 'btn btn-primary',
                action: 'submitMembershipForm'
            },
            }
        }*/
    };
</script>