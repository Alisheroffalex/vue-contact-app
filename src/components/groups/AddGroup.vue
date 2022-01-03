<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-list-item @click="dialog = true" v-bind="attrs" v-on="on">
        <v-list-item-icon><v-icon>mdi-plus</v-icon></v-list-item-icon>
        <v-list-item-title>{{ $t('global.addGroup') }}</v-list-item-title>
      </v-list-item>
    </template>

    <group-form @formSubmitted="addGroup" @close="dialog = false"></group-form>
  </v-dialog>
</template>

<script>
import GroupForm from './GroupForm.vue'

export default {
  components: {
    GroupForm
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    async addGroup(data) {
      try{
        await this.$store.dispatch("groups/create", data);
        this.$success(this.$t('msg.groupCreated'))
        this.dialog = false;
      } catch(e) {
        throw new Error(e);
      }
    },
  },
};
</script>
