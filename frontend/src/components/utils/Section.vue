
<template>
    <template v-if="media.isMedia">
        <section :data-filetype="media.type"
            :class="media.cls[0]">
            <Anchor :data="media.anchor" :Cls="[media.cls[1], media.cls[2]]"/>

            <section :class="media.cls[3]">
                <Date :data="media.date" :Cls="[media.cls[4], media.cls[5]]" />
                <span>
                    {{ media.description }}
                </span>
            </section>
        </section>
    </template>

</template>
<script setup>

    import { defineProps, ref } from 'vue';
    import Figure from '@/components/media/Figure.vue';
    import Date from '@/components/utils/Span.vue';
    import Anchor from '@/components/navigation/Anchor.vue';

    const props = defineProps({
        data: {
            type: Object,
            required: false
        },
        cls: {
            type: Array,
            required: false
        }
    });
    const data = props.data;

    const cls = props.cls ? props.cls : data.cls ? data.cls : null;
    const mediaData = {
        files: ['pdf', 'docx', 'xlsx', 'csv'],
    };

    const media = 
    {
        type: data.type ?? null,
        date: data.date ?? null,
        anchor: data.anchor ?? null,
        description: data.description ?? null,
        isMedia: mediaData.files.includes(data.type),
        cls: ['component-theme', ['pdf', 'media-link'],
        'title-h4', 'media-content', 'meta-date', 'calendar'],
    };

    const organization = data.organization;

    console.warn('Section - Media Data:', media.isMedia, data);
</script>