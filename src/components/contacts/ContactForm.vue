<template>
  <v-row class="pt-3">
    <v-col cols="6">
      <div
        class="d-flex justify-space-between align-center contact-form-header pb-3"
      >
        <router-link :to="redirect">
          <v-icon>mdi-arrow-left</v-icon>
        </router-link>
        <v-btn color="primary" elevation="2" @click="submitForm">{{ $t('global.save') }}</v-btn>
      </div>

      <div class="contact-form-body mt-10">
        <div class="contact-form-groups">
          <form-input
            icon="mdi-account"
            :label="$t('global.name')"
            v-model="currentContact.firstname"
            :rules="validations.required"
          ></form-input>
        </div>
        <div class="contact-form-groups">
          <form-input
            icon="mdi-empty"
            :label="$t('global.surname')"
            v-model="currentContact.lastname"
          ></form-input>
        </div>
        <div class="contact-form-groups">
          <form-input
            icon="mdi-email"
            :label="$t('global.email')"
            v-model="currentContact.email"
            :rules="validations.email"
          ></form-input>
        </div>
        <div class="contact-form-groups">
          <form-input
            icon="mdi-phone"
            :label="$t('global.phone')"
            v-model="currentContact.phone"
            :rules="validations.required"
          ></form-input>
        </div>
        <div class="contact-form-groups">
          <form-input
            icon="mdi-domain"
            :label="$t('global.company')"
            v-model="currentContact.company"
          ></form-input>
        </div>
        <div class="contact-form-groups">
          <form-input
            icon="mdi-empty"
            :label="$t('global.job')"
            v-model="currentContact.job"
          ></form-input>
        </div>
        <div class="contact-form-groups">
          <v-autocomplete
            class="ml-7"
            v-model="currentContact.groups"
            :items="allGroups"
            outlined
            filled
            :label="$t('global.groups')"
            multiple
            item-text="title"
            item-value="id"
          ></v-autocomplete>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import validations from "../../helpers/validations";
import FormInput from "../ui/FormInput.vue";

export default {
  props: {
    currentContact: {
      type: Object,
      required: false,
    },
    redirect: {
      type: String,
      required: false
    }
  },
  components: {
    FormInput,
  },
  data() {
    return {
      validations,
    };
  },
  methods: {
    submitForm() {
      const contactData = {
        ...this.currentContact,
      };
      delete contactData.id;

      this.$emit("formSubmitted", contactData);
    },
  },
  computed: {
    allGroups() {
      return this.$store.getters["groups/groups"];
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
