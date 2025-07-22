<template>
    <article :class="cls[5]">
       <header>
           <Header
               :article="article"
               :isArticlePage="isArticlePage"
                :isNewsPage="isNewsPage"
               :Cls="[
                    cls[cls.length-1], cls[2],
                    cls[9], cls[6], cls[8]]"/>
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


    //console.log("Articles Component :", isPage.value, article, isNewsPage, isArticlePage);
</script>