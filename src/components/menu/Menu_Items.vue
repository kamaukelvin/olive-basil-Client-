<template>
  <section>
    <h2 class="category-title mb-5" id="salads">
      Salads
    </h2>
    <div class="row">
      <p v-for="(item, index) in items" :key="index" :item="item"></p>
      <!-- <Salad
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        @update-cart="updateCart"
      /> -->
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getItems');
  },
};
</script>

<style lang="scss" scoped></style>
