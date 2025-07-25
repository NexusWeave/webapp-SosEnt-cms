<template>
    <template v-if="data">

        <span :class="cls" v-if="dateObject.isLoaded()">
            {{ dateObject.text() }}
            
            <b>{{ dateObject.delimiter }}</b>
            
            <time :datetime="dateObject.updated() ? dateObject.updated() : dateObject.published()">
                <b>{{ dateObject.updated() ? dateObject.updated() : dateObject.published() }}</b>
            </time>
            <template v-if="dateObject.icon.exists()">
                <span :class="dateObject.icon.cls[0]">
                    <span :class="dateObject.icon.cls[1]"></span>
                </span>
            </template>
        </span>

        <span :class="cls" v-if="data.anchor">
            <Anchor :data="data"/>
        </span>
    </template>

    <template v-else-if="array && array.length > 0">
        <span v-for="(item, i) in array" :key="i">
            <i :class="item.cls"></i> 
            {{ item.label }}
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

    });

    const cls = props.Cls;
    const data = props.data;
    
    const dateObject =
    {
        delimiter: '*',
        isLoaded: () => { if(data) return true; else return false; },
        type: () => { if (data.type) return data.type; else return 'date'; },
        icon:
        {
            cls: ['calendar', 'icon'],
            exists : () => { if (data.icon) return true; else return false; }
            
        },
        text : () => 
        { 
            return data.updated ? 'Oppdatert '
            : data.published ? 'Publisert '
            : ''; 
        },
        updated: () => data.updated ? new Date(data.updated).toLocaleDateString() : null,
        published: () => data.published ? new Date(data.published).toLocaleDateString() : null,

    }
    //console.log("Span Component loaded with data: ", dateText(), props.text, data);
</script>