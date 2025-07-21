<template>
    <button :type="btn ? btn.type : 'button'" :class="data.cls" v-if="data.href">
        <Anchor :data="data" />
        
    </button>
</template>

<script setup>

import { defineProps } from 'vue';

import Anchor from '@/components/navigation/Anchor.vue';

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
});

const data = props.data;
const btn = data || null;

console.log("Button component loaded with data: ", data);

</script>