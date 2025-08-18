<template>
    <label>{{ data }}</label>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
});
const data = props.data;

</script>