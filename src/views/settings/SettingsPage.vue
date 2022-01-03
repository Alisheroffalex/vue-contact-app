<template>
  <v-row class="pt-3">
    <v-col cols="6">
      <div
        class="d-flex justify-space-between align-center contact-form-header pb-3"
      >
        <v-btn @click.prevent="$router.back()" icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn color="primary" elevation="2" @click="submitForm">{{ $t('global.save') }}</v-btn>
      </div>
      <div class="contact-form-body mt-10">
        <div class="contact-form-groups">
          <form-input
            icon="mdi-account"
            :label="$t('global.username')"
            v-model="userInfo.name"
            :rules="validations.required"
          ></form-input>
        </div>
      </div>
    </v-col>
  </v-row>
</template>


<script>
import FormInput from '../../components/ui/FormInput.vue'
import validations from '../../helpers/validations'

export default {
  components: {
    FormInput
  },
  data() {
    return {
      redirect: '/',
      validations
    }
  },
  computed: {
    userInfo() {
      return this.$store.getters['info/userInfo']
    }
  },
  methods: {
    async submitForm() {
      try {
        await this.$store.dispatch('info/updateInfo', { name: this.userInfo.name })
        this.$success('Данные изменены!')
      } catch(e) {
        throw new Error(e)
      }
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
