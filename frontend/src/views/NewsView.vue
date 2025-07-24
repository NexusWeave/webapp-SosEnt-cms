<template v-if="news.isLoaded">
    <h2 :class="page.cls">{{ page.title}}</h2>
    <Articles 
        v-if="news.recent.length > 0"
        v-for="article in news.recent"         
        :data="article"
        :key="article.id" 
        :Cls="[ article.id % 2 ? article.cls[1] : article.cls[2],
                article.cls[10], article.cls[3], article.cls[11],
                article.cls[8], article.cls[8]]"/>

    <section v-if="news.archived.length > 0">
        <h2 :class="page.section.cls"> {{ page.section.title }}</h2>
        <Pagnition
            :Cls="archived.cls"
            :totalPage="archived.total" 
            :activePage="archived.activePage"
            @update="(page) => archived.activePage = page" />
    
        <section :class="[news.data.cls[1]]" v-if="news.archived.length > 0">
            <Articles 
                v-for="article in archived.articles" :key="article.id"
                :data="article" 
                :Cls="[[article.cls[0], article.cls[12]], article.cls[12], 
                    article.cls[3], article.cls[11], article.cls[8],
                    article.cls[6]]"/>
        </section>
    </section>
</template>

<script setup>

    import { newsStore } from '@/stores/news-store.js';
    import { computed, reactive, onMounted } from 'vue';

    import Articles from '@/components/article/Article.vue';
    import Pagnition from '@/components/utils/Pagnition.vue';
    
    const news = newsStore();

    const page = reactive(
        {
            title: 'Siste nytt fra foreningen',
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