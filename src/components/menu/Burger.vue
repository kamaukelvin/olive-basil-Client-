<template>
  <div class="col-md-4">
    <div class="card mb-5">
      <img :src="burger.src" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title name">{{ burger.name }}</h5>
        <h6 class="card-subtitle additives mb-2 text-muted">
          {{ burger.additives }}
        </h6>
        <p class="card-text price">
          {{ burger.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Burger',
  props: ['burger']
};
</script>

<style lang="css"></style>
