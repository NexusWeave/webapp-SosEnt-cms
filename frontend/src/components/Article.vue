<template>
    <article v-for="article in articles" :key="article.id" :class="article.cls">
        <header>
            <Figure :data="article.img" v-if="article.img" />
            <h2>{{ article.title }}</h2>
            <p>
                <span class="date" v-if="article.date">
                    <time datetime="{{ article.date }}">{{ article.date }}</time>
                </span>
                <span v-if="article.anchor" class="anchor">
                    <Anchor :data="article.anchor"/>
                </span>
            </p>
        </header>
        
        <p v-if="ingress" :class='ingress.cls'>{{ ingress.content }}</p>
        
        <section v-if="sections > 0" v-for="section in sections" :key="section.id" :class="section.cls">
            
            <h2>{{ section.title }}</h2>
            <p v-for="paragraph in section.paragraphs" :key="paragraph.id">{{ paragraph.content }}</p>
            <ul v-if="section.list">
                <li v-for="item in section.list.items" :key="item.id">{{ item.content }}</li>
            </ul>
            <p v-if="section.conclusion">{{ section.conclusion }}</p>

            <Anchor  :data="section.anchor? section.anchor: null" />
            <a v-if="article.href" :href="article.href" class="read-more">Les mer</a>
        </section>
        
        <footer v-if="footer" :class="footer.cls">
            <p>{{footer.content}}</p>
        </footer>
    </article>
</template>

<script setup>

    import { computed, defineProps } from 'vue';
    import Anchor from './navigation/Anchor.vue';
    import Figure from '@/components/media/Figure.vue';
    
    const n = 3;

    const props = defineProps({
        data: {
            type: Array,
            required: true
        }
    });

    const data = props.data;

    const articles = computed(() => {
        data.sort((a, b) => new Date(b.date) - new Date(a.date));

        return data.slice(0, n);}
    );

    const sections = articles.sections ? articles.sections : null;
    const footer = articles.footer ? articles.footer : null;
    const ingress = articles.ingress ? articles.ingress : null;

    console.log("Articles Component :" + data);
</script>