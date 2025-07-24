<template>
    <section v-if="news.recent.length > 0" :class="[news.data.cls[1]]">
        <NewsCard
            v-for="article in news.recent" 
            :key="article.id" 
            :data="article" 
            :Cls="[[article.cls[0], article.cls[12]], article.cls[12], 
                    article.cls[3], article.cls[11], article.cls[8],
                    article.cls[6]]"/>
    </section>
    <S :data="aboutData" />
    <S :data="organization" />

    <section :class="organization.cls[1]">
        <h2 :class="organization.cls[0]"> {{ organization.team.title }}</h2>
        
        <section :class="organization.team.cls">
            <div v-for="person in team.contactCards" :class="person.cls" :key="person.id">
                <Img :data="person.img" />
                <h2>{{ person.name }}</h2>
                <h3>{{ person.title }}</h3>
                <p>
                    <Link v-for="contact in person.contactData" :key="contact.id" :data="contact"/>
                </p>
            </div>
        </section>

        <h2 :class="organization.cls"> {{ organization.media.title }}</h2>
        <section :class="organization.media.cls">
            <div v-for="media in media.files" :class="media.cls[0] + ' ' + media.cls[1]" :key="media.id" :data-filetype="media.type">    
                    <Link :data="media" />
                <span :class="media.cls[2]">Dato :
                    <b><time :datetime="media.date"> {{ media.date }}</time></b>
                </span>
                <span :class="media.cls[2]">{{ media.description }}</span>
            </div>
        </section>
    </section>

    <section :class="networkData.cls[1] + ' ' + networkData.cls[3]">
        <h2 :class="networkData.cls[0]">{{ networkData.title }}</h2>
        <div :class="networkData.cls[2]">

            <section 
                v-if ="members.data.isLoaded"
                :class="members.cls" >
                <table>
                    <tbody>
                        <tr v-for="member in members.members.slice(0, 5)" :key="member.id">
                            <td v-if="member.href">
                                <Link :data="member"/>
                            </td>
                            <td v-else>
                                {{ member.label }}
                            </td>
                        </tr>
                    </tbody>
                    <tfoot v-if="members.members.length > 5">
                        
                        <Link :data="members.media" />
                    </tfoot>
                </table>
            </section>

            <section :class="partners.cls" v-if ="partners.data.length > 0" >
                <div v-for="partner in partners.data" :key="partner.id" :class="partner.cls">
                    <Link :data="partner" />
                </div>
            </section>
        </div>
    </section>

</template>

<script setup>
    import { computed, onMounted, reactive } from 'vue';

    import { newsStore } from '@/stores/news-store.js';
    import { memberStore } from '@/stores/member-store.js';

    import S from '@/components/utils/Section.vue';
    import Img from '@/components/media/Figure.vue';    
    import NewsCard from '@/components/article/Article.vue';
    import Link from '@/components/navigation/Anchor.vue';

    const aboutData = reactive(
        {
            cls: ['flex-column-align-items-center', 'content'],
            title: 'Om SosEnt Norge',
            paragraphs:
            [
                `SosEnt Norge – Landsforeningen for sosiale entreprenører –
                er en interessepolitisk forening som søker å styrke og påvirke
                rammebetingelser og regelverk til beste for sosiale entreprenører i Norge.`,

                `Vi arbeider for å få etablert forståelsen og aksepten for denne 4. sektoren
                hos myndigheter, beslutningstakerne og de andre sektorene; offentlig, privat
                og frivillig.`,

                `Foreningen ønsker å være en kunnskapsbank for sosiale entreprenører, og en
                høringsinstans for saker som angår sosialt entreprenørskap. Vi vil rådgi våre
                medlemmer, gjøre tilgjengelig informasjon om støtte- og tilskuddsordninger og
                bidra med aktuelle tolkninger av forskrifter og regelverk. Vi vil også
                arrangere møteplasser og nettverk for sosiale entreprenører og andre
                som er interessert i sosialt entreprenørskap.`,

                `Foreningen etablerer fordelsprogram med aktuelle leverandører av varer,
                programvare og forsikringsordninger. Et medlemskap i SosEnt Norge lønner seg!`,

                `Foreningen ble stiftet i april 2025. Samfunnsbedriftene ivaretar foreningens
                sekretariat/sekretariatsfunksjoner, og generalsekretæren har sin ansettelse der`, 
            ],

        }
    );

    const organization = reactive(
        {
            cls: ['h2','flex-column'],
            team:
            {
                title: 'Kontakt oss',
                cls: ['flex-wrap-row-justify-space-evenly'],

                contactCards:
                [
                    {
                        id: 0,
                        title: 'Styreleder',
                        label: 'Helle V. Rødahl',
                        cls: ['card-container', 'component-theme'],
                        // Make the email and phone numbers bot protected
                        contactData:
                        [
                            {
                                id: 0,
                                
                                cls: ['card-data'],
                                label: 'Send en Epost',
                                type: ['email', 'external'],
                                href: 'mailto:' + 'demo' +'@' + 'example.com',
                            },
                            {
                                id: 1,
                                cls: ['card-data'],
                                type: ['telephone', 'external'],
                                label: '+47' + '12' + '34' + '56' + '78',
                                href : 'tel:' + '+47' + '12' + '34' + '56' + '78',
                            },
                        ],

                        img:
                        {
                            type: 'jpg',
                            cls: ['contact-logo'],
                            src: '/media/images/team/profil-helle-privat.jpg',
                            alt: "JPG bilde av Helle V. Rødahl",
                        },
                    },
                    {
                        id: 1,
                        label: 'Rune Kvarme',
                        title: 'Generalsekretær',
                        cls: ['card-container', 'component-theme'],

                        contactData:
                        [
                            {
                                id: 0,
                                cls: ['card-data'],
                                label: 'Send en Epost',
                                type: ['email', 'external'],
                                href: 'mailto:' + 'rune.kvarme' + '@' + 'samfunnsbedriftene.no',
                            },
                            {
                                id: 1,
                                cls: ['card-data'],
                                type: ['telephone', 'external'],
                                label: '+47' + '12' + '34' + '56' + '78',
                                href : 'tel:' + '+47' + '12' + '34' + '56' + '78',
                            },
                        ],

                        img:
                        {
                            type: 'png',
                            cls: ['card-img'],
                            alt: "Rune J. Kvarme ",
                            src: '/media/images/team/52700234381_5e75074f92_q.jpg',
                        },
                    },
                ],
            },
            media:
            {
                title : 'Dokumenter',
                cls: ['flex-wrap-row-justify-space-evenly', 'media-container'],
                files:
                [
                    {
                        id: 0,
                        label: 'Vedtekter',
                        date: '2025-04-01',
                        type: ['pdf', 'calendar', 'external'],
                        cls: ['media-content', 'component-theme', 'media-text'],
                        description: 'Vedtekter for medlemmene i SosEnt Norge.',
                        href: '/media/files/organization/SosEnt-Norge-vedtekter.pdf',
                    },
                    {
                        id: 1,
                        type: ['pdf', 'calendar','external' ],
                        date: '2025-04-01',
                        label: 'Organisasjonskart',
                        cls: ['media-content', 'component-theme', 'media-text'],
                        description: 'Organisasjonskart over styret i SosEnt Norge.',
                        href: '/media/files/organization/SosEnt-Norge-organisajonskart.pdf',
                    },
                ],
            },

    });

    const networkData = reactive(
        {
            title: 'Medlemmer og samarbeids-partnere',
            cls: ['h2', 'flex-column-align-content-center', 'flex-wrap-row-justify-space-evenly'],

            partnerData:
            {
                cls: ['partner-container', 'flex-wrap-row-justify-space-evenly'],

                data: 
                [
                {
                        id: 0,
                        type: ['external'],
                        href: 'https://www.example.com',
                        cls: ['flex-wrap-row-justify-space-evenly'],

                        img:
                        {
                            type: 'png',
                            alt: 'SoSent Logo',
                            cls:['partner-img'],
                            src: '/media/images/partners/SosEnT-favicon.png',
                        },
                    },
                    {
                        id: 1,
                        type: ['external'],
                        href: 'https://www.example.com',
                        cls: ['flex-wrap-row-justify-space-evenly'],

                        img:
                        {
                            type: 'png',
                            alt: 'SoSent Logo',
                            cls:['partner-img'],
                            src: '/media/images/partners/SosEnT-favicon.png',
                        },
                    },
                    {
                        id: 2,
                        type: ['external'],
                        href: 'https://www.example.com',
                        cls: ['flex-wrap-row-justify-space-evenly'],

                        img:
                        {
                            type: 'png',
                            alt: 'SoSent Logo',
                            cls:['partner-img'],
                            src: '/media/images/partners/SosEnT-favicon.png',
                        },
                    },
                    {
                        id: 3,
                        type: ['img','external'],
                        href: 'https://www.example.com',
                        cls: ['flex-wrap-row-justify-space-evenly'],

                        img:
                        {
                            type: 'png',
                            alt: 'SoSent Logo',
                            cls:['partner-img'],
                            src: '/media/images/partners/SosEnT-favicon.png',
                        },
                    },
                    {
                        id: 4,
                        type: ['img','external'],
                        href: 'https://www.example.com',
                        cls: ['flex-wrap-row-justify-space-evenly'],

                        img:
                        {
                            type: 'png',
                            alt: 'SoSent Logo',
                            cls:['partner-img'],
                            src: '/media/images/partners/SosEnT-favicon.png',
                        },
                    },
                    {
                        id: 5,
                        type: ['img','external'],
                        href: 'https://www.example.com',
                        cls: ['flex-wrap-row-justify-space-evenly'],

                        img:
                        {
                            type: 'png',
                            alt: 'SoSent Logo',
                            cls:['partner-img'],
                            src: '/media/images/partners/SosEnT-favicon.png',
                        },
                    },
                ],
            },
            membersData:
            {
                cls: ['flex-column-align-items-center', 'member-container'],

                columns: 
                [
                    {
                        id: 0,
                        title: 'Navn',
                    },
                ],
                members: 
                [
                    {
                        id: 0,
                        type: 'external',
                        label: 'Medlem 1',
                        href: 'https://www.example.com',
                        description: 'Beskrivelse av medlem 1.',
                    },
                    {
                        id: 1,
                        type: 'external',
                        label: 'Medlem 2',
                        href: 'https://www.example.com',
                        description: 'Beskrivelse av medlem 2.',
                        
                    },
                    {
                        id: 2,
                        type: 'external',
                        label: 'Medlem 3',
                        description: 'Beskrivelse av medlem 3.',
                    },
                    {
                        id: 3,
                        type: 'external',
                        label: 'Medlem 4',
                        href: 'https://www.example.com',
                        description: 'Beskrivelse av medlem 1.',
                    },
                    {
                        id: 4,
                        type: 'external',
                        label: 'Medlem 5',
                        href: 'https://www.example.com',
                        description: 'Beskrivelse av medlem 1.',
                    },
                    {
                        id: 5,
                        type: 'external',
                        label: 'Medlem 6',
                        href: 'https://www.example.com',
                        description: 'Beskrivelse av medlem 1.',
                    },
                ],
                media:
                {
                    file:
                    {
                        id: 0,
                        type: ['pdf', 'external'],
                        cls: ['media-content'],
                        href: '/media/files/organization/SosEnt-Norge-Medlemmer.pdf',
                        label: 'Medlemsoversikt',
                    },
                },
            },
        }
    );

    const news = newsStore();
    const members = memberStore();
    const team = organization.team;
    const media = organization.media;
    //const members = networkData.membersData;
    const partners = networkData.partnerData;

    onMounted( async () => {
        await news.fetchNews();
        await members.fetchMembers();
    });

    console.log("AboutView loaded with data: ", );
</script>