import {  reactive } from 'vue'
import { defineStore } from 'pinia'

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
                if (typeof(articles.articles) === 'object')
                {
                    this.data.articles.push(article)
                }
                else
                {
                    articles.forEach(article => {
                        this.data.articles.push(article)});
                }
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
                const articles = this.data.articles.filter(article => article.archived === false);
            
                const n = articles.length;
                
                if (n < 3) return;
                
                for (let i = 3; i < n; i++)
                {
                    articles[i].archived = !articles[i].archived?  true :false;
                }
            },
        },
        getters:
        {
            archived: (state) => { return state.data.articles.filter(article => article.archived); },
            recent: (state) => { return state.data.articles.filter(article => !article.archived); },
        },
        });
