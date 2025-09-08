<template>
    <div :class="['flex-wrap-row-align-items-end','component-theme',
      'logo-container']">

        <Menu :data="images" :cls="['logo-container', 'img-list', 'img-item', 'img-container']"/>
        <Menu :data="menu"/>
    </div>
    <section class="flex-column-align-items-center">
        <h1>{{ content.title }}</h1>
        <p>{{ content.text }}</p>
    </section>
</template>

<script setup>
    import { generateHexID } from '@/utils/utils.js';
    import Menu from '@/components/navigation/NavMenu.vue';

    const content =
    {
      title: 'Sosial Entreprenørskap i Norge',
      text: '- Landsforeningen for Sosiale Entreprenører',
    };

    const menu =
      [
        {
          href: '/',
          type: 'router',
          label: 'Om oss',
          id: generateHexID(),
        },
        {
          type: 'router',
          href: '/aktuelt',
          label: 'Aktuelt og Nyheter',
          id: generateHexID(),
        },
        {

          type: 'router',
          href: '/fordeler',
          id: generateHexID(),
          label: 'Medlemsfordeler',
        },
        {
          type: 'router',
          id: generateHexID(),
          href: '/medlemskap',
          label: 'Medlemskap',
        },
      ];

    const images =
    [
        {
            type: 'anchor',

            anchor:
            {
                href: '/',
                id: generateHexID(),

                img:
                {
                    type: 'png',
                    alt: 'SosEnT Logo',
                    src: '/media/images/logo/SosEnT-logo.png',
                }
            }
        }
    ]
    {
        
    };
    //console.log("HeaderView loaded with data: ", content, logo);
</script>