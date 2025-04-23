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
                    const data = model.data;
                    let Carosel = model.app.currentCarosel;
                    const content = data.nav.pages[i].content;
    
                    html = `
                        ${header()}
                        <main>
                            <section class = "${content.cls}">
                                <h2>${content.headline}</h2>
                                <figure class = "carosel-container is-60">    
                                    <img class = "is-100"alt="${Carosel.alt? Carosel.alt : null}" src="${Carosel.src ? Carosel.src : null}" />
                                    <figcaption class = "carosel-caption">${Carosel.caption ? Carosel.caption : null}</figcaption>
                                    <div class = "carosel-btn relative flex-wrap-row-justify-space-between">
                                        <button class = "prev" onclick="prev()">&#10094;</button>
                                        <button class = "next" onclick="next()">&#10095;</button>
                                    </div>                                     
                                </figure>

                                <article class = "${content.cls}">
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