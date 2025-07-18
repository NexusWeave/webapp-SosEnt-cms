<template>
    <article v-if="article" :class="article.cls[0]">
        <header v-if="head">
            <h2 :class="head.cls[1]" v-if="!article.footer">{{ head.title }}</h2>
            <Figure :data="head.img" v-if="head.img" />

            <p>
                <Date :data="head.date" v-if="head.date && head.date.type == 'updated' || !article.footer" :text="head.date.type" />
                <Date v-if="head.anchor && !article.footer" :data="head.anchor" />
            </p>
            
            <p v-if="article.author" :class="head.cls[3]">
                <span v-for="(author, index) in article.author" :key="index">{{ author }}</span>
            </p>
            <span :class="head.cls[4]" v-if="article.tags && !article.ingress">
                <span v-for="tag in article.tags" :key="tag.id" :class="tag.cls[1]">
                    {{ tag.title }}
                </span>
            </span>
        </header>

        <main v-if="article.ingress" :class="article.cls[1]">
            <section v-if="article.ingress">
                <section :class="article.ingress.cls">
                    <Figure :data="article.ingress.img" :class="article.cls[1]" v-if="article.ingress.img" />
                </section>
                
                <section :class="article.ingress.cls">
                    
                    <h2 :class="head.cls[1]">{{ article.ingress.title }}</h2>
                    <Date :data="head.date" v-if="head.date && head.date.type == 'updated' || article.sections" :text="head.date.type" />
                    <cite>{{ article.ingress.citation }}</cite>
                    
                    <p :class='article.ingress.cls'>{{ article.ingress.content }}</p>
                    <Date v-if="head.anchor && article.sections" :data="head.anchor" />
                    <span :class="head.cls[4]" v-if="article.tags && !article.footer">
                        <span v-for="tag in article.tags" :key="tag.id" :class="tag.cls[1]">
                            {{ tag.title }}
                        </span>
                    </span>
                </section>
            </section>

            <section v-if="article.sections" v-for="section in article.sections" :key="section.id" :class="section.cls">

                <h2>{{ section.title }}</h2>
                <p v-for="paragraph in section.paragraphs" :key="paragraph.id">{{ paragraph.content }}</p>
                <ul v-if="section.list">
                    <li v-for="item in section.list.items" :key="item.id">{{ item.content }}</li>
                </ul>
                <p v-if="section.conclusion">{{ section.conclusion }}</p>

                <Anchor  :data="section.anchor? section.anchor: null" />
            </section>
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
        </main>

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