<template>
    <Article v-if="article.data" :data="article.data" />

</template>
<script setup>
    import { useRoute } from 'vue-router';
    import { onMounted, reactive, computed } from 'vue';
    import { newsStore } from '@/stores/newsStore';

    import Article from '@/components/Article.vue';

    const route = useRoute();
    const news = newsStore();
    
    const article = reactive({
        data: null
    });
    article.data = computed(() => news.data.articles.find(article => article.id === route.params.id.toString()));

    onMounted( async () => {
        await news.fetchNews();
    });

    //  console.log("ArticleView loaded with data: ", route.params.id.toString(), article.data);
</script>