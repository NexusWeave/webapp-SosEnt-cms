import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
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
                        'flex-column-align-items-center', 'news-card', 
                        'article-title-h2', 'news-article', 'tags',
                        'author', 'article-title-h3','ingress', 'text',
                    ];

                    const ID = parseInt(article.id);
                    
                    ID % 2 === 0 ? article.cls.push('flex-row-reversed-justify-center-align-content-center') : article.cls.push('flex-row')
                    article.anchor.href = article.anchor.href + article.id;
                    article.btn = 
                    {
                        anchor: article.anchor,
                        text: article.anchor.name,
                        href: article.anchor.href,
                        cls: ['btn', 'read-more'],
                    }
                    article.date.updated ? article.date.type = 'updated' : article.date.type = 'published';

                    this.data.articles.push(article);

                    console.log("Adding article: ", article);
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
                const n = 3;

                const articles = this.data.articles.filter(article => article.archived === false);

                if (articles.length <= n) return;
                
                for (let i = n; i < articles.length; i++)
                {
                    articles[i].archived = true;
                    articles[i].tags.push('archived');
                    //console.log("Archiving article: ", articles[i].title);
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
            }
        },
        getters:
        {
            archived: (state) => { return state.data.articles.filter(article => article.archived); },
            recent: (state) => { return state.data.articles.filter(article => !article.archived); },
        },
        });
