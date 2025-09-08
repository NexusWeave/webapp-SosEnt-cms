<template>
    <Label v-if="!!data.id" :for="data.id" 
    :data="data.label" :cls="cls" />
    <datalist :id="data.dataList.list">
        <option v-for="option in data.dataList.options" :key="option.id" :value="option.value">
            {{ option.label }}
        </option>
    </datalist>
</template>
<script setup>
</script>
