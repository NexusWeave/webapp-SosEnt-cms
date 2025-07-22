<template>
    <template v-if="data">
        <span :class="cls" v-if="text">
            {{ dateText() }} <b> * </b>
            <time :datetime="date()">
                <b>{{ date() }}</b>
            </time>
        </span>
        <span :class="cls" v-else-if="data.anchor">
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
        
        Cls: {
            type: Array,
            required: false
        },
        text: {
            type: String,
            required: false
        },

    });

    const cls = props.Cls;
    const data = props.data;
    const text = props.text;
    
    const date = () => 
    {
        return text == 'updated' ? new Date(data.updated).toLocaleDateString()
            : text == 'published' ? new Date(data.published).toLocaleDateString()
            : null;
    };
    const dateText = () => 
    {
        return text == 'updated' ? 'Oppdatert '
            : text == 'published' ? 'Publisert '
            : null;
    };

    console.log("Span Component loaded with data: ", dateText(), props.text, data);
</script>