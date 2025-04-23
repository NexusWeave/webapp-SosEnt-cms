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

                html = `
                    ${header()}
                    <main>
                        <section class = "${content.cls}">
                            <h2>${content.headline}</h2>`;

                for (let j = 0; j < content.articles.length; j++)
                {
                    html += `
                        <article class = "${content.articles[j].cls}">
                            <div class = "banner">
                                <img class = "banner-image" alt="${content.articles[j].banner.alt}" src="${content.articles[j].banner.src ? content.articles[j].banner.src : null}" />
                            </div>
                            <div class = "flex-wrap-coumn is-31">
                                <h3>${content.articles[j].headline}</h3>
                                <time datetime="${content.articles[j].date}">${content.articles[j].date}</time>
                                <p>${content.articles[j].lede}</p>
                            </div>
                            
                            </article>
                            <button class = "read-more">
                                <a href="${content.articles[j].link}">Read more</a>
                            </button>`;
                }
                
                html += `</section></main> ${footer()}`;
                return html;
            }
        }    
}