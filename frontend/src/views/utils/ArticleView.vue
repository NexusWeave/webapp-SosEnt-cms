<template>
    <Article v-if="article.data" :data="article.data" />

</template>
<script setup>
    import { useRoute } from 'vue-router';
    import { onMounted, reactive } from 'vue';
    import { newsStore } from '@/stores/newsStore';

    import Article from '@/components/Article.vue';

    const route = useRoute();
    const news = newsStore();

    const data = news.data.articles;
    
    const article = reactive({
        data: null
    });

    article.data = data.find(article => article.id === route.params.id.toString());

    onMounted( async () => {
        await news.fetchNews();
    });
    console.log("ArticleView loaded with data: ", route.params.id, article.data);
</script>