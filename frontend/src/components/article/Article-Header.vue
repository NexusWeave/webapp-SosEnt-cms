<template>
    <section :class="cls[0]">
        <section :class="cls[1]">
            <Figure  v-if="!isArticlePage && !isNewsPage ||  article.archived" :data="article.img"/>
            <Anchor  v-if="isArticlePage" :data="anchor"/>
            <h2 :class="cls[2]"> {{ article.title }}</h2>
            <p>
                <MetaData 
                    :data="article.date" 
                    Cls="article-date" />
                
                <span :class="cls[3]" v-if="article.tags">
                    <MetaData v-if="article.tags" 
                        :array="article.tags"/>
                </span>
            </p>
            <p>{{ article.ingress.content }}</p>
            <Anchor v-if="!isArticlePage && article.section"
                :data="anchor"/>

            <Figure  v-if="isArticlePage" :data="article.img"/>
        </section>
        <section :class="cls[1]" v-if="isNewsPage && !isArticlePage && !article.archived">
            <Figure :data="article.img"/>
        </section>
    </section>
</template>

<script setup>

    import { computed, defineProps, reactive } from 'vue';

    import Figure from '@/components/media/Figure.vue';
    import MetaData from '@/components/utils/Span.vue';
    import Btn from '@/components/navigation/Button.vue';
    import Anchor from '@/components/navigation/Anchor.vue';

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

    const anchor = computed(() => {
        return isArticlePage ? {
            cls: ['button', 'read-more'],
            label: 'Gå tilbake',
            href: () => { window.history.back() }
        } : article.anchor;
    });

    //console.log("Article Header Component :", article, isNewsPage, isArticlePage);
</script>