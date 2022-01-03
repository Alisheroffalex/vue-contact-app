<template>
  <the-loader v-if="isLoading"></the-loader>
  <p v-else-if="!isLoading && !contactsInGroup.length" class="mt-4 text-center">
    {{ $t("global.noRecords") }}
  </p>
  <contacts-list
    v-else
    :contacts="contactsInGroup"
    :listTitle="currentGroup.title"
  ></contacts-list>
</template>

<script>
import TheLoader from "../../components/app/TheLoader.vue";
import ContactsList from "../../components/contacts/ContactsList.vue";

export default {
  props: ["groupId"],
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
    currentGroup() {
      return this.$store.getters["groups/getGroup"](this.groupId);
    },
    contactsInGroup() {
      return this.contacts.filter((contact) => {
        if (contact.groups) {
          return (
            contact.groups.includes(this.groupId) &&
            contact.status === "published"
          );
        }
      });
    },
  },
  async mounted() {
    this.contacts = await this.$store.dispatch("contacts/fetchContacts");
    this.isLoading = false;
  },
};
</script>
