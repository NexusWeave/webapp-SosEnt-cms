<template>
    <Menu :data="data" />
</template>

<script setup>

import { defineProps, reactive } from 'vue';
import Menu from '@/components/navigation/NavMenu.vue';

const props = defineProps({
    data:
    {
        type: Object,
        required: true
    }
});

const data = reactive(props.data);

console.log("FooterView loaded with data: ", data);
</script>