<template>
    <template v-if="isIcon">
        <Icon :data="data" :cls="cls" />
    </template>
    <template v-else>
        <label>{{ label }}</label>
    </template>
</template>
<script setup>
    import { defineProps } from 'vue';

    import Icon from '../media/Icon.vue';

    const props = defineProps({
        data: {
            type: Object,
            required: true
        },
        label: {
            type: String,
            required: false
        },
        cls: {
            type: Array,
            required: false
        }
    });

    const cls = props.cls;
    const data = props.data;
    const isIcon = !!data;
    console.log("Label.vue : ", props.label);
    const label = props.label;

</script>