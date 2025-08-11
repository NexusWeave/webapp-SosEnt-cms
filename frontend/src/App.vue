<template>
<header>
    <Header :data="data.header"
      :cls="[['flex-wrap-row-align-items-end','component-theme'],
      'logo-container', ['nav-bar', 
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
      'flex-wrap-row-justify-flex-end'],]"
      :menu="data.footer.menu"/>
  </footer>

</template>

<script setup>
  import { reactive, computed, onMounted} from 'vue';
  import { RouterView } from 'vue-router';

  import Header from './views/utils/HeaderView.vue';
  import Footer from './views/utils/FooterView.vue';

  import { generateHexID } from './utils/utils';
  import { mediaStore } from '@/stores/media-store.js';


  const media = mediaStore();
  const isMedia = computed(() => {return !!media.isLoaded});
  //console.warn("Media store loaded: ", isMedia.value);
  const personvern = computed(() => {
    return {

      type: 'anchor',
      anchor:
      {
        type: ['external'],
        label: "Personvern",
        href: '/media/files/documents/SosEnT-Norge-Personvern.pdf',
        id: generateHexID(),
      },
    };
  });

  const organization = computed(() => {
    return {
      type: 'anchor',    
      id: generateHexID(),

      anchor:
      {
        type: ['external'],
        label: " Org nr : (935 329 930)",
        href: 'https://proff.no/selskap/sosent-norge/oslo/medlemsorganisasjoner/IFGVD6Y10PU',
      },
    };
  });

  const logo = {
    type: 'anchor',
    anchor:
    {
      href: '/',
      id: generateHexID(),

        img:
        {
          type: 'png',
          alt: 'SosEnT Logo',
          cls: ['img-container', 'logo-img'],
          src: '/media/images/logo/SosEnT-logo.png',
        }
      }
  };

  const data = reactive({
    header:
    {
    
      content:
        {
          cls: ['flex-column-align-items-center'],
          title: 'Sosial Entreprenørskap i Norge',
          text: 'Landsforeningen for Sosiale Etreprenører, sammen for et sterkere og inkluderende fjerde sektor',
      },

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
          href: '/fordeler',
          id: generateHexID(),
          label: 'Medlemsfordeler',
        },*/
        {
          type: 'router',
          id: generateHexID(),
          href: '/medlemskap',
          label: 'Medlemskap',
        },
      ],

      logo:
      [
        logo,
      ],
    },
    footer:
    {
      copyRight: ' © alle rettigheter reservert av SosEnT Norge',
      menu:      
      [
        personvern.value,
        organization.value,
      ],
    }});
  //console.warn("App loaded with data: ", media, personvern.value);
</script>
