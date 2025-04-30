//  News view
function newsView(arg, id)
{
        //  Fetch the model
        
        const pages = model.data.nav.pages;

        //  Ensure that the page exists
        for( let i = 0; i < pages.length; i++)
        {
    
            //  Ensure the page's integrity
            if (pages[i].name == arg && id == pages[i].id)
            {
                let html;
                const content = model.data.nav.pages[i].content;
                const articles = model.data.nav.pages[i].content.articles;

                html = `
                    ${header()}
                    <main>
                    <h2>${content.headline}</h2>
                        <section class = "${content.cls}">`;

                for (let j = 0; j < articles.length; j++)
                {
                    html += `
                        <article class = "${articles[j].cls}">
                                <img class = "${articles[j].image.cls}" alt="${articles[j].image.alt}" src="${articles[j].image.src ? articles[j].image.src : null}" />
                                <div class = "flex-wrap-column is-31">
                                    <h3>${articles[j].headline}</h3>
                                    <time datetime="${articles[j].date}">${articles[j].date}</time>
                                    <p>${articles[j].lede}</p>
                                    <div class = "flex-wrap-row-justify-content-flex-end">
                                        <button class = "read-more">
                                            <a href="${articles[j].link}">Read more</a>
                                        </button>
                                    </div>
                                </div>
                            
                            
                        </article>`;
                }
                
                html += `</section></main> ${footer()}`;
                return html;
            }
        }    
}