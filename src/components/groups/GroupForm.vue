<template>
  <v-card>
    <v-card-title class="text-h5 grey lighten-2"> {{ modeText }}</v-card-title>

    <v-card-text class="pt-5">
      <v-text-field label="Название" class="pt-0" v-model="groupName"></v-text-field>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="red" text @click="$emit('close')">{{ $t('global.cancel') }}</v-btn>
      <v-btn color="primary" text @click="submitForm">{{ modeText }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    group: {
      type: String,
      required: false
    },
    isEditing: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      groupName: this.group,
    };
  },
  computed: {
    modeText() {
      if(this.isEditing) {
        return this.$t('global.editGroup');
      } else {
        return this.$t('global.addGroup');
      }
    }
  },
  methods: {
    submitForm() {
      this.$emit("formSubmitted", {title: this.groupName});
    },
  },
};
</script>
