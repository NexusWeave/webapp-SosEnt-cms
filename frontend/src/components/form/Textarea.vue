<template>
    <Label v-if="!!data.id" :for="data.id" 
    :data="data.label" :cls="cls" />
    <textarea 
        :id="data.textarea.id"
        v-model="formData[data.textarea.name]"
        :placeholder="data.textarea.placeholder"
        :rows="data.textarea.rows ? data.textarea.rows : 4"
        :cols="data.textarea.cols ? data.textarea.cols : 50"
        :maxlength="data.textarea.maxlength ? data.textarea.maxlength : ''"
        :required="data.textarea.required ? data.textarea.required : false">
    </textarea>
</template>
<script setup>
</script>