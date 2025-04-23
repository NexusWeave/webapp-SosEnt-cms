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
            const contact = content.contact.content;
            let html = `
                ${header()}
                <main class = "${model.main.cls}">
                    <article>
                        <div class = "banner">
                            <img class = "banner-image" alt="${content.banner.alt}" src="${content.banner.src ? content.banner.src : null}" />
                        </div>

                        <h2>${content.headline}</h2>`;
            for(let j = 0; j < content.paragraphs.length; j++)
            {
                html +=`<p>${content.paragraphs[j]} </p>`
            }

            html += `</article>`;
            html += `
                <section class = "${content.cls}">
                    <p>${contact.text}<br>
                        Telefon : <a href = "tel:${contact.phone}">${contact.phone}</a><br>
                        E-post : <a href = "mailto:${contact.email}">${contact.email}</a>
                    </p>
                    <p>
                        Addresse :    
                        <address>
                            <a href ="https://maps.app.goo.gl/8U18DUTojJQa6onc9">${contact.address}, ${contact.postalCode} ${contact.city}</a>
                        </address>
                    </p>
                </section></main> ${footer()}`;
            return html;
        }
    }
}