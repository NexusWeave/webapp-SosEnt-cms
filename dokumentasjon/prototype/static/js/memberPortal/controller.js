
function verifyCredentials(e)
{
    //    #   Verify the credentials of the existing user

    const data = model.data;
    
    const passKey = data.pages[2].credentials.password;

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