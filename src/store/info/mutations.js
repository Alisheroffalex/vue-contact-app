export default {
  setInfo(state, userInfo) {
    state.userInfo = userInfo;
  },
  clearInfo(state) {
    state.userInfo = {}
  }
}
