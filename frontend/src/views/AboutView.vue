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
                    <p>

                        <Anchor v-for="contact in person.contactInfo" :key="contact.id" 
                        :data="contact.anchor" :Cls="[contact.anchor.type[0], 'title-h4']" />
                    </p>
                </div>
            </section>
        </section>
        <Sections v-if="isMedia" 
            :data="media"
            filter="medlemskap"
            :cls="['media-container','flex-wrap-row-justify-space-evenly',
            ['media-content', 'flex-column', 'component-theme']]"/>

    </section>

    <section  v-if="members.members.length > 0 || partners.partners.length > 0"
        class="flex-column-align-content-center">
        <h2 class="title-h2">{{ connectionData.title }}</h2>
        <section class="flex-wrap-row-justify-space-evenly">

            <section v-if ="isMembers"
                :class="['flex-column', 'member-container']" >
                <Table :data="members" :cls="[]" />
            </section>

            <section v-if ="isPartners"
                :class="['flex-column', 'partner-container']">
                <div v-for="partner in partners.partners" :key="partner.id" 
                    :class="['partner-img']">
                    <Anchor :data="partner.anchor" :Cls="['partner-img']"/>
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
    
    import Table from '@/components/utils/Table.vue';
    import Figure from '@/components/media/Figure.vue';
    import Sections from '@/components/utils/Section.vue';
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