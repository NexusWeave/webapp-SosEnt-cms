<template>
    <section class="flex-column component-theme
">
    <section :class="['flex-wrap-row', 'component-theme',
      'flex-wrap-row-justify-center']">
        <address>
            <p v-for="addr in content.address" :key="addr.postal">
                {{ addr.msg }} {{ addr.address }}, {{ addr.postal }} <br/>
            </p>

        </address>
        <section class="flex-column"> 
            <Menu :data="menu" :cls="[['nav-bar', 'flex-column'],
                ['nav-list'],
                ['nav-item'],
                ['nav-link']]"/>
        </section>
    </section>
    <p>{{ content.copyRight }}</p>
    
    </section>
</template>

<script setup>

    import { generateHexID } from '@/utils/utils.js';
    import Menu from '@/components/navigation/NavMenu.vue';

  const menu =
    [
        {
            type: 'anchor',
            id: generateHexID(),

            anchor:
            {
                type: ['external'],
                label: "Personvern",
                href: '/media/files/documents/SosEnT-Norge-Personvern.pdf',
                
            },
        },
        {
            type: 'anchor',    
            id: generateHexID(),

            anchor:
            {
                type: ['external'],
                label: " Org nr : (935 329 930)",
                href: 'https://proff.no/selskap/sosent-norge/oslo/medlemsorganisasjoner/IFGVD6Y10PU',
            },
        }
    ];


  const content = 
  {
      copyRight: ' © alle rettigheter reservert av SosEnT Norge',
      address:
      [
        {
            postal: "0161 Oslo",
            msg: "Besøk oss i Oslo:",
            address: "Haakon VIIs gate 9."
        },
        {
            postal: "0114 Oslo",
            msg:"Send oss post til:",
            address: "co/ Samfunnsbedriftene, postboks 1378."
        }
      ],
      contact:
        {
            email: 'post@sosent.no',
            phone: '+47 22 20 88 00'
        }
    };

    //console.log("FooterView loaded with data: ", data);
</script>