<template>
    <table :class="data.cls">
        <thead v-for="cell in data.head" :key="cell.id" :class="cell.cls" v-if="data.head">
            <tr>
                <th>{{ cell.title }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ data.head.title }}</td>
                <td v-if="data.anchor">
                    <Link :data="data.anchor" />
                </td>
                <td v-if="data.date">
                    <time :datetime="data.date.updated? data.date.updated : data.date.published">{{ data.date.updated? data.date.updated : data.date.published }}</time>
                </td>
                <td v-if="data.tags" >
                    <span v-for="tag in data.tags" :key="tag.id" :class="tag.cls[1]">
                        {{ tag.title }}
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>

    import { defineProps } from 'vue';

    import Link from '@/components/navigation/Anchor.vue';

    const props = defineProps({
        data: {
            type: Object,
            required: true
        },
    });

    const data = props.data;
    console.log("Table Component loaded with data: ", data);
</script>