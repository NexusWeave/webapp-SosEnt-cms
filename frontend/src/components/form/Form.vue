<template>
    <form 
        method="post"     
        :name="data.name"
        :action="data.action"
        :rel="!!data.rel? data.rel : 'noopener'"
        :target="!!data.target? data.target : '_self'"
        :novalidate="!!data.novalidate? data.novalidate : false"
        v-on:encrypted="!!data.encrypted? data.encrypted : false"
        :autocomplete="!!data.autocomplete? data.autocomplete : 'off'"
        :acceptcharset="!!data.acceptcharset? data.acceptcharset : 'UTF-8'">
        <legend class="section-title">
            <h1>{{ data.title }}</h1>
        </legend>

        <section class="flex-column">
            <Inputs v-for="field in data.fields" :key="field.id"
            :data="field" :cls="!!field.cls ? field.cls : []"/>

        </section>
        <section v-if="!!data.selections" v-for="selection in data.selections" :key="selection.id">
            <label :for="selection.label">{{ selection.label }}</label>
            <select v-model="formData.selectedOption" 
                    :multiple="selection.multiple ? selection.multiple : false">
                <option v-for="option in data.selectOptions" :key="option.id" :value="option.value">
                    {{ option.label }}
                </option>
            </select>
        </section>
        <section v-if="!!data.textarea">
            <label :for="data.textarea.name">{{ data.textarea.label }}</label>
            <textarea 
                :id="data.textarea.id"
                v-model="formData[data.textarea.name]"
                :placeholder="data.textarea.placeholder"
                :rows="data.textarea.rows ? data.textarea.rows : 4"
                :cols="data.textarea.cols ? data.textarea.cols : 50"
                :maxlength="data.textarea.maxlength ? data.textarea.maxlength : ''"
                :required="data.textarea.required ? data.textarea.required : false">
            </textarea>
        </section>
        <section v-if="!!data.dataList">
            <label :for="data.dataList.name">{{ data.dataList.label }}</label>
            <input 
                :id="data.dataList.id"
                v-model="formData[data.dataList.name]"
                :list="data.dataList.list"
                :placeholder="data.dataList.placeholder"
                :required="data.dataList.required ? data.dataList.required : false" />
            <datalist :id="data.dataList.list">
                <option v-for="option in data.dataList.options" :key="option.id" :value="option.value">
                    {{ option.label }}
                </option>
            </datalist>
        </section>
        <section v-if="!!data.outputs">
            <label :for="data.outputs.name">{{ data.outputs.label }}</label>
            <output 
                :id="data.outputs.id"
                :for="data.outputs.for"
                :v-model="formData[data.outputs.name]">
            </output>
        </section>
        <section v-if="!!data.btn" class="flex-row-justify-space-evenly">
            <Button v-for="btn in data.btn" :key="btn.id"
            :data="btn"
            :cls="btn.cls" />
        </section>
    </form>
</template>
<script setup>

    import { defineProps } from 'vue';
    
    import Inputs from './inputs.vue';
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

    console.warn(data);
</script>