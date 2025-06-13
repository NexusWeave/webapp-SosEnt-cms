//  Vedtekter controller



function next()
{
    //  fetch the images
    const sources = model.data.carosel;
    const Carosel = model.app.currentCarosel;

    //  Get the length of the array
    const length = sources.length;

    //  Swap through the images
    for (let i = 0; i < length; i++)
    { 
        //  Ensure the path points to the image
        if (sources[i].src === Carosel.src)
        {
             //  Update the index
            const n = (i + 1) % length;

            //  Update variables with next media
            Carosel.alt = sources[n].alt;
            Carosel.src = sources[n].src;
            Carosel.caption = sources[n].caption;
            
            //  Update the view
            updateView("arkiv");
            break;
        }
    }
};

function prev()
{
    //  fetch the images
    const sources = model.data.carosel;
    const Carosel = model.app.currentCarosel;

    //  Get the length of the array
    const length = sources.length;

    //  Swap through the images
    for (let i = 0; i < sources.length; i++)
    { 

        //  Ensure the path points to the image
        if (sources[i].src === Carosel.src)
        {
            //  Update the index
            const n = (i - 1 < 0) ? length - 1 : i - 1;

            //  Update variables with next media
            Carosel.alt = sources[n].alt;
            Carosel.src = sources[n].src;
            Carosel.caption = sources[n].caption;
            
            //  Update the view
            updateView("arkiv");
            break;
        }
    } 
};

function verifyCredentials(e)
{
    //    #   Verify the credentials of the existing user

    const data = model.data;
    
    const passKey = data.nav.pages[2].credentials.password;

    if (passKey !== e.target[0].value)
    {
        //  Show an error message
        alert("Feil passord. Prøv igjen.");
        return;
    }
    else
    {
        //  Set the loggedIn variable to true
        model.data.loggedIn = true;
        updateView();
        return;
    }
}

function handleLogin(e)
{
        //  Prevent the page from refreshing
        e.preventDefault();
        verifyCredentials(e);
}