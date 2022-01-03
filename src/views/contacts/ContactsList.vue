<template>
  <section>
    <contacts-list v-if="favContacts.length" :contacts="favContacts" :listTitle="$t('global.favs')"></contacts-list>
    <the-loader v-if="isLoading"></the-loader>
    <p class="text-center mt-5" v-else-if="!isLoading && !contacts.length">{{ $t('global.noRecords') }}</p>
    <contacts-list v-else :contacts="availableContacts" :listTitle="$t('global.contacts')"></contacts-list>
  </section>
</template>

<script>
import ContactsList from '../../components/contacts/ContactsList.vue'
import TheLoader from '../../components/app/TheLoader.vue'

export default {
  components: {
    ContactsList,
    TheLoader
  },
  data() {
    return {
      isLoading: true,
      contacts: []
    }
  },
  computed: {
    availableContacts() {
      return this.contacts.filter(contact => contact.status === 'published')
    },
    favContacts() {
      return this.availableContacts.filter(contact => contact.isFav)
    }
  },
  async mounted() {
    this.contacts = await this.$store.dispatch('contacts/fetchContacts');
    this.isLoading = false
  }
}
</script>
