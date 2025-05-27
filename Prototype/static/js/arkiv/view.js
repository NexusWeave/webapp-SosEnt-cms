//  Vedtekter view
function arkivView(id)
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
            const content = data.nav.pages[i].content;
            const nav = data.nav.pages[i];

            html = /*HTML*/`
                ${header()}
                <main>
                    ${carouselView(data.carousel, model.app.currentCarosel, nav.content)}
                    ${arkivContent(content.vedtekter)}
                </main> 
                ${footer()}`;
            
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

function arkivContent(article)
{
    let html = /*HTML*/`
    <section class = " bg-brown flex-wrap-row-align-items-center">`;

    //  Vedtekter content
    for (let i = 0; i < article.length; i++)
    {
        html += /*HTML*/`
        <section class = "article-container">
            <article>
                
                <h3>${article[i].headline}</h3>`;
                
                for (let j = 0; j < article[i].paragraphs.length; j++)
                {
                    html += /*HTML*/`
                    <p>${article[i].paragraphs[j]}</p>`;
                }

            html += /*HTML*/`</article></section>`;
        }
        
        html += /*HTML*/`</section>`;
    return html;
}