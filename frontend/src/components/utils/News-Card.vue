<template>
    <article :class="[article.cls[0], article.cls[1]]">
        <header>
            <h2 :class="article.cls[2]">
                {{ article.title }}
            </h2>
            <section :class="article.cls[7]">
                <MetaData v-if="article.date && article.date.type == 'updated'" :data="article.date" :Cls="article.date.cls" :text="article.date.type"/>

                <p>{{ article.ingress.content }}</p>
                            
                <p>
                    <MetaData v-if="article.tags" :array="article.tags" />
                    <Btn v-if="article.btn && article.section" :data="article.btn" />
                </p>
            </section>
        </header>
    </article>
</template>

<script setup>
    import { defineProps, reactive } from 'vue';

    import MetaData from '@/components/utils/Span.vue';
    import Btn from '@/components/navigation/Button.vue';

    const props = defineProps({
        data: {
            type: Object,
            required: true
        },
    });

    const article = reactive(props.data);
    console.log("News Card Component loaded with data: ", article);
</script>