//  Prototype | View.js
function navigationMenu()
{
    // Iterating over the pages and return the navigation

    const nav = model.nav;

    html = /*HTML*/`<nav class = "${nav.cls}">`;

    for (let i = 0; i < nav.pages.length; i++)
    {
        const page = nav.pages[i];
        if (page.type === "button")
        {
            html += /*HTML*/ `<button class='nav-item bg-brown' onclick="navigateView('${nav.pages[i].name}')">${nav.pages[i].title}</button>`;
        }
        else if (page.type === "link")
        {
            html += /*HTML*/ `<a href="${nav.pages[i].href}" target="_blank" rel="external"><div class="${page.cls}">${nav.pages[i].title}</div></a>`;
        }
    }

    html += /*HTML*/ `</nav>`;

    return html;
}

function header()
{
    //  Header
    let html = /*HTML*/`
    <header class="${model.header.cls}">
        <div class="flex-row-align-items-center">
            <div class="flex-wrap-row-justify-flex-start ">
                <img class="${model.header.image.cls}" alt="${model.header.image.alt}" src="${model.header.image.src}">
            </div>
            <div class="flex-column-align-items-center">
                <h1 class="h1">${model.header.title}</h1>
                <h4>${model.header.description}</h4>
            </div>
            <div></div>
        </div>
        
        ${navigationMenu()}
    </header>`;
    
    return html;
}

function footer()
{
    //  Footer
    const footer = model.footer;

    let html = /*HTML*/ `
    <footer class="${footer.cls}">
    <nav class="footer-container flex-wrap-row-justify-flex-end">`;

    for (let i = 0; i < footer.nav.length; i++)
    {
        const link = footer.nav[i];
        html += /*HTML*/ `
        
            <a href="${link.href}" target="_blank" rel="external">
                <div class="${link.cls}">${link.name}</div>
            </a>`;
    }
    html += /*HTML*/ `</nav></footer>`;

    return html;
}