<template>
  <div>
    <section class="bg-img">
      <div class="container">
        <div class="content u-text--center u-text--sm-left">
          <h1
            class="curly c-heading c-heading--decorative-2 d-inline-block u-text--brand a-rise a-rise--1"
          >
            Eat more plants.
          </h1>

          <div class="a-rise a-rise--2">
            <h2 class="feature-title d-none d-sm-block">
              Good For You!<br />
              Greater For The Planet…
            </h2>
          </div>

          <p class="feature-text u-text--md u-text--lg-lg a-rise a-rise--3">
            And Incredibly Delicious.<br />
            What more could you want?
          </p>
        </div>
      </div>
    </section>
    <section class="bg-img2">
      <div></div>
    </section>
    <section class="bg-img2b">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <span class="curly">Personalize!</span>
            <h1 class="feature-title">
              Bring your Chef to your <br />living room!
            </h1>
            <p class="feature-text mt-5">
              Our meals have been carefully selected,<br />
              curated & ethically prepared by our<br />
              chefs & nutritionists.
            </p>
            <div class="btn-container">
              <!-- <a class="btn mt-5">Let's do This! </a>
              <icon name="chevron-right" color="#fff" /> -->
              <TheButton msg="Let's do This!" />
            </div>
          </div>
          <div class="col-md-6"></div>
        </div>
        <center class="btm-float">
          <span class="script">Mix</span> &
          <span class="script">Match</span> your meals
          <span class="script">according to</span> your <br />
          <span class="script">own taste buds</span> & get a
          <span class="script">combination you'll love.</span>
        </center>
      </div>
    </section>
    <section class="bg-img3">
      <div class="container coupon">
        <div class="row mgeni">
          <div class="col-md-6">
            <p></p>
          </div>
          <div class="col-md-6">
            <div class="feature-title">
              <p class="mgeni-coupon">
                <strong>Mgeni</strong> to Olive <br />
                & Basil Ke?<br />
              </p>
              Before your <strong>Safari</strong>
            </div>
            <p class="feature-text">
              Get 10% off your first order. <br />
              Use Code <strong>OLI&BAS21</strong>
            </p>
            <div class="btn-container">
              <!-- <a class="btn mt-5">I'm Ready to Order</a>
              <icon name="chevron-right" color="#fff" /> -->
              <TheButton msg="I'm Ready to Order" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheButton from '@/components/partials/TheButton';
export default {
  name: 'Features',
  components: {
    TheButton,
  },
};
</script>

<style lang="css" scoped>
.mgeni {
  margin-top: 14rem;
}

.script {
  color: #e68618;
  font-family: var(--curly-font);
  font-size: 8rem;
}

.mgeni-coupon {
  margin-left: 80px;
  margin-bottom: 0;
}

.bg-img {
  margin-top: 0;
  background-image: url('../../assets/img/home-1.png');
  padding: 10rem 1rem;
  overflow: hidden;
  width: 100%;
  height: 700px;
  background-repeat: no-repeat;
  background-size: cover cover;
  position: relative;
}

.bg-img2 {
  background-image: url('../../assets/img/home-box.png');
  overflow: hidden;
  padding: 5rem 0;
  width: 100%;
  height: 284px;
  background-repeat: no-repeat;
  background-size: cover cover;
  position: relative;
}

.bg-img2b {
  background-image: url('../../assets/img/home-2.png');
  padding: 10rem 1rem;
  overflow: hidden;
  width: 100%;
  height: 939px;
  background-repeat: no-repeat;
  background-size: cover cover;
  position: relative;
}
.bg-img3 {
  background-image: url('../../assets/img/order.png');
  padding: 10rem 1rem;
  overflow: hidden;
  width: 100%;
  height: 939px;
  background-repeat: no-repeat;
  background-size: cover cover;
  position: relative;
}

.content {
  margin-top: -120px;
  max-width: 440px;
  width: 50%;
  min-width: 270px;
  z-index: 99;
  position: relative;
}

.curly {
  font-family: var(--curly-font);
  color: #e68618;
  font-size: 10rem;
  padding-top: 5rem;
  border-top: 2px solid #e68618;
}

.feature-title {
  font-family: var(--main-font);
  font-size: 3.85rem;
  line-height: calc(3.85rem + 0.85rem);
}

.feature-text {
  font-family: var(--content-font);
  font-size: 2rem;
  font-weight: 400;
}

.btm-float {
  margin-top: 23rem;
  font-family: var(--main-font);
  font-size: 3.8rem;
  font-weight: 500;
  line-height: 58px;
}
</style>
