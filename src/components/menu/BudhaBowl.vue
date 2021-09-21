<template>
  <div class="col-md-4">
    <div class="card mb-5">
      <img :src="budhabowl.src" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title name">{{ budhabowl.name }}</h5>
        <h6 class="card-subtitle additives mb-2 text-muted">
          {{ budhabowl.additives }}
        </h6>
        <p class="card-text price">
          {{ budhabowl.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BudhaBowl',
  props: ['budhabowl']
};
</script>

<style lang="css"></style>
