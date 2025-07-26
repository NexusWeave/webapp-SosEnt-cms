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
                        // 0 1 2
                        'flex-column-align-items-center', 'flex-wrap-row',
                        'flex-row-reversed-justify-center-align-content-center',
                        // 3 4 5
                        'article-title-h2', 'article-title-h3', 'article-title-h4',
                        // 6 7 8 9
                        'news-card', 'news-article', 'tags', 'author',
                        //10 11 12
                        'article-ingress', 'text', 'article-section',
                        //13 14
                        'article-section-content', 'article-conclusion',
                        //15 16
                        'article-citation','article-head-content',
                        //17 18 19 20 21
                        'container-grid', 'main-grid', 'aside-grid',
                        'component-theme','article-cta'];

                    // Tags
                    /*article.tags.forEach(tag => { 
                        tag.cls = ['news-tag'];
                        tag.anchor = { href: '#' };
                    });*/
                    
                    article.anchor = 
                    {
                        label: 'Les mer',
                        cls: ['read-more'],
                        href: '#/aktuelt/artikkel/' + article.id
                    };
                    
                    article.btn = 
                    {
                        anchor: article.anchor,
                        text: article.anchor.name,
                        href: article.anchor.href,
                        cls: ['button', 'read-more'],
                    };

                    const section = article.section;
                    section.btn = 
                    {
                        anchor: article.anchor,
                        text: article.anchor.name,
                        href: article.anchor.href,
                        cls: ['button', 'read-more'],
                    };

                    const date = article.date;
                    date.type = 'news';
                    date.cls = ['article-date'];

                    const contents = section.contents;
                    contents.forEach((content) => {
                        content.cls = ['flex-wrap-row', 'flex-wrap-reversed-row',
                                        'article-content'];

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
                                item.cls = ['cta-section', 'cta-content'];
                                if (item.nav > 0)
                                {
                                    const nav = item.nav;
                                    nav.forEach((navItem, j) => {
                                        navItem.anchor.href.includes('/media/documents/') ?
                                        navItem.anchor.cls = ['pdf', 'nav-link'] :
                                        navItem.anchor.cls = ['nav-link', 'cta-content'];
                                    });
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
