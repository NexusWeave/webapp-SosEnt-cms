//  About us view

function aboutUsView(arg, id)
{

    //  Fetch the model
    const pages = model.data.nav.pages;

    //  Ensure that the page exists
    for (let i = 0; i < pages.length; i++)
    {

        if (pages[i].name === arg && id === pages[i].id)
        {

            const content = pages[i].content;
            const article = pages[0].content.articles;

            let html = `
                ${header()}
                <main class = "${model.main.cls}">
                    <h2>${content.headline}</h2>
                    <article class = "news-banner flex-wrap-row">`;
            
            //  News Banner
            for (let j = 0; j < article.length; j++)
            {
                html += `
                    <div class = "banner">
                        <img class = "banner-image" alt="${article[j].banner.alt}" src="${article[j].banner.src ? article[j].banner.src : null}" />
                    </div>
                    <div class = "flex-wrap-coumn is-31">
                        <h3>${article[j].headline}</h3>
                        <time datetime="${article[j].date}">${article[j].date}</time>
                        <p>${article[j].lede}</p>
                    </div>
                    <button class = "read-more">
                        <a href="${article[j].link}">Read more</a>
                    </button>`;
            }
            
            html += `</article>
                    <section class = "${content.cls}">`;
            
            //  News Content
            for(let j = 0; j < content.paragraphs.length; j++)
            {
                html +=`<p>${content.paragraphs[j]} </p>`
            }

            html += `</article><section class = "${content.cls ? content.cls : null} flex-wrap-column">`;

            //  Contact information
            const contact = content.contact;

            for (let j = 0; j < contact.content.length; j++)
           {
            const person = contact.content[j];
            
            html += `
                <div class = "${person.cls}">
                <h4>${content.text}</h4>
                <img class = "${person.image.cls}" alt="${person.image.alt}" src="${person.image.src ? person.image.src : null}" />
                <h3>${person.name}</h3>
                <h4>${person.title}</h4>    
                        Telefon : <a href = "tel:${person.phone}">${person.phone}</a><br>
                        E-post : <a href = "mailto:${person.email}">${person.email}</a>
                    </p></div>`;
            }

            html += `
                    </section>
                </main>
                ${footer()}`;

            return html;
        }
    }
}