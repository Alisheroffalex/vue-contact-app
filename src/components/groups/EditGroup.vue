<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" @click.prevent v-on="on"
        ><v-icon>mdi-pencil</v-icon></v-btn
      >
    </template>

    <group-form
      @formSubmitted="submitForm"
      :group="groupName"
      @close="dialog = false"
      :isEditing="true"
    ></group-form>
  </v-dialog>
</template>

<script>
import GroupForm from "./GroupForm.vue";

export default {
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  components: {
    GroupForm,
  },
  data() {
    return {
      dialog: false,
      groupName: "",
    };
  },
  methods: {
    async submitForm(data) {
      try{
        await this.$store.dispatch("groups/update", {
          id: this.id,
          ...data,
        });
        this.$success(this.$t('msg.groupUpdated'))
        this.dialog = false;
      } catch(e) {
        throw new Error(e);
      }
    },
  },
  watch: {
    dialog() {
      const currentGroup = this.$store.getters["groups/getGroup"](this.id);
      this.groupName = currentGroup.title;
    },
  },
};
</script>
