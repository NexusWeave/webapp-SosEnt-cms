<template>
    <section :class="cls[0]">
        <section :class="cls[cls.length - 1]">
            <Figure  v-if="!isNewsPage || article.archived ":data="article.img"/>
            <h2 :class="cls[1]"> {{ article.title }}</h2>
            <p class="flex-wrap-row">
                <MetaData 
                    v-if="article.date" 
                    :data="article.date" 
                    :Cls="[article.date.cls]" 
                    :text="article.date.type"/>
                <span :class="cls[3]" v-if="article.tags">
                    <MetaData v-if="article.tags" 
                        :Cls="[cls[4]]" 
                        :array="article.tags"/>
                </span>
            </p>
            <p :class="cls[2]">{{ article.ingress.content }}</p>
            <Btn
                v-if="article.btn  && article.section && !isArticlePage"
                :data="article.btn"/>

        </section>
        <section :class="cls[cls.length - 1]">
            <Figure :data="article.img" v-if="isNewsPage && !isArticlePage && !article.archived"/>
        </section>
    </section>
</template>

<script setup>

    import { defineProps } from 'vue';

    import Figure from '@/components/media/Figure.vue';
    import MetaData from '@/components/utils/Span.vue';
    import Btn from '@/components/navigation/Button.vue';

    const props = defineProps({
        article: {
            type: Object,
            required: true
        },
        isArticlePage: {
            type: Boolean,
            required: false
        },
        isNewsPage: {
            type: Boolean,
            required: false
        },
        Cls: {
            type: Array,
            default: () => []
        }
    });
    
    const cls = props.Cls;
    const article = props.article;
    const isNewsPage = props.isNewsPage;
    const isArticlePage = props.isArticlePage;

    //console.log("Article Header Component :", article, isNewsPage, isArticlePage);
</script>