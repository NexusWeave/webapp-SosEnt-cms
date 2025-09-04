<template v-if="news.isLoaded">
    <h2 :class="page.cls">{{ page.title}}</h2>
    <Articles  v-if="news.recent.length > 0"
        v-for="article in news.recent" :key="article.id" 
        :data="article"
        :Cls="[ article.id % 2 ? 'flex-wrap-row-justify-space-around' : 
        'flex-row-reversed-justify-space-around-align-content-center',
        'article-ingress', article.cls[0],article.cls[1], 
        'news-article']"/>

    <section v-if="news.archived.length > 0">
        <h2 :class="page.section.cls"> {{ page.section.title }}</h2>
        <Pagnition v-if="archived.total > 1"
            :Cls="archived.cls"
            :totalPage="archived.total" 
            :activePage="archived.activePage"
            @update="(page) => archived.activePage = page" />
    
        <section v-if="news.archived.length > 0"
                :class="[news.data.cls[1]]" >
            <Articles  v-for="article in archived.articles" :key="article.id"
                :data="article" 
                :Cls="[['flex-column-align-items-center', 'article-section'],
            'article-section', article.cls[0], article.cls[1], 'news-card']"/>
        </section>
    </section>
</template>

<script setup>

    import { newsStore } from '@/stores/news-store.js';
    import { computed, reactive, onMounted } from 'vue';

    import Articles from '@/components/article/Article.vue';
    import Pagnition from '@/components/navigation/Pagnition.vue';
    
    const news = newsStore();

    const page = reactive(
        {
            title: 'Nyheter fra SosEnt Norge',
            cls: ['flex-wrap-row-justify-center'],
            section: {
                title: 'Nyhetsarkiv',
                cls: ['flex-wrap-row-justify-center']
            }
        }
    );
    const archived = reactive(
        {
            n: 3,
            activePage: 1,
            cls: ['flex-wrap-row-justify-center', 'flex-wrap-row-align-items-center'],
            total : computed(() => Math.ceil(news.archived.length / archived.n)),
            articles: computed(() =>
            {
                const n = archived.n;
                const current = archived.activePage;
                
                const end = (current * n);
                const start = (current - 1) * n;

                return news.archived.slice(start, end);
            })
        }
    );

    onMounted( async () => {
        await news.fetchNews();   
    });

    //console.log("NewsView loaded with data: ", news.archived);
</script>