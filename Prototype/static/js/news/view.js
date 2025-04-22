//  News view
function newsView(arg, id)
{
        //  Fetch the model
        
        const pages = model.data.nav.pages;
        console.log(arg, id);
        
        //  Ensure that the page exists
        for( let i = 0; i < pages.length; i++)
        {
    
            if (pages[i].name == arg && id == pages[i].id)
            {
                let html;
                const content = model.data.nav.pages[i].content;
                
                console.log("content", content);

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
                            <time datetime="${content.articles[j].date}">${content.articles[j].date}</time>
                            <h3>${content.articles[j].headline}</h3>
                            <p>${content.articles[j].lede}</p>
                            </article>`;
                }
                
                html += `</section></main> ${footer()}`;
                return html;
            }
        }    
}