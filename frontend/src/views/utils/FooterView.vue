<template>
    <section :class="cls[0]">
        <section></section>
        <section>
        <p>{{ data.copyRight }}</p>
        </section>
        <section> 
            <NavMenu :data="menu"/>
        </section>
    </section>
    
    
</template>

<script setup>

    import { defineProps } from 'vue';
    import NavMenu from '@/components/navigation/NavMenu.vue';

    const props = defineProps({
        data:
        {
            type: Object,
            required: true
        },
        cls:
        {
            type: [String, Array],
            required: true,
        },
        menu: {
            type: Array,
            required: true,
        }
    });

    const cls = props.cls;
    const data = props.data;
    const menu = props.menu;

    //console.log("FooterView loaded with data: ", data);
</script>