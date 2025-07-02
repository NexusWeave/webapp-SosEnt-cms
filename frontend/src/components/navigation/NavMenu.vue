<template>

    <nav :cls="data.cls">
        <RouterLink v-if ="data.type=== 'router'" v-for="(link, i) in nav"
            :key="i"
            :to="link.href"
            :class="link.cls" >{{ link.name }}</RouterLink>

        <Link v-if="data.type === 'link'" :data="link" v-for="link in data.menu"/>
    </nav>
</template>

<script setup>
import Link from './Anchor.vue';
import Button from './Button.vue';

import { RouterLink } from 'vue-router';
import { defineProps, reactive } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const data = reactive(props.data);
const nav = data.menu;

console.log("NavigationMenu loaded with data: ", data.menu);
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
