<template>
  <div>
    <section class="beliefs">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="beliefs-content">
          <div class="row">
            <div class=" heading col-12 offset-sm-1 col-sm-6 col-md-5">
              <hr class="beliefs-hr" />
              <h2 class="beliefs-title">
                Our Beliefs
              </h2>
              <p class="beliefs-heading">
                Plants have the power to transform you & the planet.
              </p>
              <p class="beliefs-text">
                We are a plant based food distribution service that's focused on
                promoting clean healthy eating while doing it in an
                environmentally sustainable way, & in the meantime making plants
                fun.
              </p>
              <ul class="beliefs-text-list">
                <li class="beliefs-text">
                  We believe in breaking boundaries &amp; pushing past limits.
                </li>
                <li class="beliefs-text">
                  We're not doing what's typical, we're doing what works for
                  you.
                </li>
                <li class="beliefs-text">
                  We believe trees don't grow overnight & habits take
                  practice.<br class="d-none d-lg-block" />
                  Big changes start with small seeds.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="actions pt-5 pb-5">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="action-content">
          <div class="row">
            <div class="col-12">
              <hr class="beliefs-hr middle" />
              <h2 class="beliefs-title middle">
                Our Actions
              </h2>
              <p class="beliefs-heading">
                It's sticking through the hard times when the going gets tough &
                you fall off but get back on that matters most.
              </p>
              <p class="beliefs-text">
                We hope that our product can make a small difference in the way
                we think about food, while supporting the local farmers &
                contributing to making our planet a more sustainable home for
                all living creatures.
              </p>
              <p class="beliefs-text">
                We're pro-plant, not anti-animal.
              </p>
              <p class="beliefs-text">
                Our philosophy is that you should eat what you love, but eat
                more plants.
              </p>
              <span class="slogan">Hakuna Matata!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Beliefs',
  components: {},
};
</script>

<style lang="css" scoped>
.beliefs {
  background-image: url('../../assets/img/beliefs.png');
  overflow: hidden;
  width: 100%;
  height: 749px;
  background-repeat: no-repeat;
  background-size: cover cover;
  background-position-x: 50%;
  background-position-y: 100%;
  position: relative;
}

.heading {
  margin-top: 8rem;
}

.beliefs-hr {
  width: 270px;
  margin-bottom: 40px;
  height: 2px;
  background: #e68618;
}

.beliefs-title {
  margin-bottom: 10px;
  font-family: var(--curly-font);
  color: #e68618;
  font-size: 8.6rem;
  font-weight: 400;
  text-align: left;
}
.beliefs-heading {
  color: #444;
  font-size: 3.1rem;
  line-height: calc(3.7rem + 0.25rem);
  font-family: var(--main-font);
  font-weight: 500;
  font-feature-settings: 'lnum';
  font-variant-numeric: lining-nums;
  margin: 0 0 1.25rem;
}

.beliefs-text {
  color: #444;
  font-size: 1.9rem;
  font-family: var(--content-font);
  line-height: calc(1.9rem + 0.75rem);
  margin-bottom: 0.5rem;
}

.beliefs-text-list {
  color: #444;
  font-size: 1.9rem;
  font-family: var(--content-font);
  line-height: calc(1.9rem + 0.75rem);
  margin-bottom: 1rem;
  margin-left: 2rem;
}

.actions {
  background-color: #d2f79f;
  text-align: center;
}

.middle {
  text-align: center;
  margin: 0 auto;
}
.slogan {
  margin-top: 10px;
  /* margin-bottom: 10px; */
  font-family: var(--curly-font);
  color: #e68618;
  font-size: 8.6rem;
  font-weight: 400;
  text-align: left;
}
</style>
