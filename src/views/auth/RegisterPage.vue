<template>
  <v-form v-model="valid" ref="form" @submit.prevent="handleSubmit">
    <h1>{{ $t('auth.registerFormTitle') }}</h1>

    <div class="auth-form">
      <div class="auth-form-text-fields">
        <v-text-field
          v-model="name"
          type="text"
          :label="$t('auth.nameLabel')"
          :rules="validations.required"
          required
        ></v-text-field>
      </div>
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
        <v-btn type="submit" :loading="loading" color="primary">{{ $t('auth.registerBtnText') }}</v-btn>
      </div>

      <p class="text-caption mt-5 text-center">{{ $t('auth.noAccount') }} <router-link :to="{name: 'login'}">{{ $t('auth.login') }}</router-link></p>

      <lang-switchers></lang-switchers>
    </div>
  </v-form>
</template>

<script>
import validations from '../../helpers/validations.js'
import LangSwitchers from '../../components/ui/LangSwitchers.vue'

export default {
  components: {
    LangSwitchers
  },
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      name: '',
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
        await this.$store.dispatch('auth/register', {
          name: this.name,
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
