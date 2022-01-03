export default {
  computed: {
    groups() {
      const groupArr = [];

      if (this.currentContact.groups) {
        this.currentContact.groups.forEach((groupId) => {
          groupArr.push(this.$store.getters["groups/getGroup"](groupId));
        });
      }

      return groupArr;
    },
  },
  methods: {
    async removeGroup(groupId) {
      try {
        const groups = this.currentContact.groups.filter(gr => (gr !== groupId))
        await this.$store.dispatch('contacts/removeGroup', {
          id: this.currentContact.id,
          groups: groups
        })
        this.$success(this.$t('msg.contactNotGroup'))
        this.currentContact.groups = groups
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}
