<template>
  <v-col cols="2" :class="{ hidden: drawer }" class="pt-2">
    <div class="d-flex justify-center mt-3">
      <v-btn color="primary" :link="true" :to="{name: 'add-contact'}" large rounded
        ><v-icon>mdi-account</v-icon> {{ $t('global.addContact') }}</v-btn
      >
    </div>

    <hr class="mb-5 mt-5" />

    <v-list rounded nav dense>
      <v-list-item-group active-class="deep-purple--text text--accent-4">
        <v-list-item :link="true" :to="{ name: 'home' }" :exact="true">
          <v-list-item-icon><v-icon>mdi-contacts</v-icon></v-list-item-icon>
          <v-list-item-title>{{ $t('global.contacts') }}</v-list-item-title>
        </v-list-item>

        <v-list-item :link="true" :to="{ name: 'trash-page' }">
          <v-list-item-icon><v-icon>mdi-delete</v-icon></v-list-item-icon>
          <v-list-item-title>{{ $t('global.trash') }}</v-list-item-title>
        </v-list-item>

        <hr class="mb-5 mt-5" />

        <groups-list></groups-list>

        <hr class="mb-5 mt-5" />

        <v-list-item :link="true" :to="{ name: 'settings' }">
          <v-list-item-icon><v-icon>mdi-cog</v-icon></v-list-item-icon>
          <v-list-item-title>{{ $t('global.settings') }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>


    <div class="d-flex justify-center mt-3">
      <v-btn color="error" @click="logout" large rounded
        ><v-icon>mdi-logout</v-icon> {{ $t('global.logout') }}</v-btn
      >
    </div>

  </v-col>
</template>

<script>
import GroupsList from '../groups/GroupsList.vue'

export default {
  props: {
    drawer: {
      type: Boolean,
      required: false
    }
  },
  components: {
    GroupsList
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.replace({name: 'login'})
    }
  },
};
</script>

<style scoped>
.col-2 {
  transition: 0.5s ease;
  overflow: 1;
}
.col-2.hidden {
  flex: 0;
  width: 0;
  opacity: 0;
}

hr {
  border-top-color: rgba(0, 0, 0, 0.1);
}
</style>
