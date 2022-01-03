import firebase from 'firebase/compat/app'

const randColors = ['red','blue','green','black','orange','purple']

export default {
  async create({ dispatch }, contactData ) {
    try{
      const uId = await dispatch('auth/getUId', null, { root: true });
      contactData.color = randColors[Math.round(Math.random() * randColors.length)]
      contactData.status = 'published';
      contactData.isFav = false;
      const contact = await firebase.database().ref(`/users/${uId}/contacts/`).push(contactData)
      return {...contactData, id: contact.key};
    } catch(e) {
      console.log(e)
      throw e;
    }
  },
  async fetchContacts({dispatch}) {
    try{
      const uId = await dispatch('auth/getUId', null, { root: true });
      const contacts = (await firebase.database().ref(`/users/${uId}/contacts/`).once('value')).val()
      return contacts ? Object.keys(contacts).map(key => ({...contacts[key], id: key})) : [];
    } catch(e) {
      console.log(e)
      throw e;
    }
  },
  async fetchTrashContacts({dispatch}) {
    const contacts = await dispatch('fetchContacts');
    return contacts.filter(contact => contact.status === 'trash');
  },
  async fetchContact({dispatch}, id) {
    try {
      const uId = await dispatch('auth/getUId', null, { root: true })
      const contact = (await firebase.database().ref(`/users/${uId}/contacts`).child(id).once('value')).val()
      return { ...contact, id }
    } catch(e) {
      console.log(e)
      throw e;
    }
  },
  async updateContact({dispatch}, {data, id}) {
    try {
      const uId = await dispatch('auth/getUId', null, { root: true })
      await firebase.database().ref(`/users/${uId}/contacts`).child(id).update(data)
    } catch(e) {
      console.log(e)
      throw e;
    }
  },
  async deleteContact({dispatch}, id) {
    try{
      const uId = await dispatch('auth/getUId', null, { root: true })
      await firebase.database().ref(`/users/${uId}/contacts`).child(id).remove();
    } catch(e) {
      console.log(e)
      throw e;
    }
  },
  async toggleStatus({dispatch}, id) {
    try {
      const currenctContact = await dispatch('fetchContact', id);
      currenctContact.status = currenctContact.status === 'published' ? 'trash' : 'published';
      await dispatch('updateContact', { data: currenctContact, id})
      return currenctContact.status;
    } catch(e) {
      console.log(e)
      throw e;
    }
  },
  async toggleFavorite({dispatch}, id) {
    try {
      const currenctContact = await dispatch('fetchContact', id);
      currenctContact.isFav = !currenctContact.isFav;
      await dispatch('updateContact', { data: currenctContact, id})
      return currenctContact.isFav;
    } catch(e) {
      console.log(e)
      throw e;
    }
  },
  async removeGroup({dispatch}, {id, groups}) {
    try {
      const currenctContact = await dispatch('fetchContact', id);
      currenctContact.groups = groups;
      await dispatch('updateContact', { data: currenctContact, id })
    } catch(e) {
      throw new Error(e);
    }
  }
}
