<template>
  <v-list-item class="groups" :link="true" :to="groupLink">
    <v-list-item-icon><v-icon>mdi-group</v-icon></v-list-item-icon>
    <v-list-item-title>{{ group.title }}</v-list-item-title>
    <v-btn icon @click.prevent="deleteGroup"><v-icon>mdi-delete</v-icon></v-btn>
    <edit-group :group-id="group.id" :id="group.id"></edit-group>
  </v-list-item>
</template>

<script>
import EditGroup from "./EditGroup.vue";

export default {
  props: {
    group: {
      type: Object,
      required: true
    }
  },
  components: {
    EditGroup,
  },
  computed: {
    groupLink() {
      return "/group/" + this.group.id;
    },
  },
  methods: {
    async deleteGroup() {
      try {
        await this.$store.dispatch("groups/remove", this.group.id);
        if (this.$route.params.id === this.group.id) {
          this.$router.replace("/");
        }
        this.$error(this.$t('msg.groupDeleted'))
      } catch(e) {
        throw new Error(e);
      }
    },
  },
};
</script>

<style>
.groups button {
  opacity: 0;
}
.groups:hover button {
  opacity: 1;
}
</style>
