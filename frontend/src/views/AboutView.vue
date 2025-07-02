<template>
    <section :class="newsData.cls">
        <article v-for="article in newsData.articles" :key="article.id" :class="article.cls">
            <img :src="article.img.src" :alt="article.img.alt" :class="article.img.cls">
            <h2>{{ article.title }}</h2>
            <p class="date">{{ article.date }}</p>
            <p>{{ article.description }}</p>
            <a :href="article.href" class="read-more">Les mer</a>
        </article>
    </section>

    <section :class="aboutData.cls">
        <h1>{{ aboutData.title }}</h1>
        <p v-for="(paragraph, i) in aboutData.paragraphs" :key="i">{{ paragraph }}</p>
    </section>

    <section v-if="membersData.members.length > 0">Våre medlemmer
        <table>
            <tr>
                <th>Medlemsliste med navn</th>
            </tr>
            <tr v-for="member in membersData.members" :key="member.id">
                <td>
                    <Link :data="member" v-if ="member.href"/>
                    <h3 v-if="!member.href">{{ member.title }}</h3>
                    <p>{{ member.description }}</p>
                </td>
            </tr>
        </table>
    </section>

    <section :class="mediaData.cls">
        <div v-for="media in mediaData.files">
            <Link :data="media" />
            <p>{{ media.description }}</p>
        </div>
    </section>

    <section :class="contactData.cls">
        <div v-for="person in contactData.contactCards">
            <div :key="person.id" :class="person.cls">
                <img :src="person.img.src" :alt="person.img.alt" :class="person.img.cls">
                <h2>{{ person.name }}</h2>
                <h3>{{ person.title }}</h3>
                
                <p v-for="contact in person.contactData" :key="contact.id" :class="contact.cls">
                    <p>{{ contact.type + ' :'}}</p>
                    <Link :data="contact" />
                    </p>
            </div>
        </div>Contact</section>

    <section :class="partnerData.cls" v-if ="partnerData.partners.length > 0">
        <h1>{{ partnerData.title }}</h1>
        <div v-for="partner in partnerData.partners" :key="partner.id" :class="partner.cls">
            <Link :data="partner" />
            </div>
    </section>
</template>

<script setup>
import Link from '@/components/navigation/Link.vue';

import { reactive } from 'vue';

const newsData = reactive(
    {
        cls: 'flex-wrap-row-justify-space-between',
        articles: 
        [
            {
                id: 0,
                date: "2023-10-01",
                title: 'Sosent Nyheter',
                href: '/aktuelt/artikkel/',
                cls: 'flex-column-align-items-center news-article',
                description: 'Siste nytt om Sosent og sosialt entreprenørskap i Norge.',
                img:
                {
                    alt: 'SoSent Logo',
                    cls: 'article-img',
                    src: '/media/images/news/SosEnT-favicon.png',
                },
            },
            {
                id: 1,
                date: "2023-10-01", 
                title: 'Sosent Nyheter',
                href: '/aktuelt/artikkel/',
                cls: 'flex-column-align-items-center news-article',
                description: 'Siste nytt om Sosent og sosialt entreprenørskap i Norge.',
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
                cls: 'flex-column-align-items-center news-article',
                description: 'Siste nytt om Sosent og sosialt entreprenørskap i Norge.',
                img:
                {
                    alt: 'SoSent Logo',
                    cls: 'article-img',
                    src: '/media/images/news/SosEnT-favicon.png',
                },
            },
            {
                id: 3,
                date: "2023-10-01",
                title: 'Sosent Nyheter',
                href: '/aktuelt/artikkel/',
                description: 'Siste nytt om Sosent og sosialt entreprenørskap i Norge.',
                img:
                {
                    alt: 'SoSent Logo',
                    cls: 'article-img',
                    src: '/media/images/news/SosEnT-favicon.png',
                },
            },
        ],
    }
);

const aboutData = reactive(
    {
        cls: 'flex-column-align-items-center',
        title: 'Om oss',
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

const membersData = reactive(
    {
        cls: 'flex-column-align-items-center',
        title: 'Medlemmer',
        members: [
            {
                id: 0,
                type: 'external',
                title: 'Medlem 1',
                href: 'https://www.example.com',
                description: 'Beskrivelse av medlem 1.',
            },
            {
                id: 1,
                type: 'external',
                title: 'Medlem 2',
                href: 'https://www.example.com',
                description: 'Beskrivelse av medlem 2.',
                
            },
            {
                id: 2,
                type: 'external',
                title: 'Medlem 3',
                description: 'Beskrivelse av medlem 3.',
            },
        ],
    }
);

const mediaData = reactive(
    {
        cls: 'flex-wrap-row-justify-flex-start',
        files:
        [
            {
                id: 0,
                type: 'pdf',
                name: 'Vedtekter',
                cls: 'media-container',
                description: 'Nedlastbart PDF fil med vedtekter for SosEnt Norge.',
                href: '@/assets/media/files/organization/SosEnt-Norge-vedtekter.pdf',
            },
            {
                id: 1,
                type: 'pdf',
                cls: 'media-container',
                name: 'Organisasjonskart',
                description: 'Nedlastbar PDF fil med Organisasjonskart for SosEnt Norge.',
                href: '@/assets/media/files/organization/SosEnt-Norge-organisajonskart.pdf',
            },
        ],
    }
);

const partnerData = reactive(
    {
        cls: 'flex-wrap-row-justify-space-evenly',
        title: 'Våre samarbeidspartnere',
        partners: [
            {
                id: 0,
                type: 'external',
                href: 'https://www.example.com',

                img:
                {
                    type: 'png',
                    alt: 'SoSent Logo',
                    cls: 'partner-logo',
                    src: '/media/images/partners/SosEnT-favicon.png',
                },
                
            },
            {
                id: 1,
                type: 'external',
                href: 'https://www.example.com',
                img:
                {
                    type: 'png',
                    alt: 'SoSent Logo',
                    cls: 'partner-logo',
                    src: '/media/images/partners/SosEnT-favicon.png',
                },
            },
        ],
    }
);

const contactData = reactive(
    {
        cls: 'flex-column-align-items-center',
        title: 'Kontakt oss',

        contactCards:
        [
            {
                id: 0,
                cls: 'contact-card',
                title: 'Styreleder',
                name: 'Helle V. Rødahl',
                // Make the email and phone numbers bot protected
                contactData:
                [
                    {
                        id: 0,
                        name: '+47 12 34 56 78',
                        type: 'telephone',
                        cls: 'contact-data',
                        href : 'tel:' + '+47' + '12' + '34' + '56' + '78',
                    },
                    {
                        id: 1,
                        type: 'email',
                        cls: 'contact-data',
                        name: 'Send en Epost',
                        href: 'mailto:' + 'demo@example.com',
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
                cls: 'contact-card',
                name: 'Rune Kvarme',
                
                // Make the email and phone numbers bot protected
                contactData:
                [
                    {
                        id: 0,
                        name: '+47 12 34 56 78',
                        type: 'telephone',
                        cls: 'contact-data',
                        href : 'tel:' + '+47' + '12' + '34' + '56' + '78',
                    },
                    {
                        id: 1,
                        type: 'email',
                        cls: 'contact-data',
                        name: 'Send en Epost',
                        href: 'mailto:' + 'demo@example.com',
                    },
                ],

                img:
                {
                    type: 'png',
                    cls: 'contact-logo',
                    alt: "Rune J. Kvarme ",
                    src: '/media/images/team/52700234381_5e75074f92_q.jpg',
                },
            },
        ],
    }
);

</script>