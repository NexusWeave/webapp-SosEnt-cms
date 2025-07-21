<template>
    <template v-if="data">
        <span :class="data.cls" v-if="data.published">
            Artikkelen ble {{ dateText() }}
            <time :datetime="date()">
                <b>{{ date() }}</b>
            </time>
        </span>
        <span :class="data.cls" v-else-if="data.anchor">
            <Anchor :data="data"/>
        </span>
    </template>

    <template v-else-if="array && array.length > 0">
        <span v-for="(item, i) in array" :key="i" :class="item.cls">
         >> {{ item.title }}
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
        array: {
            type: Array,
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
        switch (text) {
            case 'updated': return new Date(data.updated).toLocaleDateString();
            case 'published': return new Date(data.published).toLocaleDateString();
            default:
                return
        }
    };
    const dateText = () => 
    {
        if (text == 'updated' && data.updated) return 'Oppdatert :'
        else if (text == 'published' && data.published) return 'Publisert :'
        else return;
    };

    console.log("Span Component loaded with data: ", dateText(), props.text, data);
</script>