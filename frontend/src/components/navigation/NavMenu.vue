<template>

    <nav :class="data.cls">
        <RouterLink v-if ="data.type=== 'router'" v-for="(link, i) in nav"
            :key="i"
            :to="link.href"
            :class="link.cls" >{{ link.name }}</RouterLink>

        <Link v-if="data.type === 'link'" :data="link" v-for="link in data.menu"/>
    </nav>
</template>

<script setup>
    import Link from './Anchor.vue';

    import { RouterLink } from 'vue-router';
    import { defineProps, reactive } from 'vue';

    const props = defineProps({
        data: {
        type: Object,
        required: true
        }
    });

    const data = reactive(props.data);
    const nav = data.menu;

    console.log("NavigationMenu loaded with data: ", data.menu);
</script>