//  Vedtekter controller



function next()
{
    //  fetch the images
    const sources = model.data.carosel;
    let Carosel = model.app.currentCarosel;

    //  Swap through the images
    for (let i = 0; i < sources.length; i++)
    { 
        //  Get the length of the array
        const length = sources.length - 1;

        //  Ensure the path points to the image
        if (sources[i].src.includes(Carosel.src))
        {
             //  Update the index
            i = (i < length) ?  i + 1: 0;

            //  Update variables with next media
            Carosel.alt = (i > length) ?  sources[i].alt : sources[i].alt;
            Carosel.src = (i > length) ?  sources[i].src : sources[i].src;
            Carosel.caption = (i > length) ? sources[i].caption : sources[i].caption;
            
            console.log(sources[i].src);
        }
    }
    console.log(Carosel);
};

function prev()
{
    //  fetch the images
    const sources = model.data.carosel;
    let Carosel = model.app.currentCarosel;

    //  Swap through the images
    for (let i = 0; i < sources.length; i++)
    { 
        //  Get the length of the array
        const length = sources.length - 1;

        //  Ensure the path points to the image
        if (sources[i].src.includes(Carosel.alt))
        {
            //  Update the index
            i = (i - 1 < 0) ? length : i-1;

            //  Update variables with next media
            Carosel.alt = ( i < length) ?  sources[i].alt : sources[i].alt;
            Carosel.src = (i < length) ? sources[i].src : sources[i].src;
            Carosel.caption = (i < length) ? sources[i].caption : sources[i].caption;
        }
    }
};