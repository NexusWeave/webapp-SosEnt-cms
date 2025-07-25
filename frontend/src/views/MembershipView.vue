<template>
    <h2>{{ membership.title }}</h2>
    <section v-for="content in membership.content" :key="content.id">
        <h3>{{ content.title }}</h3>
        <p>{{ content.content }}</p>
        
        
    </section>
    <section v-if="membership.schema">
        <h3>{{ membership.schema.title }}</h3>
        <Form v-if="membership.schema" :schema="membership.schema" />
    </section>
    <section v-if="membership.anchor">
        <Anchor :data="membership.anchor" />
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
                interesseorganisasjon for norske sosiale entreprenører.
                Formålet med foreningen er å definere sosialt
                entreprenørskap i norsk kontekst, spre kunnskap om denne
                fjerde sektoren og interessepolitisk påvirkningsarbeid for
                å bedre rammebetingelsene til sosiale entreprenører i
                Norge, herunder organisasjonsformer. Vi har også opptatt
                av å gjøre det lettere å finne finansiering til drift og
                lage partnerskap med det offentlige, svare ut aktuelle
                høringer som angår sosiale entreprenører,
                kunnskaps-spredning, samt etablere matnyttige nettverk og
                møteplasser for foreningens medlemmer. SosEnt Norge skal
                jobbe for at sosialt entreprenørskap skal være en sentral
                del av et bærekraftig samfunn, og synliggjøre sosialt
                entreprenørskap som en viktig samfunnsaktør. Foreningen
                kommer til å ha sine sekretariattjenester fra
                Samfunnsbedriftene (les mere om Samfunnsbedriftene her)
                Foreslått årlig medlemsavgift for medlemsskap i SosEnt
                Norge er: Virksomheter med 1-2 årsverk: 1000 kr, 3-5
                Årsverk: 3000 kr, over 5 ansatte 5000kr Støttemedlemmer:
                Etter avtale Er du, eller er i ferd med å bli en sosial
                entreprenør kan du melde din interesse for SosEnt Norge
                ved å svare på spørsmålene i undersøkelsen. Å besvare
                denne undersøkelsen er uforpliktende, og innebærer ikke
                innmelding i SosEnt Norge. Når foreningen har
                finansieringen på plass vil det bli sendt ut et
                innmeldingsskjema til de av dere som har svart at dere
                ønsker tilbud om medlemskap`,
            },
            {
                id: 1,
                title: 'Hvorfor bli medlem hos SoSEnT Norge?',
                content:`Som medlem i SosEnt Norge får du tilgang til et
                unikt nettverk av sosiale entreprenører, ressurser og
                støtteordninger som kan hjelpe deg i din virksomhet.
                Vi jobber for å fremme sosiale entreprenører i Norge,
                og gir deg muligheten til å påvirke utviklingen av
                sektoren. Bli med på laget og bidra til å styrke
                sosialt entreprenørskap i Norge!`,
            }

        ],
        anchor:
        {
            cls: ['card-data'],
            label: 'Meld interesse her',
            type: ['email', 'external'],
            href: 'mailto:' + 'rune.kvarme' + '@' + 'samfunnsbedriftene.no',
        },

        schema: {
            title:'Bli medlem',
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
        }
    };
</script>