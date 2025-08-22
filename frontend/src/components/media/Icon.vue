<template>
    <template v-if ="!!label">
        <span :class="cls[0]">
        <i :class="cls[cls.length - 1]" :aria-label="label"></i> 
            {{ label }}
        </span>
    </template>
    <template v-else>
        <span :class="cls[0]">
            <i :class="cls[cls.length - 1]" aria-label="icon"></i> 
        </span>
    </template>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    label: {
        type: String,
        required: false
    },
    cls: {
        type: Array,
        required: true
    }
});
</script>