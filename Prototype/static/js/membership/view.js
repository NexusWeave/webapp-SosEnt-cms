function membershipView(id)
{
    const page = model.data.pages[id];
    
    let html = /*HTML*/ `
        ${header()}
        <main class="${model.main.cls}">
            <h2 class="h2">${model.nav.pages[id].title}</h2>
            <section class="${page.cls}">
                ${aboutMemberShips(page)}
            </section>

            <section class="${page.cls}">
                ${generateForm(id)}
            </section>
        </main>
        ${footerView()}`;
    return html;
}
function aboutMemberShips(data)
{
    let html = "";
    const content = data.content;
    
    for (let i = 0; i < content.paragraphs.length; i++)
    {
        const p = content.paragraphs[i];

        html += `<p>${p}</p>`;
    }

    return html;
}