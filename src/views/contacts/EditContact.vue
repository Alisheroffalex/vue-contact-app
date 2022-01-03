<template>
  <the-loader v-if="isLoading"></the-loader>
  <contact-form
    :current-contact="currentContact"
    :redirect="backPageLink"
    @formSubmitted="saveUserData"
    v-else
  ></contact-form>
</template>

<script>
import ContactForm from '../../components/contacts/ContactForm.vue'
import TheLoader from '../../components/app/TheLoader.vue'

export default {
  components: {
    ContactForm,
    TheLoader
  },
  data() {
    return {
      isLoading: true,
      currentContact: {}
    }
  },
  props: ["id"],
  methods: {
    async saveUserData(data) {
      await this.$store.dispatch("contacts/updateContact", {
        data,
        id: this.currentContact.id,
      });
      this.$success(this.$t('msg.contactUpdated'))
      this.$router.replace("/contact/" + this.currentContact.id);
    },
  },
  computed: {
    backPageLink() {
      return "/contact/" + this.currentContact.id;
    },
  },
  async mounted() {
    this.currentContact = await this.$store.dispatch('contacts/fetchContact', this.id)
    this.isLoading = false
  }
};
</script>
