<template>
    <div :class="data.cls[0] + ' ' + data.cls[1]">
        <div :class="data.cls[2]">
            <div :class="data.media.cls">
                <img :class="logo.cls" :alt="logo.alt" :src="logo.src" />
            </div>
            <div :class="data.content.cls">
                <h1>{{ content.title }}</h1>
            </div>
        </div>
        <Menu :data='data.nav' />
    </div>
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