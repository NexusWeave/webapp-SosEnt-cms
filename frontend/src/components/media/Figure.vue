<template>
    <figure :class="data.cls">
        <img :src="data.src" :alt="data.alt" :class="data.cls">
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
</script>