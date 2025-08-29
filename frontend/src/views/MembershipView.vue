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

                    <List v-if="!!content.list" v-for="item in content.list" :key="item.id" :data="item" :cls="[]"/>

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
  
    const membership = {
        title: 'SosEnt Norge Meldlemsportal',
        cls: ['membership', 'section'],
        content: [
            {
                id: 0,
                title: 'Medlemskap i SosEnt Norge',
                content:`Som medlem i SosEnt Norge blir du en del av et
                engasjert fellesskap av sosiale entreprenører fra hele landet.
                 Du får tilgang til et verdifullt nettverk, nyttige ressurser
                 og støtteordninger som kan styrke din virksomhet. Vi jobber
                 for å løfte frem sosialt entreprenørskap i Norge – og som
                 medlem får du mulighet til å påvirke utviklingen av
                 sektoren.`,
                list:
                [
                    {
                        id: 0,
                        title: `Fordeler med medlemskap:`,
                        list: 
                        [
                            {
                                id: 0,
                                cls: ['list-item'],
                                bullet:`Tilgang til faglige møteplasser og nettverk`,
                            },
                            {
                                id: 1,
                                cls: ['list-item'],
                                bullet:`Mulighet for samarbeid med offentlige og private aktører`,
                            },
                            {
                                id: 2,
                                cls: ['list-item'],
                                bullet:`Politisk påvirkning og synlighet for sektoren`,
                            },
                            {
                                id: 3,
                                cls: ['list-item'],
                                bullet:`Rådgivning og støtte i utviklingen av din virksomhet`,
                            },
                        ],
                    },
                    {
                        id: 1,
                        title: `Årlig medlemsavgift (gjelder frem til første generalforsamling):`,
                        list: 
                        [
                            {
                                id: 0,
                                cls: ['list-item'],
                                bullet:`Virksomheter med 1–2 årsverk: <b>1 000 kr</b>`,
                            },
                            {
                                id: 1,
                                cls: ['list-item'],
                                bullet:`Virksomheter med 3–5 årsverk: <b>3 000 kr</b>`,
                            },
                            {
                                id: 2,
                                cls: ['list-item'],
                                bullet:`Virksomheter over 5 ansatte: <b>5 000 kr</b>`,
                            },
                            {
                                id: 3,
                                cls: ['list-item'],
                                bullet:`Støttemedlemmer: <b>Etter Avtale</b>`,
                            },
                        ],
                    }
                ],
            },
            {
                id: 1,
                title: 'Meld Interesse',
                content:`Er du – eller er du i ferd med å bli – en sosial entreprenør?
                Da kan du melde din interesse for medlemskap i SosEnt Norge. Det er helt
                uforpliktende og innebærer ikke innmelding.`,

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