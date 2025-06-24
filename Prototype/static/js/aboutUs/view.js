//  About us view
function aboutUsView(id)
{
    //  Fetch the model
    const data = model.data;
    const media = data.media;
    const nav = data.pages[id];
    const members = data.members;
    const contact = data.contact;
    
    const content = nav.content;
    const images = media.images;
    const documents = media.files;
    const partners = images.partners;

    let html = /*HTML*/ `
        ${header()}
        <main class = "${model.main.cls}">
            <section class="flex-wrap-row-justify-space-around">
                ${newsSection(data.articles, images)}
                ${aboutUsSection(content)}
                ${basicDocuments(documents)}
                ${contactSection(contact, images.contact)}
                ${MemberContent(members)}
                ${partnersSection(partners)}
            </section>
        </main>
        ${footerView()}`;

        return html;
}

function newsSection(article, images)
{
    let html = '';
    for (let i = 0; i < article.length; i++)
        {
            if (i % 3 === 0 && i !== 0)
            {
                break;
            }
            const image = findCategoryImage(article[i].category, images.news);
            html += /*HTML*/`
                    <section class="news-container">
                        <article class = "flex-wrap-coumn news-article">
                            <img class = "${image.cls}" alt="${image.alt ? image.alt : null}" src="${image.src ? image.src : null}"/>
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

function basicDocuments(documents)
{
    let html = '';
    html += `<section class="flex-wrap-row-justify-space-evenly">`;
    
    for (let i = 0; i < documents.length; i++)
    {
        const f = documents[i];
        html += /*HTML*/`
            <section class="${f.cls ? f.cls : "missing-class"}">
                <h3>${f.name}</h3>
                <p>Dato: ${f.date}</p>
                <p>${f.description}</p>
                <a href="${f.link}" download  rel="external">${f.name}</a>
           </section>`;
    }

    html += `</section>`;
    return html;
}

function contactSection(contact, images)
{
    const n = images.length;
    let html = '<section class = "flex-wrap-row-justify-space-evenly">';
    
    for (let i = 0; i < n; i++)
    {
        const image = images[i];
        const person = contact.content[i];
        
        html += /*HTML*/`
            <section class="contact">
                <section class="card bg-brown flex-row">
                    <img src="${image.src ? image.src : null}" class="${image.cls}" alt="${image.alt ? image.alt : null}">
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

function MemberContent(data)
{
    const memberships = data.memberships;

        let html = /*HTML*/`
        <section class = " flex-column">
            <section class = "flex-wrap-column-justify-center">
                <h3>${data.headline}</h3>`;

    if (data && memberships.length> 0)
    {
        html += /*HTML*/ `
        <table class = "member-table">
            <thead>
                <tr>
                    <th>Bedrifts Navn</th>
                </tr>
            </thead>`;

        for (let i = 0; i < memberships.length; i++)
        {
            const member = memberships[i];

            html += /*HTML*/`
            <tr>
                <td class="member-name">
                    <a href="${member.href}">
                        <h6>${member.name}</h6>
                    </a>
                </td>
            </tr>`;
        }
        html += /*HTML*/`</table>`;
        
    }
    else
    {
        html += /*HTML*/`
            <section class="no-content">
            <h3>${data.headline}</h3>
                <p>No content available.</p>`;
    }
    html += /*HTML*/`</section></section>`;
    return html;
}

function partnersSection(partners)
{
    let html = '<section class="flex-column">';
    html += '<h3>Våre samarbeids partnere</h3>';

    const n = partners.length;

    if (partners && n > 0)
    {
        html += '<section class="flex-wrap-row-justify-space-around partners-section">';
        for (let i = 0; i < n; i++)
        {
            const partner = partners[i];
            html += /*HTML*/`
                <div class="partner">
                    <a href= ${partner.href}>
                        <img src="${partner.src}" alt="${partner.alt}">
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

