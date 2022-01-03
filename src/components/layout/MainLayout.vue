<template>
  <section>
    <the-header :isOpen="drawer" @toggleSidebar="toggleSidebarMenu"></the-header>
    <v-main>
      <v-row no-gutters>
        <the-sidebar :drawer="drawer"></the-sidebar>
        <the-content></the-content>
      </v-row>
    </v-main>
  </section>
</template>

<script>
import TheHeader from '../app/TheHeader.vue';
import TheSidebar from '../app/TheSidebar.vue';
import TheContent from '../app/TheContent.vue';

export default {
  components: {
    TheHeader,
    TheSidebar,
    TheContent
  },
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    toggleSidebarMenu() {
      this.drawer = !this.drawer
    },
  },
  async created() {
    await this.$store.dispatch('groups/fetchGroups')
    await this.$store.dispatch('info/fetchInfo')
  }
}
</script>
