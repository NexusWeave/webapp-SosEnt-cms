

<template>
  
  <header>
    <Header :data = 'headerData' />
  </header>
  <main>

  </main>
  <footer>
    <Footer :data = 'footerData' />
  </footer>
</template>
<script setup>

import { RouterLink, RouterView } from 'vue-router'

import Header from './views/utils/HeaderView.vue';
import Footer from './views/utils/FooterView.vue';

const headerData = {
  cls: 'flex-row-align-items-center',
  
  content:
  {
    cls: 'flex-column-align-items-center',
    title: 'Sosial Entreprenørskap i Norge',
  },
  nav :
  {
    cls: '',
    type: 'router',
    id: 'main-nav',
    menu: 
    [
      {
        id: 1,
        to: '/',
        title: 'Om oss',
        type: 'router',
        cls: 'nav-link',
      },
      {
        id: 2,
        to: '/aktuelt',
        
        title: 'Aktuelt',
        cls: 'nav-link',
      },
      {
        id: 3,
        type: 'router',
        cls: 'nav-link',
        to: '/fordeler',
        title: 'Medlems fordeler',
        
      },
      {
        id: 4,
        type: 'router',
        cls: 'nav-link',
        to: '/medlemskap',
        title: 'Medlemskap',
        
      }
    ],
  },
  media: {

    cls: 'flex-wrap-row-justify-flex-start',
    images:
    [
      {
        cls: 'logo-container ',
        alt: 'SosEnT Logo',
        src: '/SosEnT-favicon.png',
      }
    ],
  },
}

const footerData = {
  nav :
  {
    cls: '',
    type: 'external',
    id: 'footer-nav',
    menu: 
    [
      {
        type: 'link',
        name : "Personvern",
        cls: "link nav-item",
        href: "https://docs.google.com/document/d/1AkTTNQei6pJWvRYc_VT93Rspk3MTJn_ai_TsHqXi88U/edit?usp=sharing",
      },
      {
        
        cls: "nav-item",
        type: 'external',
        title: "NO 935 329 930",
        href: "https://www.proff.no/selskap/sosent-norge/oslo/medlemsorganisasjoner/IFGVD6Y10PU"
      },
    ],
  },
}
</script>


