<template>
  <contact-form redirect="/" @formSubmitted="saveContact" :currentContact="{}"></contact-form>
</template>

<script>
import ContactForm from '../../components/contacts/ContactForm.vue'

export default {
  components: {
    ContactForm
  },
  methods: {
    async saveContact(data) {
      try {
        await this.$store.dispatch("contacts/create", data);
        this.$success(this.$t('msg.contactAdded'))
        this.$router.push("/");
      } catch(e) {
        this.$error('Что то пошло не так')
        throw e;
      }
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}

.contact-form-header {
  border-bottom: 1px solid #ccc;
}
</style>
