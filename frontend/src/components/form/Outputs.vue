<template>
    <Label v-if="!!data.id" :for="data.id" 
    :data="data.label" :cls="cls" />
    <output :id="data.outputs.id" :for="data.outputs.for"
        :v-model="formData[data.outputs.name]">
    </output>
</template>
<script setup>
</script>