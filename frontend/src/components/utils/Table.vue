<template>
    <table :class="data.cls">
        <thead v-for="row in data.rows">
            <tr>
                <th>{{ row.title }}</th>
            </tr>
        </thead>
        <tbody>
            <tr>

                <td v-if="data.anchor">
                    <Link :data="data.anchor" />
                </td>

                <td v-if="data.date">
                    <time :datetime="data.date">{{ data.date }}</time>
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