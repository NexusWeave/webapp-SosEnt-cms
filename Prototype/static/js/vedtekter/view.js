//  Vedtekter view
function vedtekterView(arg)
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
                    <main class="${model.main.cls}">`;
                html += `</main> ${footer()}`;
                return html;
            }
        }    
}