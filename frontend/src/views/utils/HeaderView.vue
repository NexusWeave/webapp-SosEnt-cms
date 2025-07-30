<template>
    <div :class="cls[0]">
        <div :class="cls[1]">
            <Anchor :data="data.anchor" />
            <Menu :data='menu' :cls="[cls[2]]"/>
        </div>
    </div>
    <section :class="cls[3]">
        <h1>{{ content.title }}</h1>
        <p>{{ content.text }}</p>
    </section>
</template>

<script setup>
    import { reactive, defineProps } from 'vue';
    import Menu from '@/components/navigation/NavMenu.vue';
    import Anchor from '@/components/navigation/Anchor.vue';
    
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
    const menu = props.data.nav.menu;
    //console.log("HeaderView loaded with data: ", content, logo);
</script>