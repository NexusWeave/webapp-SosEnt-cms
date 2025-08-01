<template>
    <template v-if="hasMembers">
        <table>
            <tbody>
                <tr v-for="member in members.slice(0, 8)" :key="member.id">
                    <td v-if="member.anchor">
                        <Anchor :data="member.anchor"/>
                    </td>
                    <td v-else>
                    {{ member.label }}
                    </td>
                    <td v-if="member.description">
                        {{ member.description }}
                    </td>
                </tr>
            </tbody>
        </table>
    </template>

</template>

<script setup>
    import { computed, defineProps } from 'vue';

    import Anchor from '@/components/navigation/Anchor.vue';

    const props = defineProps({
        data: {
            type: [Object, Array],
            required: true
        },
        cls: {
            type: Array,
            required: false
        }
    });

    const data = props.data;
    const cls = props.cls ?? [];

    const hasMembers = computed(() =>
    {
        return !!data.isMembers && data.members.length > 0;
    });
    const members = computed(() => {
        return !!hasMembers.value ? data.members : [];
    });
    
    </script>