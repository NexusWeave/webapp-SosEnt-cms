<template >
    <template v-if="!!isFigure">
        <figure :class="cls[0]">
            <img :src="data.src" :alt="data.alt" :class="cls[1]">
            <figcaption v-if="!!data.caption">{{ data.caption }}</figcaption>
        </figure>

    </template>
    <template v-else>
        <picture>
            <source :srcset="data.src" type="image/webp">
            <img :src="data.src" :alt="data.alt" :class="cls[1]">
        </picture>
    </template>

</template>

<script setup>
    import { defineProps, computed } from 'vue';
    const props = defineProps({
        data: {
            type: Object,
            required: true
        },
        cls: {
            type: Array,
            required: false
        }
    });

    
    const data = props.data;
    const isFigure = computed(() => {
        return !!data.caption;
    });
    const cls = props.cls ? props.cls : data.cls ?? [];
    console.log('Figure data:', data, cls);
</script>