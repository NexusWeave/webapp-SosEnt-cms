<template v-if="news.isLoaded">
    <Article 
        v-if="article"
        :data="article"
        :Cls="cls"/>

</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { newsStore } from '@/stores/news-store.js';
    import { onMounted, reactive, computed, watch } from 'vue';
    
    import Article from '@/components/article/Article.vue';
    
    const route = useRoute();
    const news = newsStore();
    const article = news.articles.find(article => article.id === route.params.id.toString());


    const cls = [   article.cls[0], article.cls[10], article.cls[3],
                    article.cls[11], article.cls[8], article.cls[4],
                    [article.cls[1], article.cls[13]], [article.cls[2], article.cls[13]], article.cls[13],
                    article.cls[4], article.cls[5], article.cls[7]];

    watch(() => news, (data) => {
        const ID = route.params.id.toString();
        article = computed(() => news.fetchArticle(ID));
        if (data.isLoaded) {
            
            console.log("ArticleView updated with new ID: ", ID, article);
        }
    });
    console.log("ArticleView loaded with data: ",  article, route.params.id, cls);
</script>