//  About us view

function aboutUsView(arg)
{

    //  Fetch the model
    const pages = model.nav.pages;

    //  Ensure that the page exists
    for( let i = 0; i < pages.length; i++)
    {

        if (pages[i].name == arg)
        {
            const content = model.nav.pages[i].content;
            let html = `
                ${header()}
                <main>
                    <article>
                        <div class 'banner'>
                            <img class='banner-image' alt='${content.banner.alt}' src='${content.banner.src ? content.banner.src : null}' />
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