<template>
    <a
        :href="data.href"
        :class="data.cls"
        :target="isExternal ? '_blank': '_self'"
        :rel="isExternal  && 'noopener noreferrer'"
        :download="media.contactData.find(type => type === data.type) ? '' : false"
        >

         <template v-if="img && media.images.find(type => type === img.type)">
            <img :src="img.src" :alt="img.alt" :class="img.cls">
        </template>

        <template v-if="media.files.find(type => type === data.type)">
            <h2>
                <i :class="data.icon" :aria-label="data.name"></i> 
                {{ data.name }}
            </h2>
        </template>

        <template v-else>
            {{ data.name }}
        </template>
        </a>

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