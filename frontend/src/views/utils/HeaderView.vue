<template>
    <div :class="data.cls[0] + ' ' + data.cls[1]">
        <div :class="data.cls[2]">
            <div :class="data.anchor.cls">
                <Anchor :data="data.anchor" />
            </div>
            <Menu :data='data.nav' />
        </div>
    </div>
    <section :class="data.content.cls">
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
    }
    });

    const data = reactive(props.data);
    const content = reactive(data.content);
    
    //console.log("HeaderView loaded with data: ", content, logo);
</script>