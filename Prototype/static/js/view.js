//  Prototype | View.js

function index() {
    const app = document.querySelector('#app');

    app.innerHTML = /* HTML */ `
    <header>
        ${header()}
    </header>
    <main>
        ${main()}
    </main>
    `;
}

function header()
{
    //  Initializing the variables
    const header = modal.header;

    let html = /* HTML*/`
    <div class="${header.cls ? header.cls : null}">
        <div class="${header.image.cls ? header.image.cls : null}">
            <img  src="${header.image.src ? header.image.src : null}" alt="${header.image.alt ? header.image.alt : null}" class="logo" />
            <h1>${header.title}</h1>
        </div>
        <nav class="${header.nav.cls ? header.nav.cls : null}">`;

    for (let i = 0; i < header.nav.pages.length; i++)
    {
        //  Fetching the navigation
        const navigation = header.nav.pages;

        html += /* HTML */`
        <div class="nav-item">
            <button class='' OnClick="${navigation[i].func}">${navigation[i].title}</button>
        </div>`;

        //  Debugging
        console.log(navigation[i].name);

    }

    html += /* HTML */`</nav></div>`;
    return html;

}

function main()
{
    //  Fetching the current page context
    const currentPage = modal.currentPage;

    switch (currentPage)
    {
        case "sosent-nyheter":
            return indexPage();

        case "questpack":
            return questpackPage();

        case "omoss":
            return aboutUsPage();

        case "vedtekter":
            return vedtekterPage();
    }
}
function footer()
{
    let html;

    html.innerHTML = /* HTML*/`
        <div class="footer-container">
            <span class="text-muted">Place sticky footer content here.</span>
        </div>`;
    return html;
}

//  Run the main function
index();