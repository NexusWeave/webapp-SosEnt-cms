//  About us view

function aboutUsView(arg, id)
{

    //  Fetch the model
    const data = model.data;
    const pages = model.nav.pages;

    //  Ensure that the page exists
    for (let i = 0; i < pages.length; i++)
    {
        // Ensure that the page exists
        if (pages[i].name === arg && id === pages[i].id)
        {
            const data = model.data;
            
            const article = data.articles;
            const content = data.nav.pages[i].content;

            let html = `
                ${header()}
                <main class = "${model.main.cls}">
                    <section class="flex-wrap-row-justify-space-around">
                    `;
            
            //  News articles
            for (let j = 0; j < article.length; j++)
            {
                if (j % 3 === 0 && j !== 0)
                {
                    break;
                }
                html += `
                        <section class="news-container">
                            <article class = "flex-wrap-coumn news-article">
                                <img class = "article-image" alt="${article[j].image.alt ? article[j].image.alt : null}" src="${article[j].image.src ? article[j].image.src : null}" />
                                <h3 class = "news-">${article[j].headline}</h3>
                                <time datetime="${article[j].date}">${article[j].date}</time>
                                <p>${article[j].lede}</p>
                                <a href="${article[j].link}">Read more</a>
                            </article>
                        </section>`;
            }
            
            html += `</section>
                    <h2>${content.headline}</h2>
                    <section class = "${content.cls}">
                        <section class = "flex-wrap-row-align-items-center-justify-space-around">`;
            
            //  About us content
            for(let j = 0; j < content.paragraphs.length; j++)
            {
               let aboutUs = content.paragraphs[j];

                html +=`<div class = "about-us">
                <h3 class="h5">${aboutUs.heading} </h5>`;

                for (let k = 0; k < aboutUs.paragraph.length; k++)
                {
                    html += `<p>${aboutUs.paragraph[k]}</p></div>`;
                }
            }

            html += `</div></section>
            <section class = "flex-wrap-row-justify-space-evenly">`;

            //  Contact information
            const contact = content.contact;

            for (let j = 0; j < contact.content.length; j++)
           {
            const person = contact.content[j];
            
            html += `
                <section class="contact flex-wrap-column">
                    <h3>${person.name}</h3>
                    <section class="card">
                        <img src="${person.image.src ? person.image.src : null}" class="card-img-top" alt="${person.image.alt ? person.image.alt : null}">
                        <section class="card-body">
                            <h5 class="card-text h5">${person.title}</h5>
                            <p class="card-text">   
                                Telefon : <a href = "tel:${person.phone}">${person.phone}</a><br>
                                E-post : <a href = "mailto:${person.email}">Send En E-post</a>
                            </p>
                        </section>
                    </section>
                </section>`;
            }

            html += `
                    </section>
                </main>
                ${footer()}`;

            return html;
        }
    }
}