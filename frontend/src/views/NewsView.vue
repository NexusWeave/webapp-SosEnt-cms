<template v-if="news.isLoaded">
    <h2>Nyheter</h2>
    <Articles 
        v-if="news.recent.length > 0"
        v-for="article in news.recent" 
        :key="article.id" 
        :data="article"/>

    <h2 v-if="news.archived.length > 0"> Arkiverte Nyheter</h2>
    <section :class="[news.data.cls[1]]" v-if="news.archived.length > 0">
            <Articles 
                v-for="article in news.archived" 
                :key="article.id" 
                :data="article" 
                :Cls="[ '', '', article.cls[2], article.cls[3],
                article.cls[8], article.cls[1], article.cls[6],
                '', article.cls[14]
                ]"
                />"
    </section>
</template>

<script setup>

    import { onMounted } from 'vue';

    import Articles from '@/components/article/Article.vue';
    import NewsCard from '@/components/article/Article-Header.vue';
    
    import { newsStore } from '@/stores/newsStore.js';
    

    const news = newsStore();

    onMounted( async () => {
        await news.fetchNews();   
    });

    //console.log("NewsView loaded with data: ", news.archived);
</script>