<template>
    <div :class="data.cls[0] + ' ' + data.cls[1]">
        <div :class="data.cls[2]">
            <div :class="data.media.cls">
                <img :class="logo.cls" :alt="logo.alt" :src="logo.src" />
            </div>
            <Menu :data='data.nav' />
        </div>
    </div>
    <section :class="data.content.cls">
        <h1>{{ content.title }}</h1>
        <p>{{ content.text }}</p>
        <nav>
            <button class="btn btn-primary" @click="$router.push('/medlemskap')">Bli medlem</button>
        </nav>
    </section>
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