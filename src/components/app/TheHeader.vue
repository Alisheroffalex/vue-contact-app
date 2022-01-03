<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click.stop="$emit('toggleSidebar', !isOpen)"></v-app-bar-nav-icon>

    <router-link :to="{name: 'home'}" class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </router-link>

    <v-spacer></v-spacer>

    <lang-switchers class="mr-5" type="whiteLangs"></lang-switchers>

    <div class="d-flex align-center flex-row" v-if="username">
      <v-icon>mdi-account-circle</v-icon>
      <p class="mb-0 ml-2"><b>{{ username }}</b></p>
    </div>
    
  </v-app-bar>
</template>

<script>
import LangSwitchers from '../ui/LangSwitchers.vue';


export default {
  components: {
    LangSwitchers
  },
  props: {
    isOpen: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      sidebarOpen: this.isOpen
    }
  },
  computed: {
    username() {
      return this.$store.getters['info/userInfo'].name;
    }
  }
}
</script>
