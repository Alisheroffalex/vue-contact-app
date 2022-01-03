<template>
  <div class="text-center" :class="type">
    <a href="#" @click.prevent="setLang('en')" :class="{active: this.$i18n.locale === 'en'}">English</a> |
    <a href="#" @click.prevent="setLang('ru')" :class="{active: this.$i18n.locale === 'ru'}">Русский</a>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
    }
  },
  methods: {
    setLang(locale) {
      this.$store.dispatch("setLang", locale);
    },
  },
};
</script>

<style scoped>
.whiteLangs a {
  color: #fff !important;
}
.v-application a {
  color: #000;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: .5s;
}

.v-application a:hover,
.v-application a.active {
  background-color: rgba(0,0,0,.1);
}
</style>
