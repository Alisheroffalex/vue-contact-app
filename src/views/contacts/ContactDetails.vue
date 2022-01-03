<template>
  <the-loader v-if="isLoading"></the-loader>
  <section v-else>
    <v-row no-gutters class="pt-5 mb-10">
      <v-col cols="5">
        <v-row>
          <v-col cols="1">
            <v-btn fab icon @click="$router.go(-1)">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-row class="align-center">
              <v-col cols="4">
                <div
                  class="profile-circle"
                  :style="{ 'background-color': circleColor }"
                >
                  <span>{{ initials }}</span>
                </div>
              </v-col>
              <v-col>
                <span class="text-h5">{{ fullname }}</span
                ><br />
                <span class="text-h6">{{ job }}</span>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="2" class="d-flex align-end">
            <div class="d-flex">
              <v-btn icon @click="toggleFavorite(id)"
                ><v-icon>{{ favIcon }}</v-icon></v-btn
              >
              <v-btn
                class="ml-2 mr-2"
                :link="true"
                :to="editPageLink"
                color="primary"
                >{{ $t('global.edit') }}</v-btn
              >
              <v-btn color="red" text @click="toggleTrash(id)" v-if="isActive"
                >{{ $t('global.delete') }}</v-btn
              >
              <v-btn color="primary" text @click="toggleTrash(id)" v-else
                >{{ $t('global.restore') }}</v-btn
              >
              <v-btn color="red" text @click="deleteContact(id)"
                >{{ $t('global.deleteTotally') }}</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <hr />
    <v-row no-gutters class="mt-5">
      <v-col cols="5">
        <v-card class="pa-2" width="800">
          <v-card-title>
            <span class="text-h6">{{ $t('global.contactDetails') }}</span>
          </v-card-title>
          <v-card-text>
            <div class="d-flex my-1">
              <v-icon class="mr-2">mdi-phone</v-icon>
              <a :href="phoneLink">{{ currentContact.phone }}</a>
            </div>
            <div class="d-flex my-1">
              <v-icon class="mr-2">mdi-email</v-icon>
              <a :href="emailLink">{{ currentContact.email }}</a>
            </div>
          </v-card-text>
        </v-card>
        <v-card class="mt-5 pa-2" v-if="groups.length" width="800">
          <v-card-title>
            <span class="text-h6">{{ $t('global.groups') }}</span>
          </v-card-title>
          <v-card-text>
            <div class="d-flex my-1">
              <v-chip
                v-for="group in groups"
                :key="group.id"
                class="ma-2"
                @click:close="removeGroup(group.id)"
                close
                >{{ group.title }}</v-chip
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import ContactDetails from "../../shared/mixins/ContactDetails";
import GroupChips from "../../shared/mixins/GroupChips";
import TheLoader from "../../components/app/TheLoader.vue";

export default {
  props: ["id"],
  mixins: [ContactDetails, GroupChips],
  components: {
    TheLoader,
  },
  data() {
    return {
      isLoading: true,
      currentContact: {},
    };
  },
  computed: {
    initials() {
      return this.currentContact.firstname[0];
    },
    circleColor() {
      return this.currentContact.color;
    },
    phoneLink() {
      return "tel:" + this.currentContact.phone;
    },
    emailLink() {
      return "mailto:" + this.currentContact.email;
    },
    editPageLink() {
      return "/edit-contact/" + this.currentContact.id;
    },
    isActive() {
      return this.currentContact.status === "published";
    },
  },
  async mounted() {
    this.currentContact = await this.$store.dispatch(
      "contacts/fetchContact",
      this.id
    );
    this.isLoading = false;
  },
};
</script>

<style scoped>
.profile-circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: #fff;
  font-size: 64px;
  pointer-events: none;
}

hr {
  border-top: 1px solid gainsboro;
}
</style>
