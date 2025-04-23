//  Prototype | View.js
function navigationMenu()
{
    // Iterating over the pages and return the navigation

    const nav = model.nav;

    html = /*HTML*/`<nav class = "${nav.cls}">`;

    for (let i = 0; i < nav.pages.length; i++)
    {
        html += /*HTML*/ `<button class='nav-item' onclick="navigateView('${nav.pages[i].name}')">${nav.pages[i].title}</button>`;
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
    const content = footer.content;
    let html = /*HTML*/ `
    <footer class="${footer.cls}">
        <div class="footer-container flex-wrap-column-align-items-center-justify-space-between">
            <a href="${footer.org.href}">NO ${footer.org.number}</a>
        </div>
    </footer>`;

    return html;
}