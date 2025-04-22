//  About us view

function aboutUsView(arg, id)
{

    //  Fetch the model
    const pages = model.data.nav.pages;

    //  Ensure that the page exists
    for (let i = 0; i < pages.length; i++)
    {
        console.log(pages[i].name, arg, id, pages[i].id);

        if (pages[i].name === arg && id === pages[i].id)
        {
            const content = model.data.nav.pages[i].content;
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
            
            html += `</article> </main> ${footer()}`;
            return html;
        }
    }
}