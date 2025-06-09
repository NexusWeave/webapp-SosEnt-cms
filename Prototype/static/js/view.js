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

function footerView()
{
    //  Footer
    
    const footer = model.footer;
    const partners = model.data.partners;

    const nav = footer.nav;

    let html = /*HTML*/ `
    <footer class="${footer.cls}">
        ${footerPartners(partners)}
        <nav class="footer-container flex-wrap-row-justify-flex-end">
            ${footerNav(nav)}
        </nav>
    
    </footer>`;

    return html;
}
function footerNav(links)
{
    let html = '';
    for (let i = 0; i < links.length; i++)
    {
        const link = links[i];
        html += /*HTML*/ `
        
            <a href="${link.href}" target="_blank" rel="external">
                <div class="${link.cls}">${link.name}</div>
            </a>`;
    }
    return html;
}
function footerPartners(partners)
{
    if (partners && partners.length > 0)
    {
        let html = /*html*/`
            Våre samarbeidspartnere
            <section class="flex-wrap-row">`;

        for (let i = 0; i < partners.length; i++)
        {
            const partner = partners[i];
            console.log(partner);
            html += /*HTML*/ `
                <div class="partner">
                    <a href="${partner.href}" target="_blank" rel="external">
                        <img alt="${partner.logo.alt}" src="${partner.logo.src}">
                    </a>
                </div>`;
        }
        html += `</section>`;
        console.log(html)
        return html;
    }
    
    
}