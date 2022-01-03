<template>
  <section class="d-flex align-center justify-center">
    <v-progress-circular
      :size="50"
      :color="randColor"
      indeterminate
    ></v-progress-circular>
  </section>
</template>

<script>
export default {
  data() {
    return {
      colorVariations: ['primary','red', 'purple','green','amber'],
    };
  },
  computed: {
    randColor() {
      return this.colorVariations[Math.round(Math.random() * this.colorVariations.length)]
    }
  }
};
</script>

<style scoped>
.d-flex {
  margin: 20px 0;
}
</style>
