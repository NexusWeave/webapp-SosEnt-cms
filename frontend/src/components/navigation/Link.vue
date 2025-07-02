<template>
    <a v-if="img && media.images.find(type => type === img.type)"
        :href="data.href"
        :target="isExternal ? '_blank': '_self'"
        :rel="isExternal  && 'noopener noreferrer'">

        <img :src="img.src" :alt="img.alt" :class="img.cls">
    </a>
    
    <a v-if ="media.files.find(type => type === data.type)" 
        :href="data.href" :class="data.cls" download>
        {{ data.name }}
    </a>
    
    <a v-if ="media.contactData.find(type => type === data.type)" 
        :href="data.href" :class="data.cls">
        {{ data.name }}
    </a>

    <a v-else
        :href="data.href"
        :class="data.cls"
        :target="isExternal ? '_blank': '_self'"
        :rel="isExternal  && 'noopener noreferrer'">
        {{ data.title }}</a>

</template>

<script setup>

import { defineProps } from 'vue';
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

const media = 
{
    contactData: ['email', 'telephone'],
    images: ['jpg', 'jpeg', 'png', 'svg'],
    files: ['pdf', 'docx', 'xlsx', 'csv'],
}
const data = props.data;
const img = data.img? data.img : null;
const isExternal = data.type === 'external' || false;

//console.log("Link component loaded with data: ", data, isExternal);

</script>