<template v-if="news.isLoaded">
    <h2>Recent News</h2>
    <section :class="news.data.cls[1]" v-if="news.recent.length > 0">
        <Articles v-for="header in news.recent" :key="header.id" :data="header.head" />
    </section>
    <h2>Archived News</h2>
    <section :class="news.data.cls[1]">
        <Table v-for="article in news.archived" :key="article.id" :data="article.head" />

    </section>
</template>

<script setup>

    import { onMounted } from 'vue';

    import Articles from '@/components/Article.vue';
    import Table from '@/components/utils/Table.vue';
    
    import { newsStore } from '@/stores/newsStore.js';
    

    const news = newsStore();

    onMounted( async () => {
        await news.fetchNews();   
    });

    //console.log("NewsView loaded with data: ", news.archived);
</script>