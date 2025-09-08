<template>
    <template v-if="isIcon">
        <Icon :cls="cls" :isInput="isIcon"/>
    </template>
    <label :for="id">{{ label }}</label>

</template>
<script setup>
    import { defineProps } from 'vue';

    import Icon from '../media/Icon.vue';

    const props = defineProps({
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: false
        },
        cls: {
            type: Array,
            required: false
        },
        isIcon: {
            type: Boolean,
            default: false,
            required: false
        }
    });

    const cls = props.cls;
    const data = props.data;
    const label = props.label ?? data?.label?.label ?? '';

    //console.log("Label.vue : ", props.label);
</script>