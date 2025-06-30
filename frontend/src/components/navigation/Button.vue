<template>

    <button v-for="(item, i) in nav"
        :type="button && 'submit' || 'button'" 
        :key="i"
        :href="item.to"
        :class="item.cls" >{{ item.title }}</button>

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
const button = data.type === 'button' || false;

//console.log("Button component loaded with data: ", data, isExternal);

</script>