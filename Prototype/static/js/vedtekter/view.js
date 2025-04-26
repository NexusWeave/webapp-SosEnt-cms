//  Vedtekter view
function vedtekterView(arg, id)
{
        //  Fetch the model
        const pages = model.data.nav.pages;

        //  Ensure that the page exists
        for( let i = 0; i < pages.length; i++)
            {
                //  Ensure the correct page is selected
                if (pages[i].name == arg && id == pages[i].id)
                {
                    let html;
                    const data = model.data;
                    const Carosel = model.app.currentCarosel;
                    const content = data.nav.pages[i].content;
                    
    
                    html = `
                        ${header()}
                        <main>
                            <section class = "${content.cls}">
                               <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">`;

                    //  Insert the carousel images
                    const images = data.carousel;
                                    
                    //  Indicators
                    for (let j = 0; j <= images.length; j++){html+= `<li data-target="#myCarousel" data-slide-to="${j}"></li>`;}

                    html += `</ol>
                    <div class="carousel-inner">
                        <div class="item active">
                            <img alt="${Carosel.alt ? Carosel.alt : null}" src="${Carosel.src ? Carosel.src : null}">
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
                        <h2>${content.headline}</h2>
                        <span>Rev. Årsmøte <time datetime="${content.updated}">${content.updated}</time></span>
                        <article class = "${content.cls}">`;
    
                    //  Vedtekter content
                    for (let j = 0; j < content.vedtekter.length; j++)
                    {
                        const article = content.vedtekter[j];
                        
                        html += `<h3>${article.headline}</h3>`;

                        for (let k = 0; k < article.paragraphs.length; k++)
                        {
                            html += `<p>${article.paragraphs[k]}</p>`;
                        }
                    }
                    
                    html += `</article></main> ${footer()}`;

                    return html;
                }
            }
}