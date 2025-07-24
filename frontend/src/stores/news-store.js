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
                    [
                        'flex-column-align-items-center', 'flex-wrap-row',
                        'flex-row-reversed-justify-center-align-content-center',
                        'article-title-h2', 'article-title-h3', 'article-title-h4',
                        'news-card', 'news-article', 'tags', 'author',
                        'article-ingress', 'text', 'article-section',
                        'article-section-content', 'article-conclusion',
                        'article-citation',,'article-head-content'
                    ];
                    article.anchor.href = article.anchor.href + article.id;
                    article.btn = 
                    {
                        anchor: article.anchor,
                        text: article.anchor.name,
                        href: article.anchor.href,
                        cls: ['button', 'read-more'],
                    }
                    article.date.type = article.date.updated ? 'updated' : 'published';

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
                    articles[i].tags.push('archived');
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
            
            recent: (state) => { return state.data.articles.filter(article => !article.archived); },
            archived: (state) => { return state.data.articles.filter(article => article.archived); },
            articles: (state) => { return state.data.articles; },
        },
    });
