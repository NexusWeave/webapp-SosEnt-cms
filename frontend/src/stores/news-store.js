//  This file is a part of the SoSEnT web application project.
import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { fetchNews } from '@/services/sosent-news-api.js';

export const newsStore = defineStore('newsData', 
    {
        state: () => ({
            data: {
                title: 'Nyheter',
                cls: ['flex-column', 'flex-wrap-row-justify-space-evenly'],
                articles: [],
                isLoaded: false,
            },
        }),
        actions:
        {
            addArticle(articles)
            {
                articles.forEach(article => {

                    article.archived = false;

                    article.cls = 
                    ['title-h2', 'tags'];

                    if (article.tags)
                    {
                        article.tags.forEach(tag => {
                            tag.cls = ['news-tag'];
                            tag.anchor = { href: '#' };
                        });
                    }

                    article.anchor = 
                    {
                        type: ['anchor'],
                        label: 'Les mer',
                        cls: ['button','read-more'],
                        href: '/aktuelt/artikkel/' + article.id
                    };  

                    const date = article.date;
                    date.type = 'news';

                    const contents = article.section.contents;
                    contents.forEach((content) => {
                        const figure = content.img;
                        if (figure)
                        {
                            figure.cls = ['grid-figure', 'article-figure'];
                        }
                    
                        const cta = content.cta;
                        if (cta)
                        {
                            cta.forEach((item, i) =>
                            {
                                if (item.anchor > 0)
                                {
                                    const anchor = item.anchor;
                                    anchor.forEach((anchorItem, j) => {
                                        anchorItem.href.startsWith('/media/documents/') ?
                                        anchorItem.cls = [['pdf', 'article-title-h4'], 'nav-link'] :
                                        anchorItem.cls = ['nav-link', 'cta-content'];
                                    });

                                    if(cta.media)
                                    {
                                        const media = cta.media;
                                        media.forEach((mediaItem, k) => {
                                            mediaItem.href.startsWith('/media/documents/') ?
                                            mediaItem.cls =['media-container', 'pdf'] :
                                            mediaItem.cls = ['media-container'];
                                        });
                                    }
                                    
                                }
                            });
                        }
                    });
                    this.data.articles.push(article);
                    //console.log("Adding article: ", article);
                });

            this.sortArticlesByDate();
            },

            sortArticlesByDate()
            {
                const articles = reactive(this.data.articles);
                this.data.articles = articles.sort((a, b) => new Date(a.date) - new Date(b.date));

                this.archiveArticle();
            },

            archiveArticle()
            {
                const data = this.data.articles;
            
                const n = 3;
                const length = data.length;

                if (length <= n) return;

                const articles = data.filter(article => article.archived === false);                
                for (let i = n; i < articles.length; i++)
                {
                    articles[i].archived = true;
                    //console.log("Archiving article: ", articles[i].cls);
                }
            },
            fetchNews()
            {
                if (this.data.isLoaded) return;

                fetchNews().then((articles) => {
                    this.addArticle(articles);
                    this.data.isLoaded = true;
                    
                }).catch((error) => {
                    console.error("Error fetching news data: ", error);
                });
            },
        },
        getters:
        {
            isLoaded: (state) => { return state.data.isLoaded; },
            articles: (state) => { return state.data.articles; },
            recent: (state) => { return state.data.articles.filter(article => !article.archived); },
            archived: (state) => { return state.data.articles.filter(article => article.archived); },
            
        },
    });
