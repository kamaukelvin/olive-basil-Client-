<template>
  <div>
    <section class="mb-5">
      <div class="gifts-what">
        <div class="container">
          <img
            class="gifts-what-img mt-5"
            src="../../assets/img/giftbox2.png"
            alt="gift pack"
          />
        </div>
      </div>
    </section>
    <section class="why-good">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-4">
            <h1 class="why-title">
              <span class="d-inline d-sm-inline-block">EARTH</span>
              <span class="d-inline d-sm-inline-block">CIRCLE</span>
              <span class="d-inline d-sm-inline-block">PROGRAM</span>
            </h1>
          </div>

          <div class="col-12 col-sm-6 offset-sm-1 col-md-5">
            <div class="why-text">
              <h3 class="heading-text">
                Earn Earth Seed Points by;
              </h3>
              <ul class="heading-text-list">
                <li>Registering with us</li>
                <li>Making A Purchase</li>
                <li>Inviting Your Friends to make a Purchase</li>
                <li>Engaging with us on our Social Media Platforms</li>
              </ul>
            </div>
          </div>

          <div class="col-12 col-sm-6 offset-sm-3 col-md-6">
            <p class="why-text-highlight">
              <span class="highlight">
                You Can Unlock Exciting Rewards such as;<br class="d-xs-none" />
                Earning A discount of 10% off your next order for every 200
                Earth Seed Points<br class="d-xs-none" />
                Seasonal Vouchers <br class="d-xs-none" />
                &amp; Happy Presents for our Repeat Customers
                <br class="d-xs-none" />
                1 Earth Seed Point = 100ksh
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
  name: 'GiftWhat',
  component: {},
};
</script>

<style lang="css" scoped>
.gifts-what-content {
  text-align: center;
}
.gifts-title {
  font-family: var(--main-font);
  font-size: 3.85rem;
  line-height: calc(3.85rem + 0.85rem);
}
.gifts-text,
.gifts-list {
  font-family: var(--content-font);
  font-size: 1.8rem;
  font-weight: 400;
}

.gifts-what-img {
  width: 100%;
}

.why-title {
  font-size: 7.9rem;
  color: #9fd455;
  font-weight: 900;
  line-height: 1.1;
  text-align: right;
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
.why-text-highlight {
  font-family: var(--main-font);
  color: #fff;
  font-size: 2.5rem;
  line-height: calc(2.8rem + 0.675rem);
  margin-top: 3rem;
}

.highlight {
  background-color: #55880d;
}
</style>
