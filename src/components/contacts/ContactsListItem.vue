<template>
  <router-Link :to="contactPageLink" class="pt-3 pb-3">
    <v-row class="contacts-list-item-row">
      <v-col cols="2">
        <p>{{ fullname }}</p>
      </v-col>
      <v-col cols="2">
        <p>{{ currentContact.email }}</p>
      </v-col>
      <v-col cols="2">
        <p>{{ currentContact.phone }}</p>
      </v-col>
      <v-col cols="2">
        <p>{{ job }}</p>
      </v-col>
      <v-col cols="3">
        <span v-for="group in groups" :key="group.id" class="group-span">{{ group.title }} <v-icon class="remove-group" icon @click.prevent="removeGroup(group.id)">mdi-close</v-icon></span>
      </v-col>
      <v-col>
        <v-btn @click.prevent="toggleFavorite(currentContact.id)" icon color="orange"><v-icon>{{ favIcon }}</v-icon></v-btn>
        <v-btn @click.prevent="toggleTrash(currentContact.id)" icon :color="trashColor"><v-icon>{{ trashIcon }}</v-icon></v-btn>
      </v-col>
    </v-row>
  </router-Link>
</template>

<script>
import ContactDetails from '../../shared/mixins/ContactDetails.js';
import GroupChips from '../../shared/mixins/GroupChips.js'

export default {
  props: ['currentContact'],
  mixins: [ContactDetails, GroupChips],
  computed: {
    contactPageLink() {
      return '/contact/' + this.currentContact.id;
    },
    trashIcon() {
      return this.currentContact.status === 'published' ? 'mdi-delete' : 'mdi-delete-restore'
    },
    trashColor() {
      return this.currentContact.status === 'published' ? 'red' : 'primary'
    },
  }
}
</script>

<style scoped>
p {
  font-size: 16px;
  margin-bottom: 0;
}

.v-application a {
  display: block;
  color: #000;
  text-decoration: none;
  margin: 0;
}

.contacts-list-item-row {
  cursor: pointer;
  transition: .3s ease;
}

.contacts-list-item-row:hover {
  background-color: rgba(0,0,0,.09);
}
.group-span {
  background: grey;
  padding: 4px;
  border-radius: 2px;
  color: #fff;
  font-size: 12px;
  margin-right: 3px;
}
.remove-group {
  font-size: 14px;
  color: #fff;
}
</style>
