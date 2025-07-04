<template>
    <article v-for="article in articles" :key="article.id" :class="article.cls">
        <img :src="article.img.src" :alt="article.img.alt" :class="article.img.cls">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <p class="date"><time datetime="{{ article.date }}">{{ article.date }}</time></p>
        <a :href="article.href" class="read-more">Les mer</a>
    </article>
</template>
<script setup>

import { computed, defineProps } from 'vue';

const n = 3;

const props = defineProps({
    data: {
        type: Array,
        required: true
    }
});

const data = props.data;

const articles = computed(() => {
    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    return data.slice(0, n);});

console.log("Articles Component :" + data);
</script>