<template>
  <v-form v-model="valid" ref="form" @submit.prevent="handleSubmit">
    <h1>{{ $t('auth.loginFormTitle') }}</h1>

    <div class="auth-form">
      <div class="auth-form-text-fields">
        <v-text-field
          v-model="email"
          :label="$t('auth.emailLabel')"
          :rules="validations.email"
          required
        ></v-text-field>
      </div>
      <div class="auth-form-text-fields">
        <v-text-field
          v-model="password"
          type="password"
          :label="$t('auth.passwordLabel')"
          :rules="validations.required"
          required
        ></v-text-field>
      </div>
      <div class="auth-form-submit-btn d-flex justify-end">
        <v-btn type="submit" :loading="loading" color="primary">{{ $t('auth.loginBtnText') }}</v-btn>
      </div>

      <p class="text-caption mt-5 text-center">{{ $t('auth.noAccount') }} <router-link :to="{name: 'register'}">{{ $t('auth.register') }}</router-link></p>
      
      <lang-switchers></lang-switchers>
    </div>
  </v-form>
</template>

<script>
import LangSwitchers from '../../components/ui/LangSwitchers.vue'
import validations from '../../helpers/validations.js'

export default {
  components: {
    LangSwitchers
  },
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      validations,
      loading: false
    }
  },
  methods: {
    async handleSubmit() {
      if(!this.valid) {
        this.$refs.form.validate()
        return
      }

      try {
        this.loading = true
        await this.$store.dispatch('auth/login', {
          email: this.email,
          password: this.password
        })
        this.$router.push({name: 'home'})
      } catch(e) {
        this.$error(this.$t(`errors.${e.code}`))
        this.loading = false
      }
    }
  }
};
</script>
