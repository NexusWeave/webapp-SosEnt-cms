<template>
    <section :class="newsData.cls">
        <Articles v-if="newsData.articles.length > 0" :data="newsData.articles" />
    </section>

    <section :class="aboutData.cls">
        <h2>{{ aboutData.title }}</h2>
        <p v-for="(paragraph, i) in aboutData.paragraphs" :key="i">{{ paragraph }}</p>
    </section>

    <section :class="organization.cls">
        <h2> {{ organization.team.title }}</h2>
        <section :class="organization.team.cls">
            <div v-for="person in team.contactCards" :class="person.cls" :key="person.id">
                <Img :data="person.img" />
                <h2>{{ person.name }}</h2>
                <h3>{{ person.title }}</h3>
                <span v-for="contact in person.contactData" :key="contact.id" :class="contact.cls">
                 <Link :data="contact" />
                </span>
            </div>
        </section>

        <h2> {{ organization.media.title }}</h2>
        <section :class="organization.media.cls[0] + ' ' + organization.media.cls[1]">
            <div v-for="media in media.files" :class="media.cls" :key="media.id" :data-filetype="media.type">    
                <Link :data="media" />
                <span :class="media.cls[2]">Dato :
                    <b><time :datetime="media.date"> {{ media.date }}</time></b>
                </span>
                <span :class="media.cls[2]">{{ media.description }}</span>
            </div>
        </section>
    </section>
    
    <section :class="networkData.cls[0] + ' ' + networkData.cls[2]">
        <h2>{{ networkData.title }}</h2>
        <div :class="networkData.cls[1]">
            <section :class="members.cls" v-if ="members.members.length > 0">
                <table>
                    <tbody>
                        <tr v-for="member in members.members.filter(member => member.id < 5)" :key="member.id">
                            <td >
                                <Link :data="member" />
                            </td>
                        </tr>
                    </tbody>
                    <tfoot v-if="members.members.length > 5">
                        <Link :data="members.media.file" />
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

    import Img from '@/components/media/Image.vue';    
    import Articles from '@/components/Article.vue';
    import Link from '@/components/navigation/Anchor.vue';

    import { reactive } from 'vue';

    const newsData = reactive(
        {
            cls: ['flex-wrap-row-justify-space-evenly'],
            articles:
            [
                {
                    id: 0,
                    date: "2024-10-01",
                    title: 'Sosent Nyheter',
                    href: '/aktuelt/artikkel/',
                    cls: 'flex-column-align-items-center news-card',
                    img:
                    {
                        alt: 'SoSent Logo',
                        cls: 'article-img',
                        src: '/media/images/news/SosEnT-favicon.png',
                    },
                },
                {
                    id: 1,
                    date: "2022-10-01", 
                    title: 'Sosent Nyheter',
                    href: '/aktuelt/artikkel/',
                    cls: 'flex-column-align-items-center news-card',
                    img:
                    {
                        alt: 'SoSent Logo',
                        cls: 'article-img',
                        src: '/media/images/news/SosEnT-favicon.png',
                    },
                },
                {
                    id: 2,
                    date: "2023-10-01", 
                    title: 'Sosent Nyheter',
                    href: '/aktuelt/artikkel/',
                    cls: 'flex-column-align-items-center news-card',
                    img:
                    {
                        alt: 'SoSent Logo',
                        cls: 'article-img',
                        src: '/media/images/news/SosEnT-favicon.png',
                    },
                },
                {
                    id: 3,
                    date: "2026-10-01",
                    title: 'Sosent Nyheter',
                    href: '/aktuelt/artikkel/',
                    cls: 'flex-column-align-items-center news-card',
                    img:
                    {
                        alt: 'SoSent Logo',
                        cls: 'article-img',
                        src: '/media/images/news/SosEnT-favicon.png',
                    },
                },
            ],
        },
    );

    const aboutData = reactive(
        {
            cls: ['flex-column-align-items-center'],
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
            cls: ['flex-column'],
            team:
            {
                title: 'Kontakt oss',
                cls: ['flex-wrap-row-justify-space-evenly'],

                contactCards:
                [
                    {
                        id: 0,
                        cls: ['card-container', 'component-theme'],
                        title: 'Styreleder',
                        name: 'Helle V. Rødahl',
                        // Make the email and phone numbers bot protected
                        contactData:
                        [
                            {
                                id: 0,
                                type: 'email',
                                cls: 'card-data',
                                name: 'Send en Epost',
                                href: 'mailto:' + 'demo' +'@' + 'example.com',
                            },
                            {
                                id: 1,
                                name: 'Telefonnummer',
                                type: 'telephone',
                                cls: 'card-data',
                                href : 'tel:' + '+47' + '12' + '34' + '56' + '78',
                            },
                        ],

                        img:
                        {
                            type: 'jpg',
                            cls: 'contact-logo',
                            src: '/media/images/team/profil-helle-privat.jpg',
                            alt: "JPG bilde av Helle V. Rødahl",
                        },
                    },
                    {
                        id: 1,
                        title: 'Generalsekretær',
                        cls: ['card-container', 'component-theme'],
                        name: 'Rune Kvarme',

                        // Make the email and phone numbers bot protected
                        contactData:
                        [
                            {
                                id: 0,
                                type: 'email',
                                cls: 'card-data',
                                name: 'Send en Epost',
                                href: 'mailto:' + 'demo' + '@' + 'example.com',
                            },
                            {
                                id: 1,
                                name: 'Telefonnummer',
                                type: 'telephone',
                                cls: 'card-data',
                                href : 'tel:' + '+47' + '12' + '34' + '56' + '78',
                            },
                        ],

                        img:
                        {
                            type: 'png',
                            cls: 'card-img',
                            alt: "Rune J. Kvarme ",
                            src: '/media/images/team/52700234381_5e75074f92_q.jpg',
                        },
                    },
                ],
            },
            media:
            {
                title : 'Dokumenter',
                cls: ['flex-wrap-row-justify-space-evenly', 'media-container', 'media-text'],
                files:
                [
                    {
                        id: 0,
                        type: 'pdf',
                        name: 'Vedtekter',
                        date: '2025-04-01',
                        cls: ['media-content', 'component-theme'],
                        description: 'Vedtekter for medlemmene i SosEnt Norge.',
                        href: '@/assets/media/files/organization/SosEnt-Norge-vedtekter.pdf',
                    },
                    {
                        id: 1,
                        type: 'pdf',
                        date: '2025-04-01',
                        name: 'Organisasjonskart',
                        cls: ['media-content', 'component-theme'],
                        description: 'Organisasjonskart over styret i SosEnt Norge.',
                        href: '@/assets/media/files/organization/SosEnt-Norge-organisajonskart.pdf',
                    },
                ],
            },

    });

    const networkData = reactive(
        {
            title: 'Medlemmer og samarbeids-partnere',
            cls: ['flex-column-align-content-center', 'flex-wrap-row-justify-space-evenly'],

            partnerData:
            {
                cls: ['partner-container', 'flex-wrap-row-justify-space-evenly'],

                data: 
                [
                                        {
                        id: 0,
                        type: 'external',
                        href: 'https://www.example.com',
                        cls: 'flex-wrap-row-justify-space-evenly',

                        img:
                        {
                            type: 'png',
                            alt: 'SoSent Logo',
                            cls: 'partner-img',
                            src: '/media/images/partners/SosEnT-favicon.png',
                        },
                    },
                    {
                        id: 1,
                        type: 'external',
                        href: 'https://www.example.com',
                        cls: 'flex-wrap-row-justify-space-evenly',

                        img:
                        {
                            type: 'png',
                            alt: 'SoSent Logo',
                            cls: 'partner-img',
                            src: '/media/images/partners/SosEnT-favicon.png',
                        },
                    },
                    {
                        id: 2,
                        type: 'external',
                        href: 'https://www.example.com',
                        cls: 'flex-wrap-row-justify-space-evenly',

                        img:
                        {
                            type: 'png',
                            alt: 'SoSent Logo',
                            cls: 'partner-img',
                            src: '/media/images/partners/SosEnT-favicon.png',
                        },
                    },
                    {
                        id: 3,
                        type: 'external',
                        href: 'https://www.example.com',
                        cls: 'flex-wrap-row-justify-space-evenly',

                        img:
                        {
                            type: 'png',
                            alt: 'SoSent Logo',
                            cls: 'partner-img',
                            src: '/media/images/partners/SosEnT-favicon.png',
                        },
                    },
                    {
                        id: 4,
                        type: 'external',
                        href: 'https://www.example.com',
                        cls: 'flex-wrap-row-justify-space-evenly',

                        img:
                        {
                            type: 'png',
                            alt: 'SoSent Logo',
                            cls: 'partner-img',
                            src: '/media/images/partners/SosEnT-favicon.png',
                        },
                    },
                    {
                        id: 5,
                        type: 'external',
                        href: 'https://www.example.com',
                        cls: 'flex-wrap-row-justify-space-evenly',

                        img:
                        {
                            type: 'png',
                            alt: 'SoSent Logo',
                            cls: 'partner-img',
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
                        name: 'Medlem 1',
                        href: 'https://www.example.com',
                        description: 'Beskrivelse av medlem 1.',
                    },
                    {
                        id: 1,
                        type: 'external',
                        name: 'Medlem 2',
                        href: 'https://www.example.com',
                        description: 'Beskrivelse av medlem 2.',
                        
                    },
                    {
                        id: 2,
                        type: 'external',
                        name: 'Medlem 3',
                        description: 'Beskrivelse av medlem 3.',
                    },
                    {
                        id: 3,
                        type: 'external',
                        name: 'Medlem 4',
                        href: 'https://www.example.com',
                        description: 'Beskrivelse av medlem 1.',
                    },
                    {
                        id: 4,
                        type: 'external',
                        name: 'Medlem 5',
                        href: 'https://www.example.com',
                        description: 'Beskrivelse av medlem 1.',
                    },
                    {
                        id: 5,
                        type: 'external',
                        name: 'Medlem 6',
                        href: 'https://www.example.com',
                        description: 'Beskrivelse av medlem 1.',
                    },
                ],
                media:
                {
                    file:
                    {
                        id: 0,
                        type: 'pdf',
                        cls: ['media-content', 'component-theme'],
                        href: '@/assets/media/files/organization/SosEnt-Norge-medlemmer.pdf',
                        name: 'Medlemsoversikt',
                    },
                },
            },
        }
    );

    const team = organization.team;
    const media = organization.media;

    const members = networkData.membersData;
    const partners = networkData.partnerData;

</script>