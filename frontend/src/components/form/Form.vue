<template>
    <form
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
        <legend :class="cls[1]">
            <h2>{{ data.title }}</h2>
        </legend>

        <section :class="cls[2]">
            <Inputs v-for="input in data.inputs" :key="input.id"
                :data="input" 
                v-model:[input.type]="input.value"
                :cls="!!input.cls ? input.cls : []"
            />
        </section>

        <section v-if="!!data.selections">
            <Select v-for="selection in data.selections" :key="selection.id"
                v-model:[selection.type]="selection.value"
                :cls="!!selection.cls ? selection.cls : []" 
                />
        </section>
        <section v-if="!!data.textarea">
            <Textarea v-for="area in data.textarea" :key="area.id"
            v-model="formData[area.name]" 
            :data="area" 
            />
        </section>
        <section v-if="!!data.dataList">
            <DataList v-for="list in data.dataList" :key="list.id"
                v-model:[list.type]="list.value"
                :data="list" 
                :cls="!!list.cls ? list.cls : []" />

        </section>
        <section v-if="!!data.outputs">
            <Outputs v-for="output in data.outputs" :key="output.id"
                v-model:[output.type]="output.value"
                :data="output"
                :cls="!!output.cls ? output.cls : []" />
        </section>

        <section v-if="!!data.btn" class="flex-row-justify-space-evenly">
            <Button v-for="btn in data.btn" :key="btn.id"
            :data="btn"
            :cls="btn.cls" />
        </section>
    </form>
</template>
<script setup>

    import { defineProps, defineEmits } from 'vue';
    
    import Inputs from './inputs.vue';
    import Select from './Select.vue';
    import Button from '@/components/navigation/Button.vue';
    

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

    const cls = props.cls;
    const data = props.data;
    const emits = defineEmits(['toggleVisibility']);

    emits('toggleVisibility', data);



    console.warn(data);
</script>