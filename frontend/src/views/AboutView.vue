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

    <section v-if="organization.isLoaded"
            :class="organization.cls[0]">
            <h2 :class="organization.cls[2]"> {{ organization.title }}</h2>
        <p v-for="paragraph in organization.content"
            :class="organization.cls[1]"
            :key="paragraph.id">{{ paragraph }}</p>
    </section>

    <section :class="organization.cls[0]">
        <h2 :class="organization.cls[2]"> {{ organization.team.title }}</h2>
        <section v-if="organization.team.isLoaded" 
                :class="organization.team.cls">
            <div v-for="person in organization.team.team" 
                :class="person.cls" :key="person.id">
                <Figure v-if="person.img" :data="person.img" />
                <h2>{{ person.name }}</h2>
                <h3>{{ person.title }}</h3>
                <p>
                    <Anchor v-for="contact in person.contactInfo" 
                            :key="contact.id" :data="contact.anchor"/>
                </p>
            </div>
        </section>

        <h2 :class="organization.cls[2]"> {{ organization.media.title }}</h2>
        <section v-if="organization.media.isLoaded"
            :class="organization.media.cls">
            
            <div v-for="media in organization.media.files" :class="media.cls[0] + ' ' + media.cls[1]" :key="media.id" :data-filetype="media.type">    
                <Anchor :data="media.anchor" />
                <metaData :data="media.date" :text="media.date.type" />
                <span :class="media.cls[2]">{{ media.description }}</span>
            </div>
        </section>
    </section>
    
    <section :class="connectionData.cls[0]">

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
    import { onMounted, reactive } from 'vue';

    import { newsStore } from '@/stores/news-store.js';
    import { partnerStore } from '@/stores/partner-store';
    import { memberStore } from '@/stores/member-store.js';
    import { organizationStore } from '@/stores/organization-store.js';
    
    import S from '@/components/utils/Section.vue';
    import Figure from '@/components/media/Figure.vue';    
    import metaData from '@/components/utils/Span.vue';
    import Anchor from '@/components/navigation/Anchor.vue';
    import NewsCard from '@/components/article/Article.vue';
    
    

    const news = newsStore();
    const members = memberStore();
    const partners = partnerStore();
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