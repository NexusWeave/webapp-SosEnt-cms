<template>
    <section v-if="news.recent.length > 0" :class="[news.data.cls[1]]">
        <NewsCard v-for="article in news.recent"  :key="article.id"
            :data="article"
            :Cls="[['flex-column-align-items-center', 'article-section'],
            'article-section', 'article-title-h2', 'tags', 'news-card']"/>
    </section>
    {{ organization.isLoaded }}
    <section class="flex-column-align-items-center">
        <section class="section-content">
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
    
    import { newsStore } from '@/stores/news-store.js';
    import { organizationStore } from '@/stores/organization-store.js';
    
    import Figure from '@/components/media/Figure.vue';
    import Anchor from '@/components/navigation/Anchor.vue';
    import NewsCard from '@/components/article/Article.vue';

    const news = newsStore();
    const organization = organizationStore();

    //console.log("AboutView loaded with data: ", );
</script>