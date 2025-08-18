<template>
    <label :for="data.outputs.name">{{ data.outputs.label }}</label>
    <output :id="data.outputs.id" :for="data.outputs.for"
        :v-model="formData[data.outputs.name]">
    </output>
</template>
<script setup>
</script>