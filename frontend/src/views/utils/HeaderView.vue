<template>
    <div :class="data.cls">
        <div :class="data.media.cls">
            <img :class="logo.cls" :alt="logo.alt" :src="logo.src" />
        </div>
        <div :class="data.content.cls">
            <h1>{{ content.title }}</h1>
        </div>
        <div></div>
    </div>
    <Menu :data='data.nav' />
</template>

<script setup>
    import { reactive, defineProps } from 'vue';

    import Menu from '@/components/navigation/NavMenu.vue';

    const props = defineProps({
    data: {
        type: Object,
        required: true
    }
    });

    const data = reactive(props.data);
    const content = reactive(data.content);
    const logo = reactive(data.media.images[0]);
    
    //console.log("HeaderView loaded with data: ", content, logo);
</script>