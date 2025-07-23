<template>
    <h3 v-if="section.title" :class="cls[1]">{{ section.title }}</h3>
    <section 
    v-for="content in section.contents"
    :class=" content.id % 2 === 0 ? cls[0] : 'flex-row'"
    :key="content.id"> 
        <Figure :data="content.img"  v-if="content.img"/>

        <section :class="cls[2]">
            <Btn 
            v-if="content.id == 0 && isArticlePage" 
            :data="section.btn"/>

            <h4 
                v-if="content.title"
                :class="cls[3]">
                    {{ content.title }}
            </h4>

            <p> {{ content.content }} </p>
        </section>
    </section>

</template>

<script setup>
    import { defineProps, onMounted, reactive } from 'vue';

    import MetaData from '@/components/utils/Span.vue';
    import Figure from '@/components/media/Figure.vue';
    import Btn from '@/components/navigation/Button.vue';
    import Anchor from '@/components/navigation/Anchor.vue';

    const props = defineProps({
        date: {
            type: Object,
            required: true
        },
        isArticlePage: {
            type: Boolean,
            required: true
        },
        Cls: {
            type: Array,
            required: true
        },
        Section: {
            type: Object,
            required: true
        }
    });

    const cls = props.Cls;
    const date = props.date;
    const section = reactive(props.Section);
    const conclusion = section.conclusion ? section.conclusion : null;


    const isArticlePage = props.isArticlePage;

    
    onMounted(() => {

        //console.log("Article Main Component loaded with data: ", section);
    });
</script>