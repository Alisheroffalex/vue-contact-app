import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

const fb = firebase.initializeApp({
  apiKey: "AIzaSyDZaBWzNKn1IVPcC8iIAXX2vc-VCGi8AuE",
  authDomain: "vue-contact-app-35b0f.firebaseapp.com",
  projectId: "vue-contact-app-35b0f",
  storageBucket: "vue-contact-app-35b0f.appspot.com",
  messagingSenderId: "1094615479603",
  appId: "1:1094615479603:web:8797ec807bb731b3acba46",
  measurementId: "G-00ZQ6J5TK5"
})

export default fb;
