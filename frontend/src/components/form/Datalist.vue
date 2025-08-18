<template>
    <label :for="data.dataList.name">{{ data.dataList.label }}</label>
    <datalist :id="data.dataList.list">
        <option v-for="option in data.dataList.options" :key="option.id" :value="option.value">
            {{ option.label }}
        </option>
    </datalist>
</template>
<script setup>
</script>
