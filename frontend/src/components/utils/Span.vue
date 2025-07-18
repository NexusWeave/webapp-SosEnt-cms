<template>
    <template v-if="data.published">
        <span :class="data.cls">
            <time :datetime="date()">
                Saken ble {{ dateText() }}
            </time>
        </span>
    </template>

    <template v-else-if="data.href">
        <span :class="data.cls">
            <Anchor :data="data"/>
        </span>
    </template>

    <template v-else>
        <span :class="data.cls">
            {{ text }}
        </span>
    </template>

</template>

<script setup>
    import { defineProps } from 'vue';

    import Anchor from '@/components/navigation/Anchor.vue';

    const props = defineProps({
        data: {
            type: Object,
            required: false
        },

        text: {
            type: String,
            required: false
        },

    });

    const data = props.data;
    const text = props.text;
    const date = () => 
    {
        if (text == 'updated' && data.updated) return  new Date(data.updated).toLocaleDateString()
        else if (text == 'published' && data.published) return new Date(data.published).toLocaleDateString()
        else return;
    };
    const dateText = () => 
    {
        if (text == 'updated' && data.updated) return 'Oppdatert : ' + date()
        else if (text == 'published' && data.published) return 'Publisert : ' + date()
        else return;
    };

    console.log("Span Component loaded with data: ", dateText(), props.text, data);
</script>