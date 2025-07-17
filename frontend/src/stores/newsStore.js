import {  reactive, ref } from 'vue'
import { defineStore } from 'pinia'

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
                    article.anchor.href = article.anchor.href + article.id;
                    article.head.anchor.href = article.anchor.href;
                    console.log("Adding article: ", article);
                    this.data.articles.push(article);
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

                const tag = 
                {
                        id: 1,
                        title: 'Archived',
                        cls: ['tag', 'archived-tag']
                };

                const articles = this.data.articles.filter(article => article.archived === false);

                if (articles.length <= n) return;
                
                for (let i = n; i < articles.length; i++)
                {
                    articles[i].tags.push(tag);
                    articles[i].archived = true;
                    articles[i].head.anchor.name = articles[i].head.title;
                    console.log("Archiving article: ", articles[i].head.anchor.name);
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
