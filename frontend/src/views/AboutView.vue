<template>
    <section v-if="news.recent.length > 0" :class="[news.data.cls[1]]">
        <NewsCard
            v-for="article in news.recent" 
            :key="article.id" 
            :data="article"    
            :Cls="[['flex-column-align-items-center', 'article-section'],
            'article-section', article.cls[0], 'tags', 'news-card']"/>
    </section>

    <section :class="organization.cls[0]">
        <section v-if="organization.isLoaded"
                class="section-content">
                <h2 :class="organization.cls[2]"> {{ organization.title }}</h2>
                <p v-for="paragraph in organization.content"
                    :key="paragraph.id">{{ paragraph }}</p>
        </section>

        <section v-if="organization.team.isLoaded"
            :class="[organization.cls[0], organization.team.cls[1]]">
            <h2 :class="organization.cls[2]"> {{ organization.team.title }}</h2>
            <section v-if="organization.team.isLoaded" 
                    :class="organization.team.cls">
                <div v-for="person in organization.team.team" 
                    :class="person.cls" :key="person.id">
                    <Figure v-if="person.img" :data="person.img" />
                    <h2>{{ person.name }}</h2>
                    <h3>{{ person.title }}</h3>
                    <p>
                        <Anchor v-for="contact in person.contactInfo" :key="contact.id" 
                        :data="contact.anchor"/>
                    </p>
                </div>
            </section>
        </section>

        <section v-if="organization.media.isLoaded" :class="organizationData.media.cls[2]">
            <h2 :class="organizationData.media.cls[0]"> {{ organization.media.title }} </h2>
            <section :class="[organizationData.media.cls[1]]">
                    <Sections v-for="file in organization.media.media" :key="file.id"
                        :data="file"/>
            </section>
        </section>
    </section>

    <section v-if="members.members.length > 0 || partners.partners.length > 0" :class="connectionData.cls[0]">

        <h2 :class="connectionData.cls[1]">{{ connectionData.title }}</h2>
        <section :class="connectionData.cls[2]">

            <section v-if ="members.isLoaded"
                :class="members.cls" >
                <table>
                    <tbody>
                        <tr v-for="member in members.members.slice(0, 5)" :key="member.id">
                            <td v-if="member.anchor">
                                <Anchor :data="member.anchor"/>
                            </td>
                            <td v-else>
                                {{ member.label }}
                            </td>
                        </tr>
                    </tbody>
                    <tfoot v-if="members.members.length > 5">
                        
                        <Anchor :data="members.media" />
                    </tfoot>
                </table>
            </section>

            <section v-if ="partners.isLoaded"
                :class="partners.cls">
                <div v-for="partner in partners.partners" :key="partner.id" 
                    :class="partner.cls">
                    <Anchor :data="partner.anchor" />
                </div>
            </section>
        </section>
    </section>

</template>

<script setup>
    import { reactive } from 'vue';

    import { newsStore } from '@/stores/news-store.js';
    import { partnerStore } from '@/stores/partner-store';
    import { memberStore } from '@/stores/member-store.js';
    import { organizationStore } from '@/stores/organization-store.js';
    
    import Sections from '@/components/utils/Section.vue';
    import Figure from '@/components/media/Figure.vue';    
    import Anchor from '@/components/navigation/Anchor.vue';
    import NewsCard from '@/components/article/Article.vue';

    const news = newsStore();
    const members = memberStore();
    const partners = partnerStore();
    const organizationData =
    {

        media:
        {
            cls: [ 'organization-title-h2','flex-wrap-row-justify-space-evenly', 'media-container', ],
        }
    }
    const organization = organizationStore();

    const connectionData = reactive(
        {
            title: 'Medlemmer og samarbeids-partnere',
            cls: [  'flex-column-align-content-center','connections-h2',
                    'flex-wrap-row-justify-space-evenly'],
        }
    );

    //console.log("AboutView loaded with data: ", );
</script>