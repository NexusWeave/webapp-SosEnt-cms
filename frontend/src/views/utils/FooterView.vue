<template>
    <section :class="cls[0]">
        <section></section>
        <section>
        <p>{{ data.copyRight }}</p>
        </section>
        <section> 
            <Menu :data="menu" :cls="[['nav-bar', 'flex-wrap-row-justify-flex-end'],
                ['nav-list'],
                ['nav-item'],
                ['anchor-item']]"/>
            <p>Besøksadresse: Haakon VIIs gate 9. 0161 Oslo</p>
            <p>Postadresse: co/ Samfunnsbedriftene, postboks 1378 Vika,0114 Oslo</p>
        </section>
    </section>
    
    
</template>

<script setup>

    import { defineProps } from 'vue';
    import Menu from '@/components/navigation/NavMenu.vue';

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