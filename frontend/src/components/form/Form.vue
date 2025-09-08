<template>
    <form @submit.prevent="handleInput"
        :class="cls[0]"
        method="post"     
        :name="data.name"
        :action="data.action"
        :rel="!!data.rel? data.rel : 'noopener'"
        :target="!!data.target? data.target : '_self'"
        :novalidate="!!data.novalidate? data.novalidate : false"
        v-on:encrypted="!!data.encrypted? data.encrypted : false"
        :autocomplete="!!data.autocomplete? data.autocomplete : 'off'"
        :acceptcharset="!!data.acceptcharset? data.acceptcharset : 'UTF-8'">
        
        <legend>
            <h3 :class="cls[1]">
            {{ data.title }}</h3>
        </legend>

        <section v-if="!!data.inputControl" :class="cls[2]">
            <Inputs v-for="input in data.inputControl" :key="input.id"
                :data="input" 
                v-model:[input.type]="input.value"
                :cls="!!input.cls ? input.cls : []"
            />
        </section>

        <section v-if="!!data.booleanControl" class="flex-wrap-row">
            <Inputs v-for="input in data.booleanControl" :key="input.id"
                :data="input" 
                v-model:[input.type]="input.value"
                :cls="!!input.cls ? input.cls : []"
            />
        </section>


        <section v-if="!!data.selectionControl" :class="cls[3]">
            <Select v-for="selection in data.selections" :key="selection.id"
                v-model:[selection.type]="selection.value"
                :cls="!!selection.cls ? selection.cls : []" 
                />
        </section>

        <section v-if="!!data.textarea" :class="cls[4]">
            <Textarea v-for="area in data.textarea" :key="area.id"
            v-model="formData[area.name]" 
            :data="area" 
            />
        </section>

        <section v-if="!!data.dataList" :class="cls[5]">
            <DataList v-for="list in data.dataList" :key="list.id"
                v-model:[list.type]="list.value"
                :data="list" 
                :cls="!!list.cls ? list.cls : []" />

        </section>

        <section v-if="!!data.outputs" :class="cls[6]">
            <Outputs v-for="output in data.outputs" :key="output.id"
                v-model:[output.type]="output.value"
                :data="output"
                :cls="!!output.cls ? output.cls : []" />
        </section>

        <section v-if="!!data.btn" class="flex-row-justify-space-evenly">
            <Btn v-for="btn in data.btn" :key="btn.id"
            :data="btn"
            :cls="['btn', 'orange-btn']"/>

        </section>
    </form>
</template>
<script setup>

    import { defineProps, defineEmits } from 'vue';

    
    import Inputs from './inputs.vue';
    import Select from './Select.vue';
    import Outputs from './Outputs.vue';
    import Icon from '../media/Icon.vue';
    import Textarea from './Textarea.vue';
    import Datalist from './Datalist.vue';
    import Btn from '../navigation/Button.vue';

    const props = defineProps({
        data: {
            type: Object,
            required: true
        },
        cls: {
            type: Array,
            required: false,
            default: () => [['form-container', 'flex-column'], 'title-h3', ['input-group', 'flex-wrap-row']]
        }
    });

    const cls = props.cls;
    const data = props.data;
    const emits = defineEmits(['formModel', 'formData']);

    emits('formModel', data);

    const handleInput = (event) => {
        event.preventDefault();

        // Collect actual form values
        const form = event.target;
        const formData = new FormData(form);
        const values = {};
        for (const [key, value] of formData.entries()) {
            values[key] = value;
        }
        emits('formData', values);
    };

    //console.warn(data.inputs);
</script>