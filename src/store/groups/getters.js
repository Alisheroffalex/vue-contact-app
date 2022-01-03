export default {
  groups: (s) => s.groups,
  getGroup: (s) => (id) => s.groups.find(group => group.id === id)
}
