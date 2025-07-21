<template>
    <article :class="cls">
        <header v-if="!isArticlePage && !isNewsPage">
            <h2 :class="article.cls[2]">{{ article.ingress.title }}</h2>
            <Figure :data="article.ingress.img" :class="article.cls[1]" v-if="article.ingress.img" />
            <cite v-if="article.ingress.citation">{{ article.ingress.citation }}</cite>
            <p>
                <Date :data="article.date" v-if="article.date && article.date.type == 'updated' || article.ingress" :text="article.date.type" />
                <span v-if="article.tags" :class="article.cls[4]">
                    <Date :array="article.tags" />
                </span>
            </p>
            <Btn v-if="article.anchor && article.sections && !isArticlePage" :data="article.anchor" />

        </header>

        <main v-if="isNewsPage || isArticlePage" :class="article.cls[3]">
            <section v-if="article.ingress" :class="article.cls[9]">
                <section :class="article.cls[7]">
                    <Figure :data="article.ingress.img" v-if="article.ingress.img" />
                </section>
                
                <section :class="article.cls[7]">
                    <button v-if="isArticlePage" @click="goBack" :class="btn.cls">{{ btn.text }}</button>
                    <Btn v-if="isArticlePage" :data="btn"/>
                    <h2 :class="article.cls[2]">{{ article.title }}</h2>
                    <cite v-if="article.citation" :class="article.cls[5]">{{ article.ingress.citation }}</cite>
                    <p>
                        <Date :data="article.date" v-if="article.date && article.date.type == 'updated' || article.ingress" :text="article.date.type" />
                        <span v-if="article.tags && !isArticlePage" :class="article.cls[4]">
                            <Date :array="article.tags" />
                        </span>
                    </p>

                    <div class="flex-column-align-items-end">
                        <p :class='article.cls[8]'>
                            {{ article.ingress.content }}
                        </p>
                    <Btn v-if="article.anchor && article.sections && !isArticlePage" :data="article.anchor" />

                    </div>
                </section>
            </section>

            <section v-if="isArticlePage" v-for="section in article.sections" :key="section.id" :class="section.cls">

                <h2>{{ section.title }}</h2>
                <section v-for="p in section.content" :key="p.id">
                    <p v-for="paragraph in p.content">{{ paragraph }}</p>
                </section>

                <ul v-if="section.list">
                    <li v-for="item in section.list.items" :key="item.id">{{ item.content }}</li>
                </ul>
                <p v-if="section.conclusion">{{ section.conclusion }}</p>

                <Anchor  v-if="section.anchor" :data="section.anchor" />
            </section>
        </main>
        <footer v-if="isArticlePage" :class="article.cls">
            <Figure v-if="article.footer.img" :data="article.footer.img" />

            <p v-if="article.footer.content" v-for="(p, i) in article.footer.content" :key="i">
                {{p}}
            </p>
            <p>
                <Date :data="article.date" v-if="article.date" :text="'published'"/>
                <Date v-if="article.footer.anchor" :data="article.footer.anchor" />
                <span v-if="article.tags && isArticlePage" :class="article.cls[4]">
                    <Date :array="article.tags" />
                </span>
            </p>
        </footer>
    </article>
</template>

<script setup>

    import { defineProps, computed } from 'vue';
    import { useRoute } from 'vue-router';

    import Anchor from './navigation/Anchor.vue';
    import Date from '@/components/utils/Span.vue';
    import Btn from '@/components/navigation/Button.vue';
    import Figure from '@/components/media/Figure.vue';

    const props = defineProps({
        data: {
            type: Object || Array,
            required: true
        }
    });

    const goBack = () => {
        window.history.back();
    };

    const btn = {
        text: 'Go back',
        cls: ['btn', 'btn-secondary'],
        action: goBack
    };
    const article = props.data;
    

    const route = useRoute();
    const isPage = computed(() => {return route.name});
    const isNewsPage = isPage.value === 'news' ? true : false;
    const isArticlePage = isPage.value === 'article' ? true : false;

    const cls = computed(() => {
        if (!isNewsPage && !isArticlePage) {
            return [article.cls[0], article.cls[1]];
        }
        else return [article.cls[3]];
    });
    console.log("Articles Component :", isPage.value, article, isNewsPage, isArticlePage);

</script>