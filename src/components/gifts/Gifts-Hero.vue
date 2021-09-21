<template>
  <section>
    <div class="gifts-hero">
      <div class="container">
        <div class="gifts-content">
          <h1 class="gifts-title">
            Have a peek at our Corner.
          </h1>
          <p class="gifts-text">
            Olive & Basil isn't just a company,<br class="d-xs-none" />
            we're a Lifestlye Brand.
          </p>
          <TheButton msg="Give Olive &amp; Basil" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TheButton from '@/components/partials/TheButton';
export default {
  name: 'GiftsHero',
  components: {
    TheButton,
  },
};
</script>

<style lang="css" scoped>
.gifts-hero {
  margin-top: 0;
  background-image: url('../../assets/img/gifts-hero-white.png');
  padding: 9rem 1rem;
  overflow: hidden;
  width: 100%;
  height: 380px;
  background-repeat: no-repeat;
  background-size: cover cover;
  position: relative;
}

.gifts-title {
  font-family: var(--main-font);
  font-size: 3.85rem;
  line-height: calc(3.85rem + 0.85rem);
}
.gifts-text {
  font-family: var(--content-font);
  font-size: 2rem;
  font-weight: 400;
}
</style>
