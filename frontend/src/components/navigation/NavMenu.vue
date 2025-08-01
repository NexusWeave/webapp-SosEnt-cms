<template>
    <nav :class="cls[0]">

        <template v-if="!!isRouterLink">
            <RouterLink v-for="(link, i) in data" :key="i"
                :to="link.href" >
                {{ link.label }}
            </RouterLink>
        </template>

        <template v-else-if="!!isAnchor">
            <Anchor v-for=" link in data" :key="link.id"
                :data="link.anchor"
                :cls="cls[cls.length-1]"/>
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
        },
        type: {
            type: String,
            required: true,
            default: () => ({
                isAnchor: false,
                isRouterLink: false
            })
        }
    });
    const isAnchor = computed(() => {
        const anchor = 'anchor'
        return !!props.type && props.type === anchor;
    });
    const isRouterLink = computed(() => {
        const routerLink = 'router-link'
        return !!props.type && props.type === routerLink;
    });
    
    const cls = props.cls;
    const data = props.data;



    // console.log("NavigationMenu loaded with data: ", data.menu);
</script>