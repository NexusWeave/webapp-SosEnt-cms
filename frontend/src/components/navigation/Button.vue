<template>
    <button 
        :class="btn.cls"    
        :type="btn ? btn.type : 'button'"
        @click="btn.action ? btn.action : null"     
        :disabled="btn ? btn.disabled : false">
        <template v-if="btn.anchor">
            <Anchor :data="btn.anchor" v-if="btn.anchor"/>
        </template>

        <template v-else>
            {{ btn.text }}
        </template>    
            
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