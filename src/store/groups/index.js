import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state() {
    return {
      groups: []
    }
  }
}
