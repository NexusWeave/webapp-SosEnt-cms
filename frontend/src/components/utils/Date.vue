<template>
    <span :class="[cls[0]]">
        {{ dateObject.text() }}

        <template v-if="dateObject.delimiter">
            <span :class="dateObject.delimiter">
                <i :class="cls[cls.length - 1]" :aria-label="dateObject.type()"></i>
            </span>
        </template>
            
        <time :datetime="dateObject.updated() ??  dateObject.published()">
            <b>{{ dateObject.updated() ?? dateObject.published() }}</b>
        </time>

        <template v-if="cls.includes('icon')">
            <span :class="cls[1]">
                
                <i :class="cls[cls.length - 1]" :aria-label="dateObject.type()"></i>
            </span>
        </template>
    </span>

    <span :class="cls" v-if="data.anchor">
        <Anchor :data="data"/>
    </span>
</template>
<script setup>
    import { defineProps } from 'vue';

    import Anchor from '@/components/navigation/Anchor.vue';

    const props = defineProps({
        data: {
            type: Object,
            required: false
        },
        
        Cls: {
            type: Array,
            required: false
        },

    });
    const data = props.data;
    const classList =() =>
    {
        const cls = props.Cls ? props.Cls : [];
        const icons = ['calendar'];


        icons.forEach(icon => {
            if (cls.includes(icon)) {
                cls.push('icon');
            }
        });

        return cls;
    };

    const cls = classList()
    

    const dateObject =
    {
        delimiter: 'dot',
        isLoaded: () => { if(data) return true; else return false; },
        type: () => { if (data.type) return data.type; else return 'date'; },
        text : () => 
        { 
            return data.updated ? `Oppdatert`
            : data.published ? `Publisert`
            : ''; 
        },
        updated: () => data.updated ? new Date(data.updated).toLocaleDateString() : null,
        published: () => data.published ? new Date(data.published).toLocaleDateString() : null,

    }
    //console.log("Span Component loaded with data: ", dateText(), props.text, data);
</script>