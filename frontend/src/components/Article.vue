<template>
    <article :class="article.cls[3]">
        <Header
        :article="article"
        :isArticlePage="isArticlePage"
        :Cls="[ 
            article.cls[9], article.cls[7], article.cls[2], 
            article.cls[4], article.cls[3], article.cls[7]
            ]"
        />
        <main  v-if="isArticlePage" :class="article.cls[3]">
            <Main
            :Section="article.section" 
            :isArticlePage="isArticlePage" 
            :Cls="[article.cls[7], article.cls[7], article.cls[article.cls.length-1]]"
            :date="article.date"    
        />
        </main>
        
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