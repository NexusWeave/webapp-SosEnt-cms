//  About us view

function aboutUsView(arg, id)
{

    //  Fetch the model
    const pages = model.nav.pages;

    //  Ensure that the page exists
    for (let i = 0; i < pages.length; i++)
    {
        // Ensure that the page exists
        if (pages[i].name === arg && id === pages[i].id)
        {
            const data = model.data;
            const content = data.nav.pages[i].content;

            let html = `
                ${header()}
                <main class = "${model.main.cls}">
                    <section class="flex-wrap-row-justify-space-around">
                        ${newsSection(data.articles)}
                        ${aboutUsSection(content)}
                        ${contactSection(content.contact)}
                    </section>
                </main>
                ${footer()}`;

            return html;
        }
    }
}
function newsSection(article)
{
    let html = '';
    for (let i = 0; i < article.length; i++)
        {
            if (i % 3 === 0 && i !== 0)
            {
                break;
            }

            html += `
                    <section class="news-container">
                        <article class = "flex-wrap-coumn news-article">
                            <img class = "article-image" alt="${article[i].image.alt ? article[i].image.alt : null}" src="${article[i].image.src ? article[i].image.src : null}" />
                            <h5 class = "h5">${article[i].headline}</h5>
                            <time datetime="${article[i].date}">${article[i].date}</time>
                            <a class="link" href="${article[i].link}">Read more</a>
                        </article>
                    </section>`;
        };

    html += `</section>`;
    return html;
}

function aboutUsSection(content)
{

    let html = `
    <h2>${content.headline}</h2>
    <section class = "${content.cls}">
        <section class = "flex-wrap-row-align-items-center-justify-space-around bg-brown">`;

    for(let i = 0; i < content.paragraphs.length; i++)
    {
        let aboutUs = content.paragraphs[i];

        html +=`
            <div class = "about-us">
                <h4 class="h4">${aboutUs.heading} </h4>`;
                for (let j = 0; j < aboutUs.paragraph.length; j++)
                {
                    html += `<p>${aboutUs.paragraph[j]}</p></div>`;
                }
    }

    html += `</div></section>`;
    return html;
}

function contactSection(contact)
{
    let html = '<section class = "flex-wrap-row-justify-space-evenly">';
    for (let i = 0; i < contact.content.length; i++)
    {
        const person = contact.content[i];
         
        html += `
            <section class="contact">
                <section class="card bg-brown flex-row">
                    <img src="${person.image.src ? person.image.src : null}" class="card-img-top" alt="${person.image.alt ? person.image.alt : null}">
                    <section class="card-body">
                        <h3>${person.name}</h3>
                        <h5 class="card-text h5">${person.title}</h5>
                        <p class="card-text">
                            Telefon: 
                            <a class = "link"href="tel:${person.phone}">
                                ${person.phone}
                            </a>
                        </p>
                        <p class="card-text">
                            E-post :
                            <a href="mailto:${person.email}">
                                Send en E-post
                            </a>
                        </p>
                    </section>
                </section>
            </section>`;
    }

    html += `</section>`;

    return html;
}