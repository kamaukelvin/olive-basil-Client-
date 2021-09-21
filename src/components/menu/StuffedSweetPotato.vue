<template>
  <div class="col-md-4" id="stuffedsweetpotato">
    <div class="card mb-5">
      <img :src="stuffedsweetpotato.src" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title name">{{ stuffedsweetpotato.name }}</h5>
        <h6 class="card-subtitle additives mb-2 text-muted">
          {{ stuffedsweetpotato.additives }}
        </h6>
        <p class="card-text price">
          {{ stuffedsweetpotato.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StuffedSweetPotato',
  props: ['stuffedsweetpotato']
};
</script>

<style lang="css"></style>
