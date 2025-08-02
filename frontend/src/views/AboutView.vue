<template>
    <section v-if="news.recent.length > 0" :class="[news.data.cls[1]]">
        <NewsCard v-for="article in news.recent"  :key="article.id"
            :data="article"
            :Cls="[['flex-column-align-items-center', 'article-section'],
            'article-section', 'article-title-h2', 'tags', 'news-card']"/>
    </section>

    <section class="flex-column-align-items-center">
        <section v-if="organization.isLoaded"
                class="section-content">
                <h2 class="title-h2"> {{ organization.title }}</h2>
                <p v-for="paragraph in organization.content"
                    :key="paragraph.id">{{ paragraph }}</p>
        </section>

        <section v-if="organization.team.isLoaded"
            :class="['flex-column-align-content-center', 'card-container']">
            <h2 class="title-h2"> {{ organization.team.title }}</h2>

            <section v-if="organization.team.isLoaded" 
                class="flex-wrap-row-justify-space-evenly card-container">

                <div v-for="person in organization.team.team" 
                    :class="[['card-content', 'component-theme'],'title-h4']" :key="person.id">
                    <Figure v-if="person.img" :data="person.img" />
                    <h2>{{ person.name }}</h2>
                    <h3>{{ person.title }}</h3>
                        <p v-for="contact in person.contactInfo" :key="contact.id">
                            <Anchor :data="contact.anchor" :Cls="[contact.anchor.type[0], 'title-h4']"/>
                        </p>
                </div>
            </section>
        </section>
    </section>

</template>

<script setup>
    import { reactive, computed } from 'vue';
    
    import { newsStore } from '@/stores/news-store.js';
    import { mediaStore } from '@/stores/media-store.js';
    import { partnerStore } from '@/stores/partner-store';
    import { memberStore } from '@/stores/member-store.js';
    import { organizationStore } from '@/stores/organization-store.js';
    
    import Figure from '@/components/media/Figure.vue';
    import Anchor from '@/components/navigation/Anchor.vue';
    import NewsCard from '@/components/article/Article.vue';

    const news = newsStore();
    const media = mediaStore();
    const members = memberStore();
    const partners = partnerStore();

    const isMedia = computed(() => media.isLoaded);
    const isMembers = computed(() => members.isLoaded);
    const isPartners = computed(() => partners.isLoaded);
    const data = reactive(
        {
            cls: []
        }
    );
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