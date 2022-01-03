import firebase from 'firebase/compat/app';

export default {
  async create({dispatch}, data) {
    try{
      const uId = await dispatch('auth/getUId', null, {root: true})
      await firebase.database().ref(`/users/${uId}/groups/`).push(data);
      await dispatch('fetchGroups')
    } catch(e) {
      throw new Error(e);
    }
  },
  async fetchGroups({dispatch, commit}) {
    try{
      const uId = await dispatch('auth/getUId', null, {root: true})
      const groups = (await firebase.database().ref(`/users/${uId}/groups/`).once('value')).val();
      const groupsFormatted = groups ? Object.keys(groups).map(key => ({...groups[key], id: key})) : [];
      commit('setGroups', groupsFormatted)
    } catch(e) {
      throw new Error(e);
    }
  },
  async remove({dispatch}, id) {
    try{
      const uId = await dispatch('auth/getUId', null, {root: true})
      await firebase.database().ref(`/users/${uId}/groups/`).child(id).remove();
      dispatch('fetchGroups')
    } catch(e) {
      throw new Error(e);
    }
  },
  async update({dispatch}, {id, title}) {
    try{
      const uId = await dispatch('auth/getUId', null, {root: true})
      await firebase.database().ref(`/users/${uId}/groups/`).child(id).update({title});
      dispatch('fetchGroups')
    } catch(e) {
      throw new Error(e);
    }
  }
}
