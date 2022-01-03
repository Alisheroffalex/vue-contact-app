import VueRouter from 'vue-router'
import Vue from 'vue'
import firebase from 'firebase/compat/app'
import ContactsList from '../views/contacts/ContactsList.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      isExact: true,
      meta: {
        layout: 'Main',
        authRequired: true,
      },
      component: ContactsList
    }, 
    {
      name: 'add-contact',
      path: '/add-contact',
      meta: {
        layout: 'Main',
        authRequired: true,
      },
      component: () => import('../views/contacts/AddContact.vue')
    },
    {
      name: 'contact-details',
      path: '/contact/:id',
      props: true,
      meta: {
        layout: 'Main',
        authRequired: true
      },
      component: () => import('../views/contacts/ContactDetails.vue')
    },
    {
      name: 'edit-contact',
      path: '/edit-contact/:id',
      props: true,
      meta: {
        layout: 'Main',
        authRequired: true
      },
      component: () => import('../views/contacts/EditContact.vue')
    },
    {
      name: 'trash-page',
      path: '/trash',
      meta: {
        layout: 'Main',
        authRequired: true
      },
      component: () => import('../views/trash/TrashPage.vue')
    },
    {
      name: 'group-page',
      path: '/group/:groupId',
      props: true,
      meta: {
        layout: 'Main',
        authRequired: true
      },
      component: () => import('../views/groups/GroupPage.vue')
    },
    {
      name: 'settings',
      path: '/settings',
      meta: {
        layout: 'Main',
        authRequired: true
      },
      component: () => import('../views/settings/SettingsPage.vue')
    },
    {
      name: 'login',
      path: '/login',
      meta: {
        layout: 'Empty'
      },
      component: () => import('../views/auth/LoginPage.vue'),
    }, 
    {
      name: 'register',
      path: '/register',
      meta: {
        layout: 'Empty'
      },
      component: () => import('../views/auth/RegisterPage.vue'),
    }, 
  ]
})

router.beforeEach((to, _, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.meta.authRequired;

  if(requireAuth && !currentUser) {
    next({
      name: 'login', 
      params: [{
        message: 'login'
      }]
    })
  } else {
    next();
  }
})

export default router;
