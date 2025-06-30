<template>
    <a
        :href="data.href"
        :class="data.cls"
        :target="isExternal ? '_blank': '_self'"
        :rel="isExternal  && 'noopener noreferrer'">
        {{ data.title }}</a>

</template>

<script setup>

import { defineProps } from 'vue';
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

const data = props.data;
const isExternal = data.type === 'external' || false;

//console.log("Link component loaded with data: ", data, isExternal);

</script>