//  This file is a part of the SoSEnT web application project.

import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { generateHexID } from '@/utils/utils.js';

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
            addArticle(article)
            {
                article.archived = false;

                article.cls = ['tags'];

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
                    cls: ['read-more'],
                    href: '/#/aktuelt/artikkel/' + article.id
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
                        cta.type = ['anchor'];
                        cta.label = 'Les mer';
                        cta.cls = ['read-more'];
                        cta.href = '#/aktuelt/artikkel/' + article.id;
                    };

                    const date = article.date;
                    date.type = 'news';

                    const contents = article.section.contents;
                    contents.forEach((content) => {
                        const figure = content.img;
                        if (figure)
                        {
                            content.id = generateHexID();
                            if (content.anchor > 0)
                            {
                                const anchor = item.anchor;
                                anchor.forEach((anchorItem, j) => {
                                    anchorItem.id = generateHexID();
                                });

                                if(cta.media)
                                {
                                    const media = cta.media;
                                    media.forEach((mediaItem, k) => {
                                        mediaItem.id = generateHexID();
                                    });
                                }
                                
                            }
                        }
                    });
                });

                this.data.articles.push(article);
                //console.log("Adding article: ", article);

                this.sortArticlesByDate();
            },

            sortArticlesByDate()
            {
                this.data.articles = this.data.articles.sort((a, b) => new Date(b.date.published) - new Date(a.date.published));

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

            async fetchData()
            { 
                const news = this.data;
                if (news.isLoaded) return;

                const path = '/services/sosent-news-api.json';
                await fetch(path).then((response) => response.json()).then((data) => {
                    data.data.forEach((item) => {
                        this.addArticle(item);
                    });
                    news.isLoaded = true;
                }).catch((error) =>
                {

                    this.data.isLoaded = false;
                    console.error("Error fetching news: ", error);

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
