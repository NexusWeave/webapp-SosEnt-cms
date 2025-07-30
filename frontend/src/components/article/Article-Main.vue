<template>
    <section :class="cls[0]">
        <h3 v-if="section.title" :class="cls[1]">{{ section.title }}</h3>
        <section v-for="content in section.contents"
            :class="!content.cta ?'article-section' : ['container-grid', 'article-section']"
            :key="content.id"> 

            <section :class="cls[2]">
                <h4 v-if="content.title"
                :class="cls[3]">
                    {{ content.title }}
                </h4>
                <p v-for="(paragraph, i) in content.content" 
                    :key="i">{{ paragraph }}</p>
                <ul v-if ="content.list && content.list.length > 0">
                    <li v-for="(item, i) in content.list" :key="i">
                    {{ item.bullet }}
                    </li>
                </ul>
            </section>

            <aside v-if="content.cta" 
                :class="cls[4]">

                <section :class="cls[5]">
                    <section v-for="(cta, i) in content.cta" 
                        :key="i"
                        :class=cls[6]>

                        <h4  v-if="cta.title"
                            :class="cls[3]">
                            {{ cta.title }}
                        </h4>
                        <p v-if="cta.content"
                            :key="i">
                            {{ cta.content }}
                        </p>
                        <section v-if="cta.media" :class="['media-container']">
                            <Sections v-if="cta.media" :data="cta.media"/>
                        </section>
                    </section>
                </section>
            </aside>
        </section>
    </section>

</template>

<script setup>
    import { defineProps, computed, reactive } from 'vue';

    import MetaData from '@/components/utils/Span.vue';    
    import Figure from '@/components/media/Figure.vue';
    import Btn from '@/components/navigation/Button.vue';
    import Sections from '@/components/utils/Section.vue';
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
        data: {
            type: Object,
            required: true
        }
    });

    const cls = props.Cls;
    const isArticlePage = props.isArticlePage;
    const section = props.data ? props.data : props.Section;
    const content = section.contents ? section.contents : null;

    //console.log("Article Main Component loaded with data: ", section);
</script>