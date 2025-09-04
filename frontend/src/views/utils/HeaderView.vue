<template>
    <div :class="cls[0]">
        <Menu :data="logo" :cls="['logo-container', 'img-list', 'img-item', 'img-container']"/>
        <Menu :data="menu" :cls="[['nav-bar', 'flex-wrap-row-justify-space-between'],
                ['nav-list', 'flex-row-align-items-center'],
                ['nav-item'],
                ['anchor-item']]"/>
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