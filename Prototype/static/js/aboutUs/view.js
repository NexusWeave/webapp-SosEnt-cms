//  About us view
function aboutUsView(id)
{
    //  Fetch the model
    const pages = model.nav.pages;

    //  Ensure that the page exists
    for (let i = 0; i < pages.length; i++)
    {
        // Ensure that the page exists
        if (id === pages[i].id)
        {
            const data = model.data;
            const contact = data.contact;
            const partners = data.partners;
            
            const nav = data.nav.pages[i];
            const content = nav.content;
            const documents = content.documentation;
            const constitution = content.constitution;

            let html = `
                ${header()}
                <main class = "${model.main.cls}">
                    <section class="flex-wrap-row-justify-space-around">
                        ${newsSection(data.articlesBanner)}
                        ${aboutUsSection(content)}
                        ${constitutionContent(constitution)}
                        ${basicDocuments(documents)}
                        ${contactSection(contact)}
                        ${partnersSection(partners)}
                    </section>
                </main>
                ${footerView()}`;

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
                    html += `<div><p>${aboutUs.paragraph[j]}</p></div>`;
                }
    }

    html += `</div></section>`;
    return html;
}

function constitutionContent(article)
{
    let html = /*HTML*/`
    <section class = " bg-brown flex-wrap-row-align-items-center">`;

    //  Vedtekter content
    for (let i = 0; i < article.length; i++)
    {
        html += /*HTML*/`
        <section class = "article-container">
            <article>
                
                <h3>${article[i].headline}</h3>`;
                
                for (let j = 0; j < article[i].paragraphs.length; j++)
                {
                    html += /*HTML*/`
                    <p>${article[i].paragraphs[j]}</p>`;
                }

            html += /*HTML*/`</article></section>`;
        }
        
        html += /*HTML*/`</section>`;
    return html;
}

function basicDocuments(documents)
{
    let html = '';

    html += documents.headline ? `<h3>${documents.headline}</h3>`: '';
    html += documents.description ? `<p>${documents.description}</p>` : '';
    html += `<section class="flex-wrap-row-justify-space-evenly">`;
    
    for (let i = 0; i < documents.files.length; i++)
    {
        const f = documents.files[i];
        html += `<section class="${f.cls ? f.cls : "missing-class"}">
                    <h3>${f.name}</h3>
                    <p>Dato: ${f.date}</p>
                    <p>${f.description}</p>
                    <a href="${f.link}" download  rel="external">${f.name}</a>
                    </section>`;
    }

    html += `</section>`;
    return html;
}

function contactSection(contact)
{
    let html = '<section class = "flex-wrap-row-justify-space-evenly">';
    for (let i = 0; i < contact.content.length; i++)
    {
        const person = contact.content[i];
         
        html += /*HTML*/`
            <section class="contact">
                <section class="card bg-brown flex-row">
                    <img src="${person.image.src ? person.image.src : null}" class="card-img-top" alt="${person.image.alt ? person.image.alt : null}">
                    <section class="card-body">
                        <h3>${person.name}</h3>
                        <h5 class="card-text h5">${person.title}</h5>
                        <p class="card-text">
                            Telefon: 
                            <a class = "link" href="tel:" + ${person.phone}>
                                ${person.phone}
                            </a>
                        </p>
                        <p class="card-text">
                            E-post :
                            <a href="mailto:" + ${person.email}>
                                Send en E-post
                            </a>
                        </p>
                    </section>
                </section>
            </section>`;
    }

    return html;
}

function partnersSection(partners)
{
    let html = '<section class="flex-column">';
    html += '<h3>Våre samarbeids partnere</h3>';

    if (partners && partners.length > 0)
    {
        html += '<section class="flex-wrap-row-justify-space-around partners-section">';
        for (let i = 0; i < partners.length; i++)
        {
            const partner = partners[i];
            html += /*HTML*/`
                <div class="partner">
                    <a href= ${partner.href}>
                        <img src="${partner.logo.src}" alt="${partner.logo.alt}">
                    </a>
                </div>`;
        }
        html += '</section>';
    }
    else
    {
        html += '<p>No partners available.</p>';
    }
    return html;
}
function boardMembers(board)
{
    // Mermaid hierarchy chart?
}

