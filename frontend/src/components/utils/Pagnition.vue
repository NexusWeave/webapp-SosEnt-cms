<template>
    <nav :class="cls">
        <Btn :data="btn[0]"/>
        <span> {{ activePage > 0 ?  activePage + ' / ' + totalPages : '' }}</span>
        <Btn :data="btn[1]"/>
    </nav>
</template>

<script setup>

    import { ref, reactive, watch, defineProps, defineEmits, computed } from 'vue';

    import Btn from '@/components/navigation/Button.vue';

    const emit = defineEmits(['update']);
    const props = defineProps(
    {
        activePage: 
        {
            type: Number,
            required: false,
            default: 1
        },
        totalPage: 
        {
            type: Number,
            required: false,
            default: 1
        },
        Cls:
        {
            type: Array,
            required: false
        },
    });

    const data = props.data;
    const cls = props.Cls ? props.Cls : [];

    //  Watch for changes in the 'data' prop
    const activePage = ref(props.activePage);

        watch(() => props.activePage, (newValue) => 
    {
        activePage.value = newValue;
    });

    watch(() => activePage, (newValue) => 
    {
        emit('update', newValue);
    }, { immediate: true });

    const totalPages = computed(() => props.totalPage);

    const btn = computed(() =>
        [
            {
                id: 0,
                name: 'Forrige',
                cls: ['button', 'archive-btn'],
                action: () => { if (activePage.value > 1)  activePage.value--; },
                disabled: activePage.value <= 1 ? 'disabled' : false,
            },
            {
                id: 1,
                name: 'Neste',
                cls: ['button', 'archive-btn'],
                disabled: activePage.value >= totalPages.value? 'disabled' : false,
                action: () => { if (activePage.value < totalPages.value)  activePage.value++; },

            },
        ]);
    
    console.log('Pagnition component initialized with data:', data);  
</script>