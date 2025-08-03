<template>
    <div :class="cls[0]">
        <Menu :data="logo" :cls="['logo-container', 'nav-list', 'nav-item']"/>
        <Menu :data="menu"/>
    </div>
    <section :class="cls[3]">
        <h1>{{ content.title }}</h1>
        <p>{{ content.text }}</p>
    </section>
</template>

<script setup>
    import { reactive, defineProps } from 'vue';
    import Menu from '@/components/navigation/NavMenu.vue';
    
    const props = defineProps({
        data: {
            type: Object,
            required: true
        },
        cls: {
            type: Array,
            required: false,
        }
    });

    const cls = props.cls;
    const data = props.data;
    const content = data.content;
    const menu = props.data.menu;
    const logo = props.data.logo;
    //console.log("HeaderView loaded with data: ", content, logo);
</script>