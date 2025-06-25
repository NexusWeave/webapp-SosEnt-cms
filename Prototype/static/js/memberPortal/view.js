
function memberPortalView(id)
{
    //  Fetch the model
    const data = model.data;
    const loggedIn = data.loggedIn;
    let html;

    if (loggedIn)
    {
        

        html = /*HTML*/`
            ${header()}
            <main>
            <nav class ="member-portal-nav flex-wrap-row-justify-center">
                <button onclick="benefitProgramView()">Fordels Program</button>
                <span class="nav-separator"></span>
                <button onclick="archiveContent()">Dokumenter</button>
            </nav>
            <div class='content-container'></div>
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

function benefitProgramView()
{

    const data = model.data;
    const pages = data.pages[2];
    const content = pages.content;
    const paragraphs = content.paragraphs;
    const n = paragraphs.length;

    let html = /*HTML*/`
            <section class = "content-header flex-wrap-column-align-items-center">
                <h2>${content.headline}</h2>
                <span>Sist oppdatert : <time datetime="${content.updated}">${content.updated}</time></span>
                <section class = "content-subtitle">`;
        //  Content
        for (let i = 0; i < n; i++)
        {
            const p = paragraphs[i];
            html += /*HTML*/`
                <p>${p}</p>
            `;
        }
        html += /*HTML*/`</section>`;

        console.log(html);

        document.querySelector('.content-container').innerHTML = html;
}

function archiveContent()
{
    const data = model.data;
    const media = data.media;
    const archive = media.files;

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
    document.querySelector('.content-container').innerHTML = html;
}