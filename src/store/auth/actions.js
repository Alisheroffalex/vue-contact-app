import firebase from 'firebase/compat/app'

export default {
  async login(_, {email, password}) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
      console.log(e)
      throw e
    }
  },
  async register({dispatch}, { name, email, password }) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const uId = await dispatch('getUId');
      await firebase.database().ref(`/users/${uId}/info`).set({
        name
      })
    } catch(e) {
      console.log(e)
      throw e;
    }
  },
  async getUId() {
    const user = await firebase.auth().currentUser;
    return user ? user.uid : null;
  },
  async logout({commit}) {
    await firebase.auth().signOut()
    commit('info/clearInfo', null , {root: true})
    
  }
}
