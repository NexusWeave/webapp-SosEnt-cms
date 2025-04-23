//  Helper functions 

function next()
{
        /*
        Set the next image in the carosel
        @param {object} sources - The modal object
        @param {object} Carosel - The carosel object
        @param {string} Carosel.path - The path to the image
        @param {string} Carosel.alt - The alt text for the image
        @param {string} Carosel.caption - The caption for the image
        @param {string} Carosel.src - The source of the image
    */
    //  fetch the images
    const sources = modal.carosel;

    //  Swap through the images
    for (let i = 0; i < sources.length; i++)
    { 
        //  Get the length of the array
        const length = sources.length - 1;
        
        //  Ensure the path points to the image
        if (sources[i].src.includes(Carosel.alt))
        {
             //  Update the index
            i = (i < length) ?  i + 1: 0;

            //  Initializing the path to the image
            const path = Carosel.path;

            //  Update variables with next media
            Carosel.alt = (i > length) ?  sources[i].alt : sources[i].alt;
            Carosel.caption = (i > length) ? sources[i].caption : sources[i].caption;
            Carosel.source = (i > length) ? path + sources[i].src : path + sources[i].src;
        }
    }
};

function prev()
{
    /*
        Set the previous image in the carosel
        @param {object} sources - The modal object
        @param {object} Carosel - The carosel object
        @param {string} Carosel.path - The path to the image
        @param {string} Carosel.alt - The alt text for the image
        @param {string} Carosel.caption - The caption for the image
        @param {string} Carosel.src - The source of the image
    */
    //  fetch the images
    const sources = modal.carosel;

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

            //  Initializing the path to the image
            const path = Carosel.path;

            //  Update variables with next media
            Carosel.alt = ( i < length) ?  sources[i].alt : sources[i].alt;
            Carosel.caption = (i < length) ? sources[i].caption : sources[i].caption;
            Carosel.source = (i < length) ? path + sources[i].src : path + sources[i].src;

        }
    }
};