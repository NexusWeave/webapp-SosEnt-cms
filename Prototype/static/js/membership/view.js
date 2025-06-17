function membershipView(id)
{
    const page = model.nav.pages[id];

    const form = page.form;
    
    let html = /*HTML*/ `
        ${header()}
        <main class="${model.main.cls}">
            <h2 class="h2">${page.title}</h2>
            <section class="${page.cls}">
                ${aboutMemberShips(id)}
            </section>

            <section class="flex-wrap-row-justify-space-around">
                ${membershipForm(form)}
            </section>
        </main>
        ${footerView()}`;
    return html;
}
function aboutMemberShips(id)
{
    //const data = model.data.pages[id];
    //const content = data.content;
    lorem = "orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus justo a volutpat imperdiet. Aenean ipsum lectus, luctus non dictum at, fermentum non neque. Mauris lobortis, lectus ut congue consectetur, massa nulla sodales libero, eu venenatis lorem est quis felis. Pellentesque eleifend convallis ipsum porta porta. Quisque laoreet augue in justo dictum, et convallis mauris pretium. Duis sed erat neque. Integer hendrerit ligula ipsum, sed lacinia diam convallis id. Vestibulum imperdiet mauris efficitur purus vulputate, et mollis lectus hendrerit. Maecenas erat ligula, interdum in erat ac, aliquam hendrerit odio. Maecenas consequat purus nec leo egestas, non faucibus tortor ullamcorper.

Cras feugiat eros sed rhoncus luctus. Nullam in augue ut augue suscipit consectetur. Curabitur sit amet purus sagittis, dignissim lorem ut, efficitur metus. Morbi eleifend et felis a bibendum. Etiam commodo arcu vitae ultrices molestie. Praesent sed orci vel tellus congue ultrices. Aliquam pretium nibh in dolor pharetra, et eleifend nisi volutpat. Nulla rutrum tempus arcu et fermentum. Donec luctus euismod risus, quis tincidunt ipsum tempor et. Mauris sit amet blandit orci. Ut laoreet lacinia ex, id pharetra ipsum porta sed. Vivamus ullamcorper mattis dolor vel vehicula. Donec ullamcorper luctus enim id varius. Praesent porttitor erat felis, a tempor purus varius non. Nam sem ante, vestibulum a interdum sed, sodales aliquet urna. Maecenas egestas blandit orci, vitae lobortis nunc."
    return;
}
function membershipForm(form)
{
    const inputs = form.inputs;

    let html = /*HTML*/ `
                <form action="${form.action}" method="${form.method}">`;
    
    for (let i = 0; i < inputs.length; i++)
    {   

        const input = inputs[i];
        console.log(input);
        html += /*HTML*/ `
                <label for="${input.id}">${input.name}</label>
                <input type="${input.type ? input.type : 'text'}" id="${input.id}" name="${input.name}" placeholder="${input.placeholder}" class="${input.cls}" required="${input.required ? 'required' : ''}">`;
    }
    html += /*HTML*/ ` </form>`;
    return html;
}