// Updates the view based on the current page

function navigateView(view)
{
    //  Navigate to view
    model.app.currentPage = view;
    updateView();
}