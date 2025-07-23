<template v-if="news.isLoaded">
    <h2>Nyheter</h2>
    <Articles 
        v-if="news.recent.length > 0"
        v-for="article in news.recent" 
        
        :data="article"
        :key="article.id" />

    <seaction v-if="news.archived.length > 0">
        <h2> Arkiverte Nyheter</h2>
        <Pagnition
            :Cls="archived.cls"
            :totalPage="archived.total" 
            :activePage="archived.activePage"
            @update="(page) => archived.activePage = page" />
    
        <section :class="[news.data.cls[1]]" v-if="news.archived.length > 0">
                <Articles 
                    v-for="article in archived.articles" 
                    :key="article.id" 
                    :data="article" 
                    :Cls="[ '', '', article.cls[2], article.cls[3],
                    article.cls[8], article.cls[1], article.cls[6],
                    '', article.cls[14]
                    ]"/>
        </section>
    </seaction>
</template>

<script setup>

    import { newsStore } from '@/stores/newsStore.js';
    import { computed, reactive, onMounted } from 'vue';

    import Articles from '@/components/article/Article.vue';


import Pagnition from '@/components/utils/Pagnition.vue';
    

    const news = newsStore();


    const archived = reactive(
        {
            n: 3,
            activePage: 1,
            cls: ['flex-wrap-row-justify-center', 'archive-pagnition'],
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