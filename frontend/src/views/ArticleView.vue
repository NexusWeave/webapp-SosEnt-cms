<template v-if="news.isLoaded">
    <Article 
        v-if="article"
        :data="article"
        :Cls="cls"/>

</template>

<script setup>
    import { computed, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { newsStore } from '@/stores/news-store.js';
    
    
    import Article from '@/components/article/Article.vue';
    
    const route = useRoute();
    const news = newsStore();
    const article = news.articles.find(article => article.id === route.params.id.toString());


    const cls = ['container-grid', ['article-ingress', 'main-grid'], 
    'article-title-h2', 'tags',// End of Header classes
    'flex-column-align-items-center', 'article-title-h3', ['main-grid',
    'article-section-content'], 'title-h4', 'aside-grid',
    ['component-theme', 'cta-section'], 'cta-section-content',
    'article-news',
    // End of Main classes
    ];

    watch(() => news, (data) => {
        const ID = route.params.id.toString();
        article = computed(() => news.fetchArticle(ID));
        if (data.isLoaded) {
            
            console.log("ArticleView updated with new ID: ", ID, article);
        }
    });
    //console.log("ArticleView loaded with data: ",  article, route.params.id, cls);
</script>