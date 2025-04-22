//  Vedtekter view
function vedtekterView(arg, id)
{
        //  Fetch the model
        const pages = model.data.nav.pages;

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
                                <h2>${content.headline}</h2>
                                <article class = "${content.cls}">
                                    <div class = "banner">
                                        <img class = "banner-image" alt="${content.banner.alt}" src="${content.banner.src ? content.banner.src : null}" />
                                    </div>
                                    <p>Rev. Årsmøte <time datetime="${content.updated}">${content.updated}</time></p>
                                `;
    
                    for (let j = 0; j < content.vedtekter.length; j++)
                    {
                        const article = content.vedtekter[j];
                        
                        html += `<h3>${article.headline}</h3>`;

                        for (let k = 0; k < article.paragraphs.length; k++)
                        {
                            html += `<p>${article.paragraphs[k]}</p>`;
                        }
                    }
                    
                    html += `</article></main> ${footer()}`;
                    return html;
                }
            }
}