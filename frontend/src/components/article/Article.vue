<template>
    <article :class="cls[cls.length - 1]">
       <header>
           <Header
                :article="article"
                :isNewsPage="isNewsPage"
                :isArticlePage="isArticlePage"
                :Cls="[ cls[0], cls[1], cls[2], cls[3], cls[4]]"/>
       </header>
        <main  v-if="article.section && isArticlePage">
            <Main
                :date="article.date"
                :Section="article.section"
                :isArticlePage="isArticlePage"
                :Cls="[ cls[5], cls[6], cls[7], 
                        cls[8], cls[9], cls[10], cls[11]]"/>

        </main>
        <footer v-if="article.conclusion && isArticlePage">
        </footer>        
    </article>
</template>

<script setup>

    import { defineProps, computed, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    import Header from '@/components/article/Article-Header.vue';
    import Main from '@/components/article/Article-Main.vue';

    const props = defineProps(
        {
        data: {
            type: Object || Array,
            required: true
        },
        Cls: {
            type: Array,
            required: false
        },
    });

    const article = props.data;
    const cls = computed(() => {
        return props.Cls ? props.Cls : article.cls;
    });

    const route = useRoute();
    const isPage = computed(() => {return route.name});

    const isNewsPage =  isPage.value === 'news' ? true : false;
    const isArticlePage = isPage.value === 'article' ? true : false;


    //console.log("Articles Component :", isPage.value, article, isNewsPage, isArticlePage), article.conclusion;
</script>