<template>
  <div>
    <section class="why-clean mb-5">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="why-clean-content">
          <div class="row">
            <div class="col-12 col-sm-6 offset-sm-6 col-md-5">
              <div class="why-text">
                <hr />
                <h2 class="heading-curly">
                  Clean
                </h2>
                <h3 class="heading-text">
                  Let’s keep it green and clean because eating more plants is
                  better for the planet, too.
                </h3>
                <ul class="heading-text-list">
                  <li>
                    The Carbon foot print of beef is about 20 times more per
                    gram of protein than it is for beans. Why not eat 1 less
                    burger a week?
                  </li>
                  <li>
                    It takes 151 litres of water, on average, to produce 500gm
                    of veggies. It takes 47 Times more water to produce the
                    equivalent amount of beef.
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 offset-sm-5 col-md-5">
              <div>
                <p class="why-text-highlight">
                  <span class="highlight">
                    DID YOU KNOW : Our meal service system has a smaller carbon
                    footprint than equivalent meals bought from a store?
                    Hmmn...</span
                  >
                  <br />
                  <span class="highlight">
                    Each person can reduce the amount of green house gases that
                    their diet contributes to climate change by up to 60% by
                    eating more plants. Cool Right?
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Why_Clean',
  components: {},
};
</script>

<style lang="css" scoped>
.why-clean {
  background-image: url('../../assets/img/why-good-2.png');
  overflow: hidden;
  width: 100%;
  height: 689px;
  background-repeat: no-repeat;
  background-size: cover cover;
  position: relative;
}

/* .why-title {
  font-size: 7.9rem;
  color: #9fd455;
  font-weight: 900;
  line-height: 1.1;
  text-align: right;
} */

.why-text hr {
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

.heading-text {
  color: #444;
  font-size: 3.6rem;
  line-height: calc(3.7rem + 0.25rem);
  font-family: var(--main-font);
  font-weight: 500;
  font-feature-settings: 'lnum';
  font-variant-numeric: lining-nums;
  margin: 0 0 1.25rem;
}
.heading-text-list {
  color: #444;
  font-size: 1.9rem;
  font-family: var(--content-font);
  line-height: calc(1.9rem + 0.75rem);
  margin-bottom: 1rem;
  margin-left: 5rem;
}

.why-arrow {
  width: 110px;
  height: 110px;
  margin-top: -10px;
  margin-left: -180px;
  fill: #55880d;
  position: absolute;
  transform: rotate(160deg);
}

.why-text-highlight {
  font-family: var(--main-font);
  color: #fff;
  font-size: 2rem;
  margin-top: 2rem;
}

.highlight {
  background-color: #55880d;
}
</style>
