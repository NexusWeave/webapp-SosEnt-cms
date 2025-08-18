<template>
    <label :for="selection.label">{{ selection.label }}</label>
    <select v-model="formData.selectedOption" 
        :multiple="selection.multiple ? selection.multiple : false">
        <option v-for="option in data.selectOptions" :key="option.id" :value="option.value">
            {{ option.label }}
        </option>
    </select>
</template>
<script setup>
</script>