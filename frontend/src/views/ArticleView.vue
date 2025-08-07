<template v-if="news.isLoaded">
    <Article  v-if="article" :data="article" :Cls="cls"/>

</template>

<script setup>
    import { computed, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { newsStore } from '@/stores/news-store.js';
    import { mediaStore } from '@/stores/media-store.js';

    import Article from '@/components/article/Article.vue';
    
    const route = useRoute();
    const news = newsStore();
    const media = mediaStore();

    const orgArticle = computed(() => news.articles.find(article => article.id === route.params.id.toString()));

    const article = computed(() => {

        const article = JSON.parse(JSON.stringify(orgArticle.value));
        if (!article) return null;
        
        //console.log("Article found: ", article);
        
        let content = article.section.contents.find(content => content.cta?.length > 0);
        if (!!content){
            content.cta.forEach(element => {
                if (!!element.media)
                {    
                    let ctaMedia = element.media;
                    if (!!ctaMedia.filter)
                    {
                        
                        //console.log("Processing CTA media: ", ctaMedia);
                        
                        ctaMedia.forEach(mediaItem => {

                            const item = media.mediaFilter(mediaItem.filter);
                            
                            media.id = mediaItem.id;
                            mediaItem.media = item;
                            
                            return mediaItem;
                        });
                        //console.log("CTA media item processed: ", ctaMedia);
                    }
                }
            });
        }
        //console.log("CTA found: ", content.cta);
        return article;
        });


    const cls = ['flex-column-align-items-center', ['article-ingress'], 
    'title-h2', 'tags',// End of Header classes
    'flex-column-align-items-center', 'title-h3', [ 'article-section-content'],
    'title-h4', 'aside-grid', ['component-theme', 'cta-section'],
    'cta-section-content', 'article-news',
    // End of Main classes
    ];

    watch(() => news, (data) => {
        const ID = route.params.id.toString();
        article = computed(() => news.fetchArticle(ID));
        if (data.isLoaded) {
            
            //console.log("ArticleView updated with new ID: ", ID, article);
        }
    });
    //console.log("ArticleView loaded with data: ",  article, route.params.id, cls);
</script>