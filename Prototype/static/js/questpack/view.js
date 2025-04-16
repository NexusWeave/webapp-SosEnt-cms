//  Questpack view
function questpackView(arg)
{
        //  Fetch the model
        const pages = model.nav.pages;

        //  Ensure that the page exists
        for( let i = 0; i < pages.length; i++)
        {
    
            if (pages[i].name == arg)
            {
                let html = `
                    ${header()}
                    <main>`;
                html += `</main> ${footer()}`;
                return html;
            }
        }    
}