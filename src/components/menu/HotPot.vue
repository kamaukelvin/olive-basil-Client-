<template>
  <div class="col-md-4" id="hotpots">
    <div class="card mb-5">
      <img :src="hotpot.src" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title name">{{ hotpot.name }}</h5>
        <h6 class="card-subtitle additives mb-2 text-muted">
          {{ hotpot.additives }}
        </h6>
        <p class="card-text price">
          {{ hotpot.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotPot',
  props: ['hotpot']
};
</script>

<style lang="css"></style>
