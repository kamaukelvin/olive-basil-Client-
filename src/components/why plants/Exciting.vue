<template>
  <div>
    <section class="why-e">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="why-e-content">
          <div class="row">
            <div class="col-12 offset-sm-1 col-sm-5 col-lg-6">
              <hr class="why-e-hr" />
              <h2 class="heading-curly">
                Exciting
              </h2>
              <p class="why-e-heading">
                Adventure awaits your belly,the fun never ends here at Olive and
                Basil Ke. From, Customizing your own meals, Chef tips &amp;
                tricks, surprising gifts &amp; samples &amp; new projects.
                Everyone is included. Isn't that amazing?
              </p>
            </div>
            <div class="c-why-3__break"></div>
            <div class="col-12 offset-sm-1 col-sm-6 col-md-5">
              <p class="why-e-text">
                If you thought a plant based lifestyle was boring, we're about
                to blow your mind. The plant based revolution is here. Climate
                change be ware.
              </p>
            </div>
            <div class="c-why-3__break"></div>
            <div class="col-12 offset-sm-1 col-sm-6">
              <p class="why-e-highlight">
                <span class="highlight">
                  FUN FACT: They're over 20000 edible plants on the planet.
                  Let's see how many different ways to stir up some funky fresh
                  plant based fun.</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="why-e-veg"></section>
  </div>
</template>

<script>
export default {
  name: 'Exciting',
  components: {},
};
</script>

<style lang="css" scoped>
.why-e {
  background-image: url('../../assets/img/why-E.png');
  overflow: hidden;
  width: 100%;
  height: 666px;
  background-repeat: no-repeat;
  background-size: cover cover;
  position: relative;
}

.why-e-heading {
  color: #444;
  font-size: 3.1rem;
  line-height: calc(3.7rem + 0.25rem);
  font-family: var(--main-font);
  font-weight: 500;
  font-feature-settings: 'lnum';
  font-variant-numeric: lining-nums;
  margin: 0 0 1.25rem;
}

.why-e-text {
  color: #444;
  font-size: 1.9rem;
  font-family: var(--content-font);
  line-height: calc(1.9rem + 0.75rem);
  margin-bottom: 0.5rem;
}

.why-e-hr {
  width: 270px;
  margin-bottom: 40px;
  height: 2px;
  background: #e68618;
}

.heading-curly {
  margin-bottom: 10px;
  font-family: var(--curly-font);
  color: #e68618;
  font-size: 8.6rem;
  font-weight: 400;
  text-align: left;
}

.why-e-highlight {
  font-family: var(--main-font);
  color: #fff;
  font-size: 2.3rem;
  margin-top: 2rem;
}

.highlight {
  background-color: #55880d;
}
.why-e-veg {
  background-image: url('../../assets/img/why-E-veg.png');
  overflow: hidden;
  width: 100%;
  height: 422px;
  background-repeat: no-repeat;
  /* background-size: cover cover; */
  position: relative;
  /* margin-top: -22px; */
}
</style>
