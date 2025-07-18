<template>
    <article v-if="article" :class="article.cls">
        <header v-if="head">
            <h2 :class="head.cls[1]">{{ head.title }}</h2>
            <h3 v-if="head.subtitle" :class="head.cls[2]">{{ head.subtitle }}</h3>
            <Figure :data="head.img" v-if="head.img" />

            <p>
                <Date :data="head.date" v-if="head.date && head.date.type == 'updated' || !article.footer" :text="head.date.type" />
                <Date v-if="head.anchor && !article.footer" :data="head.anchor" />
            </p>
            
            <p v-if="article.author" :class="head.cls[3]">
                <span v-for="(author, index) in article.author" :key="index">{{ author }}</span>
            </p>
            <span :class="head.cls[4]" v-if="article.tags && !article.footer">
                <span v-for="tag in article.tags" :key="tag.id" :class="tag.cls[1]">
                    {{ tag.title }}
                </span>
            </span>
        </header>

        <main v-if="article.ingress">
            <Figure :data="article.ingress.img" v-if="article.ingress.img" />
            <h3>{{ article.ingress.title }}</h3>
            <p v-if="article.ingress" :class='article.ingress.cls'>{{ article.ingress.content }}</p>

            <section v-if="article.sections" v-for="section in article.sections" :key="section.id" :class="section.cls">

                <h2>{{ section.title }}</h2>
                <p v-for="paragraph in section.paragraphs" :key="paragraph.id">{{ paragraph.content }}</p>
                <ul v-if="section.list">
                    <li v-for="item in section.list.items" :key="item.id">{{ item.content }}</li>
                </ul>
                <p v-if="section.conclusion">{{ section.conclusion }}</p>

                <Anchor  :data="section.anchor? section.anchor: null" />
            </section>
        </main>

        <footer v-if="article.footer" :class="article.footer.cls">
            <Figure :data="article.footer.img" v-if="article.footer.img" />

            <p>{{article.footer.content}}</p>
            
            <p>
                <Date :data="article.date" v-if="article.date" :text="'published'"/>
                <Date v-if="article.footer.anchor" :data="article.footer.anchor" />

                <span v-if="article.tags" class="tags flex-wrap-row-justify-flex-end-align-items-center">
                    <span v-if="article.tags" v-for="tag in article.tags" :key="tag.id" :class="tag.cls[1]">
                        {{ tag.title }}
                    </span>
                </span>
            </p>
        </footer>

    </article>
</template>

<script setup>

    import { defineProps } from 'vue';

    import Anchor from './navigation/Anchor.vue';
    import Date from '@/components/utils/Span.vue';
    import Figure from '@/components/media/Figure.vue';

    const props = defineProps({
        data: {
            type: Object || Array,
            required: true
        }
    });
    const head = props.data.head || null;
    const article = props.data;

    article.cls = article.footer ? [article.cls[0], article.cls[1]]: [head.cls[0]];
    
    //  console.log("Articles Component :", article);

</script>