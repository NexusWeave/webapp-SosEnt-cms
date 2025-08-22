<template>
    <template v-if ="!!inputIcon">
        <span :class="cls[0]">
            <i :class="[cls[cls.length - 1], 'relative']" :aria-label="data.label"></i> 
            <label :for="data.id">{{ data.label }}</label>
        </span>
    </template>
    
    <template v-else>
        <span :class="cls[0]">
            <i :class="cls[cls.length - 1]" aria-label="icon"></i>
            {{ label }}
        </span>
    </template>

</template>

<script setup>
    import { computed, defineProps } from 'vue';

    const props = defineProps(
        {
            data:
            {
                type: Object,
                required: true,
            },
            label:
            {
                type: String,
                required: false
            },
            cls:
            {
                type: Array,
                required: true
            }
        });

    const label = props.label;
    const cls = computed(() => {
        props.cls.push('icon');
        return !!props.cls ? props.cls : [];
    });
    const inputIcon = computed(() => {
        if (!!props.data) return true;
        return false;
    });
</script>