<template>
  <div>
    <span class="text-subtitle-1">{{ $t('global.groups') }}</span>

    <group-item
      v-for="group in groups"
      :key="group.id"
      :group="group"
    ></group-item>

    <add-group></add-group>
  </div>
</template>

<script>
import AddGroup from "./AddGroup.vue";
import GroupItem from "./GroupItem.vue";

export default {
  components: {
    AddGroup,
    GroupItem,
  },
  computed: {
    groups() {
      return this.$store.getters["groups/groups"];
    },
  },
};
</script>

<style scoped>
.groups button {
  opacity: 0;
}
.groups:hover button {
  opacity: 1;
}
</style>
