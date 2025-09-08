<template>
    <template v-if="!!inputControls.includes(data.type)">
        <Label
            :id="data.id"
            :label="label" 
            :cls="[data.type]" 
            :isIcon="!!data.label.icon"/>
        <input
            :id="data.id"
            :class="cls[1]"
            :name="data.name"
            :value="data.value"
            :type="data.type ? data.type : 'text'"
            :size="!!data.size ? data.size : '30'"
            :width="!!data.width ? data.width : ''"
            :height="!!data.height ? data.height : ''"
            :minlength="data.minlength"
            :autocomplete="!!data.autocomplete ? 'on':'off'"
            :readonly="!!data.readonly ? data.readonly : false"
            :required="!!data.required ? data.required : false"
            :disabled="!!data.disabled ? data.disabled : false"
            :autofocus="!!data.autofocus ? data.autofocus : false"
            :placeholder="!!data.placeholder ? data.placeholder : ''"
            :multiple="!!data.multiple && data.type == 'file' ? data.multiple : false"
            @input="handleInput"
        />
    </template>
    <template v-if="!!booleanControls.includes(data.type)">
        
        <input
            :id="data.id"
            :class="cls[1]"
            :name="data.name"
            :type="data.type ?? data.type"
            :required="!!data.required ? data.required : false"
            :disabled="!!data.disabled ? data.disabled : false"
            :autofocus="!!data.autofocus ? data.autofocus : false"
            @input="handleInput"
        />
        <Label v-if="!!data.id" :for="data.id" 
        :label="data.label"/>
    </template>

</template>
<script setup>

    import { defineEmits, defineProps, reactive } from 'vue';

    import Label from './Label.vue';

    const props = defineProps({
        data: {
            type: Object,
            required: true
        },
        cls: {
            type: Array,
            required: false,
        },
        modelValue: {
            type: [String, Number, Boolean],
            required: false
        }
    });
    const cls = props.cls;
    const data = props.data;
    const label = data.label?.label ?? data.label
    const emit = defineEmits(['inputs']);

    const handleInput = (event) => {
        const input = reactive(data);
        input.value = event.target.value;
        emit('inputs', input);
    };
    const booleanControls = ['checkbox', 'radio'];
    const utilityControls = ['hidden', 'range', 'color'];
    const btnControls = ['submit', 'reset', 'button', 'file'];
    const datetimeControls = ['date', 'datetime-local', 'time', 'week', 'month'];
    const inputControls = ['text', 'password', 'email', 'number', 'tel', 'url', 'search'];
    //console.warn("Inputs.vue : ", inputControls.value);
</script>