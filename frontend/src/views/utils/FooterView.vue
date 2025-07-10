<template>
    <section :class="data.section.cls">
        <section></section>
        <section>
            {{ data.section.text }}
        </section>
        <section>
            <Menu :data="data" />
        </section>
    </section>
    
    
</template>

<script setup>

    import { defineProps, reactive } from 'vue';
    import Menu from '@/components/navigation/NavMenu.vue';

    const props = defineProps({
        data:
        {
            type: Object,
            required: true
        }
    });

    const data = reactive(props.data);

    //console.log("FooterView loaded with data: ", data);
</script>