<template>
    <a
        :href="data.href"
        class=""
        :target="isExternal ? '_blank': '_self'"
        :rel="isExternal ? 'noopener noreferrer' : null" 
        :download="media.files.find(type => type === data.type) ? 'SosEnT_'+ data.name.replace(/\s+/g, '_').toLowerCase() + '.' + data.type : null"
        >

         <template v-if="img && media.images.find(type => type === img.type)">
            <Img :data="img"/>
        </template>

        <template v-if="media.files.find(type => type === data.type)">
            <h3 :class="data.type">
                <span class="icon" :aria-label="data.name"></span> 
                {{ data.name }}
            </h3>
        </template>

        <template v-else>
            {{ data.name }}
        </template>
    </a>

</template>

<script setup>

    import Img from '@/components/media/Figure.vue';
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