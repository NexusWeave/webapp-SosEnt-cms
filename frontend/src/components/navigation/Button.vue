<template>

    
    <button v-for="(item, i) in data"
        :type="btn ? btn.type : 'button'" 
        :key="i"
        :class="item.cls" >
            <Anchor :data="item" />
        
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
const btn = data.btn || null;

console.log("Button component loaded with data: ", data);

</script>