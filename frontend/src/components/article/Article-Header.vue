<template>
    <section :class="cls[0]">
        <section :class="cls[cls.length - 1]">
            <section>
                <h2 :class="cls[2]">
                    {{ article.title }}
                </h2>
                <MetaData 
                    v-if="article.date && article.date.type == 'updated'" 
                    :data="article.date" 
                    :Cls="[article.date.cls]" 
                    :text="article.date.type"/>
                <p :class="cls[3]">{{ article.ingress.content }}</p>
            </section>
            <p>
                <span :class="cls[4]" v-if="article.tags && !isArticlePage">
                    <MetaData v-if="article.tags" 
                        :Cls="[cls[5]]" 
                        :array="article.tags"/>
                </span>
                <Btn
                    v-if="article.btn  && article.section && !isArticlePage"
                    :data="article.btn"/>
                    
            </p>
            <section>
            </section>
        </section>
        <Figure :data="article.img" v-if="isNewsPage && !isArticlePage"/>
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
    

</script>