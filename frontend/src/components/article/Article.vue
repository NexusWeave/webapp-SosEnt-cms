<template>
    <article :class="article.cls[5]">
       <header>
           <Header
               :article="article"
               :isArticlePage="isArticlePage"
                :isNewsPage="isNewsPage"
               :Cls="[
                    article.cls[article.cls.length-1], article.cls[2],
                    article.cls[9], article.cls[6], article.cls[8]]"/>
       </header>
        <main  v-if="isArticlePage">
            <Main
            :Section="article.section" 
            :isArticlePage="isArticlePage" 
            :Cls="[
                article.cls[article.cls.length - 1], article.cls[3],
                article.cls[13], article.cls[4], article.cls[11],
                article.cls[12]
            ]"
            :date="article.date"/>
        </main>
        <footer>
        </footer>        
    </article>
</template>

<script setup>

    import { defineProps, computed, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    import Header from '@/components/article/Article-Header.vue';
    import Main from '@/components/article/Article-Main.vue';

    const props = defineProps({
        data: {
            type: Object || Array,
            required: true
        }
    });

    const article = props.data;

    const route = useRoute();
    const isPage = computed(() => {return route.name});
    
    const isNewsPage = isPage.value === 'news' ? true : false;
    const isArticlePage = isPage.value === 'article' ? true : false;


    //console.log("Articles Component :", isPage.value, article, isNewsPage, isArticlePage);
</script>