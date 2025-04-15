function main () {
    const app = document.getElementById('app');

}

function header()
{

}

function footer()
{
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = /* HTML*/`
        <div class="footer-container">
            <span class="text-muted">Place sticky footer content here.</span>
        </div>
    `;
    return footer;
}