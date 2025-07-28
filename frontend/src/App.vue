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
import { generateHexID } from './utils/utils';

const navData = reactive({
  header:
    {
      cls: ['flex-wrap-column-justify-space-between','component-theme', 'flex-wrap-row'],
  
      content:
      {
        cls: ['flex-column-align-items-center'],
        title: 'Sosial Entreprenørskap i Norge',
        text: 'Landsforeningen for Sosiale Etreprenører, sammen for et sterkere og inkluderende fjerde sektor',
      },
      
      nav:
      {
        id: 'main-nav',
        type: 'router-link',
        cls: ['nav-bar', 'flex-wrap-row-justify-space-evenly'],
        
        menu: 
        [
          {
            href: '/',
            type: 'router',
            label: 'Om oss',
            cls: ['nav-link'],
            id: generateHexID(),
          },
          {
            href: '/aktuelt',
            label: 'Aktuelt',
            cls: ['nav-link'],
            id: generateHexID(),
          },
          /*{
            
            type: 'router',
            cls: ['nav-link'],
            href: '/fordeler',
            id: generateHexID(),
            label: 'Medlemsfordeler',
          },*/
          {
            type: 'router',
            cls: ['nav-link'],
            id: generateHexID(),
            href: '/medlemskap',
            label: 'Medlemskap',
          }
        ],
      },
      anchor: 
      {
        href: '/', 
        type: ['img'], 
        cls: ['flex-wrap-row-justify-flex-start'],

        img:
        {
          type: 'png',
          alt: 'SosEnT Logo',
          cls: ['img-container', 'logo-img'],
          src: '/media/images/logo/SosEnT-logo.png',
        }
    },
  },
  footer:
  {
    type: 'link',
    cls: ['nav-bar', 'flex-wrap-row-justify-flex-end',],
    id: 'footer-nav',
    section:
    {
      cls: ['flex-wrap-row-align-center', 'component-theme', 'flex-wrap-row-justify-space-between'],
      text: ' © alle rettigheter reservert av SosEnT Norge',
    },
    menu:
    [
      {
        
        cls: ['nav-item'],
        label: "Personvern",
        type: ['link','external'],
        href: "/media/files/documents/SosEnT-Norge-Personvern.pdf",
      },
      {

        cls: ['nav-item'],
        type: ['external'],
        label: "NO 935 329 930",
        href: "https://proff.no/selskap/sosent-norge/oslo/medlemsorganisasjoner/IFGVD6Y10PU"
      },
    ],
  },
});
</script>
