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
            html += /*HTML*/ `<a class='${page.cls}' href="${nav.pages[i].href}" target="_blank" rel="external">${nav.pages[i].title}</a>`;
        }
    }

    html += /*HTML*/ `</nav>`;

    return html;
}

function header()
{
    //  Header
    let html = /*HTML*/ `
    <header class="${model.header.cls}">
        <div class="flex-wrap-row-align-items-center-justify-space-between">
            <img class="${model.header.image.cls}" alt="${model.header.image.alt}" src="${model.header.image.src}">
            <h1>${model.header.title}</h1>
        </div>
        ${navigationMenu()}
    </header>`;
    return html;
}

function footer()
{
    //  Footer
    const footer = model.footer;
    const navigation = footer.nav;

    let html = /*HTML*/ `
    <footer class="${footer.cls}">
    <nav class="footer-container flex-wrap-row-justify-flex-end">`;

    for (let i = 0; i < footer.nav.length; i++)
    {
        const link = footer.nav[i];
        html += /*HTML*/ `
            <a class="${link.cls}" href="${link.href}" target="_blank" rel="external">${link.name}</a>`;
    }
    html += /*HTML*/ `</nav></footer>`;

    return html;
}