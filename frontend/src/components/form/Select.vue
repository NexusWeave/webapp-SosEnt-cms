<template>
    <Label v-if="!!data.id" :for="data.id" 
    :data="data.label" :cls="cls" />
    <select v-model="formData.selectedOption" 
        :multiple="selection.multiple ? selection.multiple : false">
        <option v-for="option in data.selectOptions" :key="option.id" :value="option.value">
            {{ option.label }}
        </option>
    </select>
</template>
<script setup>
</script>