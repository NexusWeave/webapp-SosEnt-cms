
function memberPortalView(id)
{
    //  Fetch the model
    const data = model.data;
    const loggedIn = data.loggedIn;
        
    if (loggedIn)
    {
        let html;
        const page = data.pages[id];
        const content = page.content;

        html = /*HTML*/`
            ${header()}
            <main>
                ${memberPortalContent(page)}
            </main> 
            ${footerView()}`;
                
        return html;
    }
    else
    {
        //  User is not logged in
        html = /*HTML*/`
            ${header()}
            <main>
                <h2>Logg deg på for å se fordelsprogramet</h2>
                ${generateForm(id)}
            </main>
            ${footerView()}`;

        return html;
    }
}

function memberPortalContent(data)
{
    const archive = data.archive;
    const content = data.content;

    let html = /*HTML*/`
    <section class = "content-container flex-wrap-column-align-items-center">
    `;

    if (content.paragraphs.length > 0)
    {
        html += /*HTML*/`
            <section class = "content-header flex-wrap-column-align-items-center">
            <h2>${content.headline}</h2>
            <span>Sist oppdatert : <time datetime="${content.updated}">${content.updated}</time></span>
            <section class = "content-subtitle">`;
        //  Content
        for (let i = 0; i < content.paragraphs.length; i++)
        {
            const p = content.paragraphs[i];
            html += /*HTML*/`
                <p>${p}</p>
            `;
        }
        html += /*HTML*/`</section>`;
    }

    html += archiveContent(archive);
    return html;
}

function archiveContent(archive)
{
    let html = /*HTML*/`
        <section class = "archive-container flex-wrap-column-align-items-center">
            <h2>Dokument Arkiv</h2>
            <p>Her finner du arkivfiler som er tilgjengelige for nedlasting.</p>
            <section class = "archive-content flex-wrap-row-justify-space-between">`;
    
    if (archive.length > 0)
    {
        for (let i = 0; i < archive.length; i++)
        {
            const f = archive[i];
            html += /*HTML*/`
            
                <article class = "archive-item flex-wrap-column">
                    <h3>${f.name}</h3>
                    <p>${f.description}</p>
                    <a href="${f.link}" download rel="external">${f.name}</a>
                    <p>${f.date}</p>
                </article>`;
        }
    }
    else
    {
        html += /*HTML*/`
            <article>
                <p>Ingen arkivfiler tilgjengelig.</p>
            </article>`;

    }
    return html;
}