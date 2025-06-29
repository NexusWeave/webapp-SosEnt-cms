<script setup>
import HelloWorld from './components/HelloWorld.vue'

function header()
{
    const logo = model.data.media.images.logo[0];

    let html = /*HTML*/`
        <header class="${model.header.cls}">
            <div class="flex-row-align-items-center">
                <div class="flex-wrap-row-justify-flex-start ">
                    <img class="${logo.cls}" alt="${logo.alt}" src="${logo.src}" />
                </div>
                <div class="flex-column-align-items-center">
                    <h1 class="h1">${model.header.title}</h1>
                    <h4>${model.header.description}</h4>
                </div>
                <div></div>
            </div>
        
        ${navigationMenu()}
    </header>`;

    return html;
}

function footerView()
{
    const footer = model.footer;
    const nav = footer.nav;

    let html = /*HTML*/ `
    <footer class="${footer.cls}">
        <nav class="footer-container flex-wrap-row-justify-flex-end">
            ${footerNav(nav)}
        </nav>
    
    </footer>`;

    return html;
}
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
