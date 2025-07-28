<template>
    <section class="flex-column-align-items-center">
        <h2>{{ membership.title }}</h2>
        <section class="flex-column-align-items-center">
            <section v-for="content in membership.content" :key="content.id"
            class="section-content">
                <h3>{{ content.title }}</h3>
                <p>
                    {{ content.content }}
                    <Anchor v-if="content.anchor" :data="content.anchor" />
                </p>
                <ul v-if="content.list">
                    <li v-for="item in content.list" :key="item.id" :class="item.cls">
                        {{ item.bullet }}
                    </li>
                </ul>
                
            </section>

            <section v-if="membership.anchor">
                
            </section>
            
            <section v-if="membership.schema">
                <h3>{{ membership.schema.title }}</h3>
                <Form :schema="membership.schema" />
            </section>
        </section>
        
    </section>
</template>

<script setup>

    import Anchor from '@/components/navigation/Anchor.vue';

    const membership = {
        title: 'Medlemskap i SoSEnT Norge',
        cls: ['membership', 'section'],
        content: [
            {
                id: 0,
                title: 'Informasjon om medlemskap',
                content:`SosEnt Norge er en forening for, av, og med
                Sosiale Entreprenører. Foreningen er formelt stiftet og
                har fått et interimsstyre. Vi er nå i en fase der vi
                prøver å få flest mulig interessenter/ potensielle
                medlemmer i den nye foreningen. SosEnt Norge er en
                interesseorganisasjon for norske sosiale entreprenører.`,
                list:
                [
                    {
                        id: 0,
                        cls: ['list-item'],
                        bullet:`Foreningen  definerer sosialt
                        entreprenørskap i norsk kontekst`,
                    },
                    {
                        id: 1,
                        cls: ['list-item'],
                        bullet:`Spre kunnskap om denne "fjerde sektoren".`,
                    },
                    {
                        id: 2,
                        cls: ['list-item'],
                        bullet:`Drive interessepolitisk påvirkningsarbeid
                        for å forbedre rammebetingelsene for sosiale
                        entreprenører i Norge,
                        (inkludert organisasjonsformer). 
`,
                    },
                    {
                        id: 3,
                        cls: ['list-item'],
                        bullet:`Gjøre det lettere å finne finansiering til drift og etablere
                        offentlige partnerskap.`,
                    },
                    {
                        id: 4,
                        cls: ['list-item'],
                        bullet:`Svare ut aktuelle høringer som angår
                        sosiale entreprenører, kunnskaps-spredning`,
                    },
                    {
                        id: 5,
                        cls: ['list-item'],
                        bullet:`Etablere Matnyttige nettverk og møteplasser
                        for foreningens medlemmer. `,
                    },
                ],
                
                
            },
            {
                id: 1,
                content:`SosEnt Norge skal jobbe for at sosialt
                entreprenørskap skal være en sentral del av et bærekraftig
                samfunn, og synliggjøre sosialt entreprenørskap som en
                viktig samfunnsaktør. Foreningen kommer til å ha sine
                sekretariattjenester fra`,
                anchor:
                {
                    cls: ['card-data'],
                    label: 'Samfunnsbedriftene',
                    type: ['external'],
                    href: 'https://www.samfunnsbedriftene.no/om-samfunnsbedriftene',
                },
            },
            {
                id: 1,
                title: `Foreslått årlig medlemsavgift for medlemsskap i
                SosEnt Norge er:`,
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
                        bullet:`Orninger for Støttemedlemmer, etter avtale.`,
                    },

                ],
                content:` Er du, eller er i ferd med å bli en sosial
                entreprenør kan du melde din interesse for SosEnt Norge
                ved å svare på spørsmålene i undersøkelsen. Å besvare
                denne undersøkelsen er uforpliktende, og innebærer ikke
                innmelding i SosEnt Norge. Når foreningen har
                finansieringen på plass vil det bli sendt ut et
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
            {
                id: 2,
                title: 'Hvorfor bli medlem hos SoSEnT Norge?',
                content:`Som medlem i SosEnt Norge får du tilgang til et
                unikt nettverk av sosiale entreprenører, ressurser og
                støtteordninger som kan hjelpe deg i din virksomhet.
                Vi jobber for å fremme sosiale entreprenører i Norge,
                og gir deg muligheten til å påvirke utviklingen av
                sektoren. Bli med på laget og bidra til å styrke
                sosialt entreprenørskap i Norge!`,
            },
            {
                id: 3,
                title: 'Melding av interesse',
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