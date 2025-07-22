<template>
    <footer v-if="isArticlePage" :class="article.cls">
        <Figure v-if="article.footer.img" :data="article.footer.img" />
        <p v-if="article.footer.content" v-for="(p, i) in article.footer.content" :key="i">
            {{p}}
        </p>
        <p>
            <MetaData :data="article.date" v-if="article.date" :text="'published'"/>
            <MetaData v-if="article.footer.anchor" :data="article.footer.anchor" />
            <span v-if="article.tags && isArticlePage" :class="article.cls[4]">
                <MetaData :array="article.tags" />
            </span>
        </p>
    </footer>
</template>

<script setup>
    import { defineProps, reactive } from 'vue';

    import Figure from '@/components/utils/Figure.vue';
    import MetaData from '@/components/utils/Span.vue';

    const props = defineProps({
        data: {
            type: Object,
            required: true
        },
        isArticlePage: {
            type: Boolean,
            required: true
        }
    });

    const article = reactive(props.data);
    console.log("Article Footer Component loaded with data: ", article);
</script>