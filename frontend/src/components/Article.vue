<template>
    <article v-if="article" :class="article.cls">
        <header >
            <Figure :data="article.img" v-if="article.img" />
            <h2>{{ article.title }}</h2>
            <p>
                <span class="date" v-if="article.date">
                    <time datetime="{{ article.date }}">{{ article.date }}</time>
                </span>
                <span v-if="article.anchor && !article.footer" class="anchor">
                    <Anchor :data="article.anchor"/>
                </span>
            </p>
            <p v-if="article.author" class="author">
                <span v-for="(author, index) in article.author" :key="index">{{ author }}</span>
            </p>
            <p v-if="!article.footer" v-for="tag in article.tags" :key="tag.id" :class="tag.cls">{{ tag.title }}</p>
        </header>
        <main v-if="article.ingress">
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
        </footer>
    </article>
</template>

<script setup>

    import { defineProps } from 'vue';
    import Anchor from './navigation/Anchor.vue';
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