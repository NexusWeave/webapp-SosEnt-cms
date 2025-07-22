<template>
    <h3 :class="cls[0]">{{ title }}</h3>
    <section 
    v-for="content in section.contents"
    :class=" content.id % 2 === 0 ? 'flex-row-reversed-justify-center-align-content-center' : 'flex-row'"
    :key="content.id"> 

    <section v-if="content.content.img" :class="cls[1]">
        <Figure :data="content.content.img" />
    </section>

        <section :class="cls[1]">
            <button v-if="content.id == 0 && isArticlePage" 
                @click="goBack">
                    {{ btn.text }}
            </button>

            <h4 v-if="content.content.title">{{ content.content.title }}</h4>
            <p> {{ content.content.text }} </p>
        </section>
    </section>

    <footer v-if="section.conclusion.exists" :class="cls">
        <h2>{{ section.conclusion.title }}</h2>

        <ul v-if="section.list">
            <li v-for="item in section.list.items" :key="item.id">
                {{ item.content }}
            </li>
        </ul>

        <p v-if="section.conclusion.content">
            {{ section.conclusion.content }}
        </p>
    </footer>
</template>

<script setup>
    import { defineProps, onMounted, reactive } from 'vue';

    import MetaData from '@/components/utils/Span.vue';
    import Figure from '@/components/media/Figure.vue';
    import Btn from '@/components/navigation/Button.vue';
    import Anchor from '@/components/navigation/Anchor.vue';

    const goBack = () => {
        window.history.back();
    };

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


    const isArticlePage = props.isArticlePage;
    
    const btn = {
        text: 'Go back',
        cls: ['btn', 'btn-secondary'],
        action: goBack
    };

    
    onMounted(() => {

        console.log("Article Main Component loaded with data: ", section);
    });
</script>