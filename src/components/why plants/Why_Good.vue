<template>
  <div>
    <section class="why-good">
      <div class="container">
        <!-- <div class="row">
          <div class="col-md-4">
            <p class="large-font">HEALTHY<br />CLEAN<br />EXCITING</p>
          </div>
          <div class="col-md-4">
            <div class="mid-content">
              <h2 class="curly">Healthy</h2>
              <p class="mid-text">
                What acts of kindness does a plant based diet offer:
              </p>
            </div>
            <ul class="mid-text">
              <li>
                <p>Decreased chance of HBP</p>
              </li>
              <li>
                <p>Reduced risk of heart disease</p>
              </li>
              <li>
                <p>Lower risk of diabetes</p>
              </li>
              <li>
                <p>Helps manage & Reduce kidney disease.</p>
              </li>
              <li>
                <p>Increases your energy levels</p>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h2></h2>
            <p></p>
          </div>
        </div> -->
        <div class="row">
          <div class="col-12 col-sm-4">
            <h1 class="why-title">
              <span class="d-inline d-sm-inline-block">HEALTHY</span>
              <span class="d-inline d-sm-inline-block">CLEAN</span>
              <span class="d-inline d-sm-inline-block">EXCITING</span>
            </h1>
          </div>

          <div class="col-12 col-sm-6 offset-sm-1 col-md-5">
            <div class="why-text">
              <hr />
              <h2 class="heading-curly">
                Healthy
              </h2>
              <h3 class="heading-text">
                What acts of kindness does a plant based diet offer:
              </h3>
              <ul class="heading-text-list">
                <li>Decreased chance of HBP</li>
                <li>Reduced risk of heart diseases</li>
                <li>Lower risk of diabetes</li>
                <li>Helps manage & Reduce kidney disease</li>
                <li>Increases your energy levels</li>
              </ul>
            </div>
          </div>

          <div class="col-12 col-sm-6 offset-sm-3 col-md-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 62 63"
              class="why-arrow d-none d-sm-block"
            >
              <path
                d="M14.98.5a1.5 1.5 0 11.29 2.99c-4.22.4-7.42.93-9.48 1.49 12.6 6.07 27.01 15.15 37.63 23.98 13.3 11.07 20 20.95 17.55 28.52a1.5 1.5 0 01-.2.42c-3.93 5.43-10.76 5.66-20.05 1.08a1.5 1.5 0 011.32-2.69c8 3.94 13.24 3.83 16.15.04l.05-.2c1.46-5.79-4.36-14.38-15.88-24.14l-.86-.72C31.3 22.77 17.46 14.02 5.25 8.05c.88 1.5 2.1 3.47 3.63 5.86l1.38 2.12 1.08 1.64a1.5 1.5 0 11-2.5 1.66C3.65 11.5 1.01 7.03.67 5.36c-.1-.49.05-.99.4-1.35 1.5-1.55 5.4-2.57 12-3.31L14 .6z"
              ></path>
            </svg>

            <p class="why-text-highlight">
              <span class="highlight">
                MEGA BONUS: It's been scientifically proven that healthy plant
                based diets play a role in reversing chronic diseases.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Why_Good',
  components: {},
};
</script>

<style lang="css" scoped>
.why-good {
  margin-top: -70px;
  background-image: url('../../assets/img/why-good-1.png');
  overflow: hidden;
  width: 100%;
  height: 578px;
  background-repeat: no-repeat;
  background-size: cover cover;
  position: relative;
}

.why-title {
  font-size: 7.9rem;
  color: #9fd455;
  font-weight: 900;
  line-height: 1.1;
  text-align: right;
}

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
  font-size: 2.5rem;
  line-height: calc(2.8rem + 0.675rem);
  margin-top: 3rem;
}

.highlight {
  background-color: #79c039;
}

.why-good::after {
  display: block;
  content: '';
  clear: both;
}
</style>
