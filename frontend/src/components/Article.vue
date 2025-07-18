<template>
    <article v-if="article" :class="article.cls">
        <header >
            <Figure :data="article.img" v-if="article.img" />
            <h2>{{ article.title }}</h2>

            <p>
                <Date :data="article.date" v-if="article.date" :text="article.date.type" />
                <Date v-if="article.anchor && !article.footer" :data="article.anchor" />
            </p>
            
            <p v-if="article.author" class="author">
                <span v-for="(author, index) in article.author" :key="index">{{ author }}</span>
            </p>

            <span v-if="!article.footer" v-for="tag in article.tags" :key="tag.id" :class="tag.cls">
                {{ tag.title }}
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
            <p>{{article.footer.content}}</p>
            <Figure :data="article.footer.img" v-if="article.footer.img" />
            <p>
                <Date :data="article.date" v-if="article.date" :text="'published'" />
                <Date v-if="article.anchor" :data="article.anchor" />

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

    const article = props.data;
    console.log("Articles Component :", article);

    //console.log("Article Component loaded with data: ", props.data);

    
</script>