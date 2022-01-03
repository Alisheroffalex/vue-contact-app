import firebase from 'firebase/compat/app'

export default {
  async fetchInfo({dispatch, commit}) {
    try {
      const uId = await dispatch('auth/getUId', null, { root: true });
      const userInfo = (await firebase.database().ref(`/users/${uId}/info`).once('value')).val()
      commit('setInfo', userInfo)
    } catch(e) {
      throw new Error(e);
    }
  },
  async updateInfo({dispatch}, newInfo) {
    try{
      const uId = await dispatch('auth/getUId', null, { root: true });
      await firebase.database().ref(`/users/${uId}/info`).update(newInfo)
      await dispatch('fetchInfo')
    } catch(e) {
      throw new Error(e)
    }
  }
}
