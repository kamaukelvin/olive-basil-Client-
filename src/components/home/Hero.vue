<template>
  <div class="">
    <section class="hero-img">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1 class="hero-title">
              Join Us <br />
              For A <span class=""> Flavourful</span> <br />Adventure
            </h1>
            <p class="hero-text mt-5">
              Convenient, easy to order, yummy, plant-based <br />meals that
              will leave you wanting more!
            </p>
            <div class="hero-btn">
              <!-- <a class="btn mt-5">
                <span class="btn-text">Let's do This!</span>
                <icon name="chevron-right" color="#fff" />
              </a> -->
              <router-link to="/login">
                <TheButton msg="Let's do This!" />
              </router-link>
            </div>
          </div>
          <div class="col-md-6"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheButton from '@/components/partials/TheButton';
export default {
  name: 'Hero',
  components: {
    TheButton,
  },
};
</script>

<style lang="css" scoped>
.hero-img {
  background-image: url('../../assets/img/hero-img.png');
  padding: 10rem 1rem;
  overflow: hidden;
  width: 100%;
  height: 867px;
  background-repeat: no-repeat;
  background-size: cover cover;
  position: relative;
}

.hero-title {
  font-family: var(--main-font);
  font-size: 6.5rem;
  font-weight: 500;
  line-height: 6.8rem;
  font-feature-settings: 'lnum';
  font-variant-numeric: lining-nums;
  opacity: 1;
  animation: fade-in-up ease-in 0.5s 0.2s forwards;
}

.hero-title span {
  font-family: var(--curly-font);
  margin-left: 2rem;
  color: #e68618;
  font-size: 12.8rem;
}

.hero-text {
  font-family: var(--content-font);
  font-size: 2rem;
  font-weight: 400;
  opacity: 0;
  animation: fade-in-up ease-in 1s 1s forwards;
}

.hero-btn {
  opacity: 0;
  animation: fade-in-up ease-in 1.6s 1.6s forwards;
}

@keyframes fade-in-up {
  from {
    transform: translateY(3rem);
  }
  to {
    transorm: translateY(0);
    opacity: 1;
  }
}
</style>
