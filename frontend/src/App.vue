

<template>
  
  <header>
    <Header :data = 'headerData' />
  </header>
  <main>
    <router-view></router-view>
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
        href: '/',
        name: 'Om oss',
        type: 'router',
        cls: 'nav-link',
      },
      {
        id: 2,
        href: '/aktuelt',
        
        name: 'Aktuelt',
        cls: 'nav-link',
      },
      {
        id: 3,
        type: 'router',
        cls: 'nav-link',
        href: '/fordeler',
        name: 'Medlems fordeler',
        
      },
      {
        id: 4,
        type: 'router',
        cls: 'nav-link',
        href: '/medlemskap',
        name: 'Medlemskap',
        
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
        src: '/media/images/logo/SosEnT-favicon.png',
      }
    ],
  },
}

const footerData = {
  nav :
  {
    type: 'link',
    cls: '',
    id: 'footer-nav',
    menu: 
    [
      {
        name : "Personvern",
        cls: "link nav-item",
        href: "https://docs.google.com/document/d/1AkTTNQei6pJWvRYc_VT93Rspk3MTJn_ai_TsHqXi88U/edit?usp=sharing",
      },
      {
        
        cls: "nav-item",
        type: 'external',
        name: "NO 935 329 930",
        href: "https://www.proff.no/selskap/sosent-norge/oslo/medlemsorganisasjoner/IFGVD6Y10PU"
      },
    ],
  },
}
</script>


