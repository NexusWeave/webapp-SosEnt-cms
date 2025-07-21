<template>
    <figure :class="data.cls[0]">
        <img :src="data.src" :alt="data.alt" :class="data.cls[1]">
        <figcaption v-if="data.caption">{{ data.caption }}</figcaption>
    </figure>
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
console.log('Figure data:', data);
</script>