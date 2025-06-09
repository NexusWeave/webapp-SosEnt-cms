//  Vedtekter view
function archiveView(id)
{
    //  Fetch the model
    const pages = model.data.nav.pages;

    for (let i = 0; i < pages.length; i++)
    {
        //  Ensure the correct page is selected
        if (id == pages[i].id)
        {
            let html;
            const data = model.data;

            const nav = data.nav.pages[i];
            const content = nav.content;
            const archive = nav.archive;

            html = /*HTML*/`
                ${header()}
                <main>
                    ${carouselView(data.carousel, model.app.currentCarosel, content)}
                    ${archiveContent(archive)}
                </main> 
                ${footerView()}`;
            
            return html;
        }
        
    }
}

function carouselView(images, carousel, content)
{

    let html = /*HTML*/`<section class = "${content.cls} flex-wrap-row-justify-center">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
         <ol class="carousel-indicators">`;

    //  Indicators
    for (let i = 0; i <= images.length; i++)
    {
        html += /*HTML*/`<li data-target="#myCarousel" data-slide-to="${i}"></li>`;
    }

    html += /*HTML*/`</ol>
    <div class="carousel-inner">
        <div class="item active">
            <img alt="${carousel.alt ? carousel.alt : null}" src="${carousel.src ? carousel.src : null}">
        </div>`;

    //  Carousel images
    for (let i = 0; i < images.length; i++)
    {
        const image = images[i];

        html += `
            <div class="item">
                <img alt="${image.alt ? image.alt : null}" src="${image.src ? image.src : null}">
            </div>`;
    }

    html += /*HTML*/`
        </div>
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <section class = "flex-wrap-column-align-items-center">
            <h2>${content.headline}</h2>
            <span>Rev. Årsmøte <time datetime="${content.updated}">${content.updated}</time></span>
            </section> `;

    return html;

}

function archiveContent(archive)
{
    let html = /*HTML*/`
    <section class = " bg-brown flex-wrap-row-align-items-center">`;

    //  Vedtekter content
    if (archive.length > 0)
    {
        for (let i = 0; i < archive.length; i++)
        {
            const f = archive[i];
            html += /*HTML*/`
            
                <article class = "archive-item flex-wrap-column">
                    <h3>${f.name}</h3>
                    <p>${f.description}</p>
                    <a href="${f.link}" download rel="external">${f.name}</a>
                    <p>${f.date}</p>
                </article>`;
        }
    }
    else
    {
        html += /*HTML*/`
            <article>
                <p>Ingen arkivfiler tilgjengelig.</p>
            </article>`;

    }
            
        html += /*HTML*/`</section>`;
    return html;
}