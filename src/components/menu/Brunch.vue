<template>
  <div class="col-md-4" id="brunch">
    <div class="card mb-5">
      <img :src="brunch.src" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title name">{{ brunch.name }}</h5>
        <h6 class="card-subtitle additives mb-2 text-muted">
          {{ brunch.additives }}
        </h6>
        <p class="card-text price">
          {{ brunch.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brunch',
  props: ['brunch']
};
</script>

<style lang="css"></style>
