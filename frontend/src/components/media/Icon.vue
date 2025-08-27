<template>
    
        <span :class="cls[0]">
            
            <template v-if ="!!isInput">
                <i :class="[cls[cls.length - 1], 'relative']"  :aria-label="cls[0] + ' ' + cls[1]"></i>
            </template>
            <template v-else>
                <i :class="[cls[cls.length - 1]]" :aria-label="cls[0] + ' ' + cls[1]"></i>
            </template>
            {{ label }}
            
        </span>
    


</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps(
        {
            label:
            {
                type: String,
                required: false
            },
            cls:
            {
                type: Array,
                required: true
            },
            isInput:
            {
                type: Boolean,
                default: false,
                required: false,

            }
        });

    const label = props.label ?? '';
    const cls = !!props.cls ? props.cls : [];
    cls.push('icon');

</script>