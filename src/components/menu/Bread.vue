<template>
  <div class="col-md-4" id="breads">
    <div class="card mb-5">
      <img :src="bread.src" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title name">{{ bread.name }}</h5>
        <h6 class="card-subtitle additives mb-2 text-muted">
          {{ bread.additives }}
        </h6>
        <p class="card-text price">
          {{ bread.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bread',
  props: ['bread']
};
</script>

<style lang="css"></style>
