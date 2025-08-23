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
                v-for="(bullet, i) in content.list" :key="i"
                :data=" bullet" 
                :cls="[]"/>
            </section>
        </section>
        <section class="flex-column">
            <h3 v-if="isPartners">Partnere</h3>
            <section v-if ="isPartners"
                :class="['flex-wrap-row-justify-space-evenly','partner-container']">
                <Anchor v-for="partner in partners.partners" :key="partner.id"
                    :data="partner.anchor"
                    :cls="['partner-content']"/>
            </section>
            
            <h3 v-if ="isMembers">Medlemmer</h3>
            <section v-if ="isMembers">
                <List
                    :data="members"
                    :cls="['flex-column', 'connection-container']"
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
        <section class="flex-wrap-row-justify-space-evenly">
            <section class="flex-column">
                <section v-for="content in membership.content" :key="content.id"
                class="section-content">
                    <h3>{{ content.title }}</h3>
                    <p>
                        {{ content.content }}
                        <Anchor v-if="content.anchor" :data="content.anchor" />
                    </p>

                    <List v-if="content.list" 
                    v-for="(bullet, i) in content.list" :key="i"
                    :data=" bullet" 
                    :cls="[]"/>

                </section>
            </section>
            <Form v-if="!!membership.schema"
                @formData="handleSubmit"
                :data="membership.schema"
                :cls="membership.schema.cls"
            />
        </section>    
    </section>
</template>

<script setup>

    import { computed } from 'vue';
    import { generateHexID } from '@/utils/utils';

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
    const partners = partnerStore();
    const isMembers = computed(() => members.isLoaded);
    const isPartners = computed(() => partners.isLoaded);
  
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
        
        schema: {
            
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
            ]
        }
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
    console.warn("Membership View: ", isMembers.value, isMedia.value, isPartners.value);
</script>