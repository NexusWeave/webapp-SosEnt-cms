//  Vedtekter view
function vedtekterView(arg, id)
{
        //  Fetch the model
        const pages = model.data.nav.pages;

        for( let i = 0; i < pages.length; i++)
            {
                //  Ensure the correct page is selected
                if (pages[i].name == arg && id == pages[i].id)
                {
                    let html;
                    const data = model.data;
                    const content = data.nav.pages[i].content;
                    const nav = data.nav.pages[i];
                    
                    html = `${header()}<main>`;

                    //  Insert the carousel images

                    html += carouselView(data.carousel, model.app.currentCarosel, nav.content);
                    html += vedtekterContent(content.vedtekter) +`</main> ${footer()}`;

                    return html;
                }
            }
}

function carouselView(images, carousel, content)
{

    let html = `<section class = "${content.cls} flex-wrap-row-justify-center">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
         <ol class="carousel-indicators">`;

    //  Indicators
    for (let j = 0; j <= images.length; j++)
    {
        html+= `<li data-target="#myCarousel" data-slide-to="${j}"></li>`;
    }

    html += `</ol>
    <div class="carousel-inner">
        <div class="item active">
            <img alt="${carousel.alt ? carousel.alt : null}" src="${carousel.src ? carousel.src : null}">
        </div>`;

    //  Carousel images
    for (let j = 0; j < images.length; j++)
    {
        const image = images[j];

        html += `
            <div class="item">
                <img alt="${image.alt ? image.alt : null}" src="${image.src ? image.src : null}">
            </div>`;
    }

    html +=`
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
            </section>
        <section class = " bg-brown flex-wrap-row-align-items-center">`;

    return html;

}

function vedtekterContent(article)
{
    let html = '';

    //  Vedtekter content
    for (let j = 0; j < article.length; j++)
        {
            
            html += `<section class = "article-container">
            <article>
                <h3>${article[j].headline}</h3>`;

            for (let k = 0; k < article[j].paragraphs.length; k++)
            {
                html += `<p>${article[j].paragraphs[k]}</p>`;
            }
            html += `</article></section>`;
        }
        
        html += `</section>`;
    return html;
}