export default {
  methods: {
    async toggleTrash(id) {
      const comingStatus = await this.$store.dispatch('contacts/toggleStatus', id)
      this.currentContact.status = comingStatus;
      if (comingStatus === 'published') 
        this.$success(this.$t('msg.contactRestored'))
      else 
        this.$error(this.$t('msg.contactInTrash'))
    },
    async deleteContact(id) {
      await this.$store.dispatch('contacts/deleteContact', id)
      this.$error(this.$t('msg.contactDeleted'))
      this.$router.replace('/')
    },
    async toggleFavorite(id) {
      const comingFavStatus = await this.$store.dispatch('contacts/toggleFavorite', id)
      this.currentContact.isFav = comingFavStatus;
      if (comingFavStatus) 
        this.$success(this.$t('msg.contactIsFav'))
      else 
        this.$error(this.$t('msg.contactIsntFav'))
    },
    removeGroup(groupId) {
      this.$store.dispatch("contacts/removeGroup", {
        groupId,
        userId: this.id,
      });
    },
  },
  computed: {
    fullname() {
      return this.currentContact.firstname + " " + this.currentContact.lastname;
    },
    job() {
      if (this.currentContact.company && this.currentContact.job) {
        return `${this.currentContact.job} ${this.$t('global.at')} ${this.currentContact.company}`;
      } else {
        return this.currentContact.job + this.currentContact.company;
      }
    },
    favIcon() {
      return (this.currentContact.isFav) ? 'mdi-star' : 'mdi-star-outline'
    },
  }
}
