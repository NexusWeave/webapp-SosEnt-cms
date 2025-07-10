<template>
    <img :src="data.src" :alt="data.alt" :class="data.cls">
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
</script>