<template>
    <section class="flex-column-align-items-center">
        <h2>{{ membership.title }}</h2>

        <section>
            <section v-for="content in membership.content" :key="content.id"
            class="section-content">
                <h3>{{ content.title }}</h3>
                <p>
                    {{ content.content }}
                    <Anchor v-if="content.anchor" :data="content.anchor" />
                </p>
                <section v-if="content.list" v-for="(list, i) in content.list" :key="i">
                <List :data="list"  :cls="list.cls"/>
                </section>
            </section>
        </section>

        <section>
            <section v-if="!!isPartners && partners.partners.length > 0">
                <h3>Partnere</h3>
                <section :class="['flex-wrap-row-justify-space-evenly','partner-container']">
                    <Anchor v-for="partner in partners.partners" :key="partner.id"
                        :data="partner.anchor"
                        :cls="['partner-content', 'partner-img']"/>
                </section>
            </section>
            
            <section v-if ="isMembers && members.members.length > 0">
                <h3>Medlemmer</h3>
                <section class="member-container">
                    <List :data="members"
                        :cls="['member-list', 'member-item']"
                    />
                </section>
            </section>
            <section v-if ="isMedia && media.media.length > 0">
                <h3>Foreningens dokumenter</h3>
                <section>
                    <Media
                        :data="media"
                        filter="medlemskap"
                        />
                </section>
            </section>

        </section>
        <section>
            <section v-for="content in membership.schema.content" :key="content.id"
            class="section-content">
                <h3>{{ content.title }}</h3>
                <p>
                    {{ content.content }}
                    <Anchor v-if="content.anchor" :data="content.anchor" />
                </p>
                <section v-if="content.list" v-for="(list, i) in content.list" :key="i">
                <List :data="list"  :cls="list.cls"/>
                </section>
            </section>
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
        title: 'SosEnt Norge Medlemsportal',
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
        ],

        schema: {
            content:
            [
                {
                    id: 1,
                    title: 'Innmelding til Sosent',
                    content:`Er du – eller er du i ferd med å bli – en sosial entreprenør?
                    Da kan du melde din interesse for medlemskap i SosEnt Norge. Det er helt
                    uforpliktende og innebærer ikke innmelding.`,

                    anchor:
                    {
                        cls: ['card-data'],
                        label: 'Meld deg inn her',
                        type: ['external'],
                        href: 'https://eu1.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBO2mDHdknLOCKrU3vTgMAnMTgZFm_OfCeF0vH1gdy-9OyP13WiDEutOM256WcRMCc*',
                    },
                }
            ]
        }
    };
    //console.warn("Membership View: ", isMembers.value, isMedia.value, isPartners.value);
</script>