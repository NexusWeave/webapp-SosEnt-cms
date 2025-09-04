<template>
    <section class="flex-column-align-items-center">
        <h2>{{ membership.title }}</h2>

        <section class="flex-column">
            <section v-for="content in membership.content" :key="content.id"
            class="section-content">
                <h3>{{ content.title }}</h3>
                <p>
                    {{ content.content }}
                    <Anchor v-if="content.anchor" :data="content.anchor" />
                </p>
                <List v-if="content.list" 
                    v-for="(list, i) in content.list" :key="i"
                    :data="list" 
                    :cls="list.cls"/>
            </section>
        </section>
        <section class="flex-column">
            <h3 v-if="isPartners">Partnere</h3>
            <section v-if ="isPartners"
                :class="['flex-wrap-row-justify-space-evenly','partner-container']">
                <Anchor v-for="partner in partners.partners" :key="partner.id"
                    :data="partner.anchor"
                    :cls="['partner-content', 'partner-img']"/>
            </section>
            
            <h3 v-if ="isMembers">Medlemmer</h3>
            <section v-if ="isMembers" class="member-container">
                <List
                    :data="members"
                    :cls="['member-list', 'member-item']"
                    />
            </section>
            <h3 v-if ="isMedia">Foreningens dokumenter</h3>
            <section v-if ="isMedia">
                <Media
                    :data="media"
                    filter="medlemskap"
                    />
            </section>

        </section>
        <section class="flex-wrap-row-justify-space-evenly" v-if="!!membership.schema">
            <section class="flex-column">
                <section v-for="content in membership.schema.content" :key="content.id"
                class="section-content">
                    <h3>{{ content.title }}</h3>
                    <p>
                        {{ content.content }}
                        <Anchor v-if="content.anchor" :data="content.anchor" />
                    </p>

                    <List v-if="content.list" 
                    v-for="(list, i) in content.list" :key="i"
                    :data="list" 
                    :cls="list.cls"/>

                </section>
            </section>
            <Form
                @formData="handleSubmit"
                :data="membership.schema"
                :cls="membership.schema.cls"
            />
        </section>    
    </section>
</template>

<script setup>

    import { computed } from 'vue';

    import { mediaStore } from '@/stores/media-store';
    import { memberStore } from '@/stores/member-store';
    import { partnerStore } from '@/stores/partner-store.js';

    import List from '@/components/utils/List.vue';
    import Form from '@/components/form/Form.vue';
    import Media from '@/components/media/Media.vue';
    import Anchor from '@/components/navigation/Anchor.vue';
    
    const media = mediaStore();
    const isMedia = computed(() => media.isLoaded);

    const members = memberStore();
    const isMembers = computed(() => members.isLoaded);
    
    const partners = partnerStore();
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
            
            name: 'membershipForm',
            title:'Meld Interesse',
            action: 'submitMembershipForm',
            description: 'Bli medlem i SoSEnT Norge',
            cls: [['form-container', 'flex-column'], 'title-h3', 'input-group'],
            icon: true,

            inputControl:
            [
                {
                    type: 'text',
                    required: true,
                    id: 'name-field',
                    placeholder: 'E.G Ole Nordmann',

                    label:
                    {
                        icon: true,
                        label: 'Navn'
                    },
                },
                {
                    type: 'email',
                    required: true,
                    id: 'email-field',
                    placeholder: 'E.G ole.nordmann@example.com',

                    label:
                    {
                        icon: true,
                        label: 'E-post',
                    },
                },
                {
                    type: 'tel',
                    name: 'phone',
                    required: true,
                    id: 'telephone-field',
                    placeholder: 'E.G +47 12 34 56 78',

                    label:
                    {
                        icon: true,
                        label: 'Telefon nummer',
                    },
                },
            ],
            booleanControl: 
            [
                {
                    value: false,
                    type: 'radio',
                    name: 'contact',
                    id: 'contact-radio',
                    label: 'Kontakt meg :)',

                    cls: ['flex-wrap-row-start', 'radio-btn'],
                }
            ],
            btn:
            [
                {
                    type: 'submit',
                    label: 'Send inn',
                    id: generateHexID(),
                },
                {
                    type: 'reset',
                    id: generateHexID(),
                    label: 'Start på nytt',
                }
            ],
            content:
            [
                {
                    id: 0,
                    title: 'Meld interesse',
                    content:`Er du – eller er du i ferd med å bli – en sosial
                    entreprenør? Da kan du melde din interesse for medlemskap
                    i SosEnt Norge. Det er helt uforpliktende og innebærer
                    ikke innmelding. Meld interesse og vi vil kontakte deg.`,
                },
            ]
        }*/
    };

    const handleSubmit = (inputs) => {

        const inputData = 
        {
            name: inputs.name.value,
            email: inputs.email,
            phone: inputs.phone,
            member: inputs.member,
            contact: inputs.contact
        };
        
        // Handle form submission logic here
    };
    //console.warn("Membership View: ", isMembers.value, isMedia.value, isPartners.value);
</script>