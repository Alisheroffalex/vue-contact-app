<template>
  <v-input
    append-icon="mdi-close"
    :prepend-icon="icon"
    @click:append="clearField"
  >
    <v-text-field :label="label" class="pt-0" :rules="rules" v-model="content"></v-text-field>
  </v-input>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false
    },
    rules: {
      type: Array,
      required: false,
    }
  },
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    clearField() {
      this.content = "";
    },
  },
  watch: {
    value(newValue) {
      this.content = newValue;
    },
    content() {
      this.$emit("input", this.content);
    },
  },
};
</script>
