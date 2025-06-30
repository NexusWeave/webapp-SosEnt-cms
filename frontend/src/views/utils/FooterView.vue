<template>
    <Menu :data="footerData" />
</template>

<script setup>

import { defineProps, reactive } from 'vue';
import Menu from '@/components/navigation/NavMenu.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const data = reactive(props.data);

const footerData = {
    type:'link',
    menu: 
    [
        {
            id: 0,
            type: 'link',
            title : "Personvern",
            cls: "link nav-item",
            href: "https://docs.google.com/document/d/1AkTTNQei6pJWvRYc_VT93Rspk3MTJn_ai_TsHqXi88U/edit?usp=sharing",
        },
        {
            id: 1,
            cls: "nav-item",
            type: 'external',
            title: "NO 935 329 930",
            href: "https://www.proff.no/selskap/sosent-norge/oslo/medlemsorganisasjoner/IFGVD6Y10PU"
        },
    ],
};
</script>