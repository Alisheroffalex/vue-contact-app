<template>
  <the-loader v-if="isLoading"></the-loader>
  <p v-else-if="!isLoading && !contactsInTrash.length" class="mt-4 text-center">
    {{ $t("global.noRecords") }}
  </p>
  <contacts-list
    v-else
    :contacts="contactsInTrash"
    :listTitle="$t('global.trash')"
  ></contacts-list>
</template>

<script>
import TheLoader from "../../components/app/TheLoader.vue";
import ContactsList from "../../components/contacts/ContactsList.vue";

export default {
  components: {
    TheLoader,
    ContactsList,
  },
  data() {
    return {
      isLoading: true,
      contacts: [],
    };
  },
  computed: {
    contactsInTrash() {
      return this.contacts.filter((contact) => contact.status === "trash");
    },
  },
  async mounted() {
    this.contacts = await this.$store.dispatch("contacts/fetchContacts");
    this.isLoading = false;
  },
};
</script>
