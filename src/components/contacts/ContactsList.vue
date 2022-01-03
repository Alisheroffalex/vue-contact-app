<template>
  <section class="mt-5">
    <h6 class="text-caption mb-5 grey--text">{{ listTitle }}</h6>
    <div class="contacts-list-table" v-if="contacts.length">
      <div class="contacts-list-header">
        <v-row>
          <v-col cols="2">
            <p>{{ $t('global.name') }}</p>
          </v-col>
          <v-col cols="2">
            <p>{{ $t('global.email') }}</p>
          </v-col>
          <v-col cols="2">
            <p>{{ $t('global.phone') }}</p>
          </v-col>
          <v-col cols="2">
            <p>{{ `${$t('global.company')} ${$t('global.and')} ${$t('global.job')}`}}</p>
          </v-col>
          <v-col cols="3">
            <p>{{ $t('global.groups') }}</p>
          </v-col>
        </v-row>
      </div>
      <div class="contacts-list-body">
        <contacts-list-item
          v-for="contact in contacts"
          :key="contact.id"
          :currentContact="contact"
        ></contacts-list-item>
      </div>
    </div>
    <div v-else class="d-flex justify-center">
      <p>{{ $t('global.noRecords') }}</p>
    </div>
  </section>
</template>

<script>
import ContactsListItem from "./ContactsListItem.vue";

export default {
  components: {
    ContactsListItem,
  },
  props: {
    contacts: {
      type: Array,
      required: true
    },
    listTitle: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped>
p {
  font-size: 14px;
  color: grey;
}
</style>
