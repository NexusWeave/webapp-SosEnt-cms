<template>
    <template v-if ="!!isInput">
        <span :class="cls[0]">
            <span :class="[cls[cls.length - 1], 'relative']"  :aria-label="cls[0] + ' ' + cls[1]"></span>
        </span>
    </template>
    <template v-else>
        <span :class="[cls[cls.length - 1]]" :aria-label="cls[0]"></span>
    </template>
    {{ label }}
</template>

<script setup>

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