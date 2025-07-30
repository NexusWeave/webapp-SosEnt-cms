<template>  
  <header>
    <Header :data="data.header"
      :cls="[['flex-wrap-column-justify-space-between','component-theme'],
      'flex-wrap-row', ['nav-bar', 
      'flex-wrap-row-align-items-center-justify-space-evenly'],
      'flex-column-align-items-center']" />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <Footer :data = 'data.footer'
      :cls="[['flex-wrap-row-align-center', 'component-theme',
      'flex-wrap-row-justify-space-between'], ['nav-bar',
      'flex-wrap-row-justify-flex-end']]"
      :menu="data.footer.menu"/>
  </footer>

</template>

<script setup>
import { reactive} from 'vue';
import { RouterView } from 'vue-router';

import Header from './views/utils/HeaderView.vue';
import Footer from './views/utils/FooterView.vue';
import { generateHexID } from './utils/utils';

const data = reactive({
  header:
    {
  
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
            type: 'router',
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
    copyRight: ' © alle rettigheter reservert av SosEnT Norge',
    menu:
    
    [
      {
        
        cls: ['nav-item'],
        label: "Personvern",
        type: ['anchor','external'],
        href: "/media/files/documents/SosEnT-Norge-Personvern.pdf",
      },
      {

        cls: ['nav-item'],
        type: ['anchor','external'],
        label: "NO 935 329 930",
        href: "https://proff.no/selskap/sosent-norge/oslo/medlemsorganisasjoner/IFGVD6Y10PU"
      },
    ],
  },
});
console.log("App loaded with data: ", data.footer, data.footer.menu);
</script>
