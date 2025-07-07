

<template>
  
  <header>
    <Header :data = 'navData.header' />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <Footer :data = 'navData.footer' />
  </footer>
</template>
<script setup>
import { reactive} from 'vue';
import { RouterView } from 'vue-router';

import Header from './views/utils/HeaderView.vue';
import Footer from './views/utils/FooterView.vue';

const navData = reactive({
  header:
    {
      cls: 'flex-wrap-row-justify-space-between bg-color',
  
      content:
      {
        cls: 'flex-column-justify-center',
        title: 'Sosial Entreprenørskap i Norge',
      },
      nav:
      {
        cls: 'nav-bar bg-color flex-wrap-row-justify-space-evenly',
        type: 'router-link',
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
      media: 
      {

      cls: 'flex-wrap-row-justify-flex-start',
      images:
      [
        {
          cls: 'logo-container ',
          alt: 'SosEnT Logo',
          src: '/media/images/logo/SosEnT-logo.png',
        }
      ],
    },
  },
  footer:
  {
    type: 'link',
    cls: '.nav-bar flex-wrap-row-justify-flex-end',
    id: 'footer-nav',
    menu: 
    [
      {
        name : "Personvern",
        cls: "link nav-item",
        href: "/personvern",
      },
      {
        
        cls: "nav-item",
        type: 'external',
        name: "NO 935 329 930",
        href: "https://www.proff.no/selskap/sosent-norge/oslo/medlemsorganisasjoner/IFGVD6Y10PU"
      },
    ],
  },
});
</script>
