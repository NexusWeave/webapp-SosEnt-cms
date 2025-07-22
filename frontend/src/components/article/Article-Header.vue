<template>
    <section :class="cls[0]">
        <section :class="cls[1]">
            <section>
                <h2 :class="cls[2]">
                    {{ article.title }}
                </h2>
                <MetaData 
                    v-if="article.date && article.date.type == 'updated'" 
                    :data="article.date" 
                    :Cls="[cls[3]]" 
                    :text="article.date.type"/>
                <p>{{ article.ingress.content }}</p>
            </section>
            <section>
                <p>
                    <MetaData v-if="article.tags" 
                        :Cls="[cls[4]]" 
                        :array="article.tags"/>
                    <Btn
                        v-if="article.btn  && article.section && !isArticlePage"
                        :data="article.btn"/>
                </p>
            </section>
        </section>
        <section v-if="!isArticlePage && article.img" :class="cls[5]">
            <Figure :data="article.img" />
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
            required: true
        },
        Cls: {
            type: Array,
            default: () => []
        }
    });
    
    const cls = props.Cls;
    const article = props.article;
    const isArticlePage = props.isArticlePage;

</script>