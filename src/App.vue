<template>
  <v-app>
    <component :is="layout"></component>
  </v-app>
</template>

<script>
import EmptyLayout from "./components/layout/EmptyLayout.vue";
import MainLayout from "./components/layout/MainLayout.vue";

export default {
  components: {
    EmptyLayout,
    MainLayout,
  },
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || "Empty") + "-layout";
    },
  },
  created() {
    this.$store.dispatch('setLang', (localStorage.getItem('lang') || 'en'))
  }
};
</script>
