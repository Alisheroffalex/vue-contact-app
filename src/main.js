import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store/index'
import firebase from './plugins/firebase'
import messagesPlugin from './plugins/vue-toastification'
import i18n from './plugins/i18n'

Vue.use(messagesPlugin)

Vue.config.productionTip = false
let app;

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      vuetify,
      i18n,
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
