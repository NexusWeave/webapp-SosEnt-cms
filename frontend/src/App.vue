<template>
<header>
    <Header />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <Footer />
  </footer>

</template>

<script setup>
  import { RouterView } from 'vue-router';
  import Header from './views/utils/HeaderView.vue';
  import Footer from './views/utils/FooterView.vue';

  //console.warn("App loaded with data: ", media, personvern.value);
</script>
