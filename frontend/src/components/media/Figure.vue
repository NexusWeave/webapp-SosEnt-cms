<template>
    <figure :class="cls[0]">
        <img :src="data.src" :alt="data.alt" :class="cls[1]">
        <figcaption v-if="!!data.caption">{{ data.caption }}</figcaption>
    </figure>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        data: {
            type: Object,
            required: true
        },
        cls: {
            type: Array,
            required: false
        }
    });

    const data = props.data;
    const cls = props.cls ? props.cls : data.cls ?? [];
    //console.log('Figure data:', data);
</script>