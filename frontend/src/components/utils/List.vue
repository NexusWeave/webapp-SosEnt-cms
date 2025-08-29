<template>
    <template v-if="!!data.members">
        <ul :class ="[cls[0],'flex-wrap-row-align-content-start-justify-space-evenly']">
            <li v-for="member in data.members" :key="member.id"
            :class="[cls[1]]">
                <Anchor v-if="!!member.anchor" :data="member.anchor"/>
                <span v-if="!member.anchor">{{ member.label }}</span>
                <p>
                    
                    <span v-if="member.description">{{ member.description }}</span>
                </p>
            </li>
        </ul>
    </template>

    <template v-else>
        <h4 v-if="data.title">{{ data.title }}</h4>
        <ul>
            <li v-for="(bullet, i) in data.list" :key="i">
                <p>
                    <Anchor v-if="bullet.anchor" :data="bullet.anchor"/>
                    <span v-else>{{ bullet.bullet }}</span>
                </p>
            </li>
        </ul>
    </template>
</template>
<script setup>
    import { computed, defineProps } from 'vue';

    import Anchor from '@/components/navigation/Anchor.vue';

    const props = defineProps({
        data: {
            type: Array,
            required: true
        },
        cls: {
            type: Array,
            required: false,
            default: () => ['card-container', 'card-item']
        }
    });

    const data = props.data;
    const cls = props.cls ?? [];
    const list = computed(() => {
        return !!data.list ? data.list : [];
    });
    //console.warn('List Component loaded with data: ', data);
</script>