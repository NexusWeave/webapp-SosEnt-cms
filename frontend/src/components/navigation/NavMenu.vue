<template>
    <nav :class="cls[0]">

        <template v-if ="type.isRouterLink">
            <RouterLink v-for="(link, i) in data" :key="i"
                :to="link.href" >
                {{ link.label }}
            </RouterLink>
        </template>

        <template v-else-if="type.isAnchor">
            <Anchor v-for="(link, i) in data" :key="i"
                :data="link"
                :cls="cls"/>
        </template>
    </nav>
</template>

<script setup>
    import Anchor from './Anchor.vue';

    import { RouterLink } from 'vue-router';
    import { defineProps, computed } from 'vue';

    const props = defineProps({
        data: {
        type: Array,
        required: true
        },
        cls: {
            type: Array,
            required: false,
        }
    });
    
    const type = {
        isAnchor: computed(() => 
        {
            data.forEach(link => {
                return link.type[0] == 'anchor' ?? false;
            });
        }),
        isRouterLink: computed(() => {
            data.forEach(link => {
                return link.type[0] == 'router' ?? false;
            });
        }),
    };
    
    const cls = props.cls;
    const data = props.data;



    // console.log("NavigationMenu loaded with data: ", data.menu);
</script>