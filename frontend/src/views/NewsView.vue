<template>
    <section>News</section>
    <section :class="newsData.cls">
        <Articles v-if="newsData.articles.length > 0" :data="newsData.articles" />
    </section>
    <section>News Archive</section>
    <section :class="newsData.cls">
        <Articles v-if="newsData.articles.length > 3" :data="newsData.articles" />
    </section>
</template>

<script setup>

    import { computed, reactive } from 'vue';
    import Articles from '@/components/Article.vue';

    const newsData = reactive(
        {
            title: 'Nyheter',
            cls: ['flex-column', 'flex-wrap-row-justify-space-evenly'],
            articles: [
                {
                    id: 0,
                    title: 'Nyhet 1',
                    content: 'Innhold for nyhet 1',
                    date: '2023-10-01'
                },
                {
                    id: 1,
                    title: 'Nyhet 2',
                    content: 'Innhold for nyhet 2',
                    date: '2023-10-02'
                },
                {
                    id: 2,
                    title: 'Nyhet 3',
                    content: 'Innhold for nyhet 3',
                    date: '2023-10-03'
                },
                {
                    id: 3,
                    title: 'Nyhet 4',
                    content: 'Innhold for nyhet 4',
                    date: '2023-10-04'
                }
            ],
            articleData: computed(() => {
                const article = newsData.articles.sort((a, b) => new Date(b.date) - new Date(a.date));
                return article.length < 3 ? article.slice(0, 3) : article;
            }),
            archive: computed(() => {
                const article = newsData.articles.sort((a, b) => new Date(b.date) - new Date(a.date));
                if (article.length > 3) {
                    return article;
                }
            })
        }
    );
</script>