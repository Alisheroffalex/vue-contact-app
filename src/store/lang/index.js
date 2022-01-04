import i18n from '../../plugins/i18n'

export default {
  state() {
    return {
      lang: ''
    }
  },
  actions: {
    setLang({commit}, locale = 'en') {
      localStorage.setItem('lang', locale)
      i18n.locale = locale
      commit('setLang', locale)
    }
  },
  mutations: {
    setLang(state, locale) {
      state.lang = locale || 'en';  
    }
  },
  getters: {
    lang(state) {
      return state.lang
    }
  }
}
