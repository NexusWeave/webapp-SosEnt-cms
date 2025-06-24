//  News view
function newsView(id)
{
    let html;
    const data = model.data;
    const content = data.pages[id].content;
    const images = data.media.images;


    html = /*HTML*/`
        ${header()}
        <main>
            <h2>${content.headline}</h2>
            <section class="${content.cls}">
                ${newsContent(content.articles, images.news)} 
            </section>
            <section class="news-archive">
                <h3>Nyhetsarkiv</h3>
                ${ArchiveNews(content.articles)}
            </section>

        </main>
        ${footerView()} `;
    return html;
}

function newsContent(articles, images)
{
    let html = '';

    const n = 3;
    for (let i = 0; i < articles.length; i++)
    {
        const image = findImage(articles[i].category, images);

        if (i < n )
        {
            html += /*HTML*/`
                <article class="${articles[i].cls}">
                    <img class="${image.cls}" alt="${image.alt}" src="${image.src ? image.src : null}" />
                    <div class="flex-wrap-column is-31">
                        <h3>${articles[i].headline}</h3>
                        <time datetime="${articles[i].date}">${articles[i].date}</time>
                        <p>${articles[i].lede}</p>
                        <div class = "flex-wrap-row-justify-content-flex-end">
                            <a class = "link" href="${articles[i].link}">Les mer</a>
                        </div>
                    </div>
                </article>`;
        }
    }
    return html;
}

function ArchiveNews(article)
{
    const n = 3;
    let html = '';

    if (article.length > n)
    {
         html += /*HTML*/`
            <table class="archive-table">`;

        for (let i = n; i < article.length; i++)
        {
            html += /*HTML*/`
                <tr>
                    <td>
                        <a href="${article[i].link}">${article[i].headline}</a>
                    </td>
                    <td>
                        Skrevet : <time datetime="${article[i].date}">${article[i].date}</time>
                    </td>
                </tr>`;
        }
        html += /*HTML*/`
            </table>`;
    }

    return html;
}