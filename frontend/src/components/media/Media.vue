<template>
    <section :class="[cls[0], cls[1]]" :data-filetype="media.type">
        <section v-for="media in media" :key="media.id"
            :class="cls[2]">
            <Anchor :data="media.anchor"
                :Cls="[media.type, 'title-h4']" />
            <p>
                <Date :data="media.date" :Cls="['meta-date', 'calendar']" />
                <span>
                    {{ media.description }}
                </span>
            </p>
        </section>
    </section>
</template>
<script setup>

    import { computed, defineProps } from 'vue';
    import Date from '@/components/utils/Span.vue';
    import Anchor from '@/components/navigation/Anchor.vue';

    const props = defineProps({
        data: {
            type: Object,
            required: true
        },
            cls: {
                type: Array,
                required: false
            },
            filter: {
                type: String,
                required: true,
            },
        });

    const data = props.data;
    const cls = props.cls ?? null;

    const media = computed(() => 
    {
        return data.mediaFilter(props.filter);
    });

    console.warn('Media - Media Data:', data);
</script>