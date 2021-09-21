<template>
  <div class="top">
    <TopStrip />
    <div class="container mt-5">
      <center class="my-5">
        <h1 class="price-title">Point of Sale Procedure</h1>
        <p class="price-text">
          Awesome recipes and the exact right amount of ingredients delivered
          straight to your door. <br />
          Customize your Meal.
        </p>
      </center>
      <ServingPlans />
    </div>
  </div>
</template>

<script>
import ServingPlans from '@/components/pricing/ServingPlans';
import TopStrip from '@/components/partials/TopStrip';
export default {
  name: 'Pricing',
  components: {
    TopStrip,
    ServingPlans,
  },
};
</script>
<style lang="css" scoped>
.top {
  margin-top: 9.5rem;
}

.price-title {
  font-family: var(--main-font);
  font-size: 4rem;
  font-weight: 500 !important;
}

.price-text {
  font-family: var(--content-font);
  font-size: 1.7rem;
  font-weight: 400;
}
</style>
