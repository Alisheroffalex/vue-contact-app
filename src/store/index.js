import Vuex from 'vuex'
import Vue from 'vue'
import auth from './auth/index'
import contacts from './contacts/index'
import groups from './groups/index'
import info from './info/index'
import lang from './lang/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    contacts,
    groups,
    info,
    lang
  }
})

export default store
