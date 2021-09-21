<template>
  <section class="mt-5">
    <div class="c-gifts-how">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="c-gifts-how__content">
              <div class="c-gifts-how__text">
                <h2 class="c-heading c-heading--brand-4 mt-5">
                  How to Gift Olive & Basil
                </h2>
                <ol>
                  <li class="u-text--md u-text--lg-lg">
                    Pick your meal
                  </li>
                  <li class="u-text--md u-text--lg-lg">
                    Write a personal message.
                  </li>
                  <li class="u-text--md u-text--lg-lg">
                    We'll Notify the lucky Recipient via Email or Send a Card!
                  </li>
                </ol>
                <TheButton msg="Give Olive &amp; Basil" />
              </div>
              <div class="c-gifts-how__form">
                <p class="c-heading c-heading--brand-7">Already have a gift?</p>
                <form
                  class="simple_form c-redeem-gift-form is-user-only-signed-out"
                  novalidate="novalidate"
                  action="/gifts/redeem_code"
                  accept-charset="UTF-8"
                  data-remote="true"
                  method="post"
                >
                  <input name="utf8" type="hidden" value="✓" />
                  <div
                    class="c-form-group string required gift_input_with_button"
                  >
                    <div class="c-input-group c-input-group--button">
                      <input
                        name="redeem"
                        placeholder="Enter gift code"
                        type="text"
                        id="gift_redeem"
                      />

                      <button
                        name="button"
                        type="submit"
                        class="c-button c-button--primary"
                        aria-label="Redeem Gift"
                        data-disable="true"
                      >
                        <icon name="chevron-right" color="#fff" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-2"></div>
          <div class="col-lg-5">
            <img class="mt-5" src="../../assets/img/plate2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="c-gifts-why">
      <div class="container">
        <div class="c-gifts-why__content">
          <h2 class="c-heading c-heading--brand-4">
            Why Gift Olive &amp; Basil?
          </h2>
          <div class="row">
            <div class="d-flex d-md-block col-md-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 67"
                aria-hidden="true"
                height="60"
                width="60"
              >
                <path
                  fill="#9FD455"
                  d="M35.24 66.49A28.28 28.28 0 0 1 7 38.24C7 22.67 19.67 10 35.24 10S63.5 22.67 63.5 38.24 50.82 66.5 35.24 66.5z"
                ></path>
                <path
                  fill="#444"
                  d="M32.38 26.36V14.49a1.38 1.38 0 1 0-2.76 0v11.87a4.86 4.86 0 0 0-3.27 3.26h-8.8a1.38 1.38 0 0 0 0 2.76h8.8a4.85 4.85 0 0 0 9.5-1.38c0-2.2-1.47-4.05-3.47-4.64zM31 0c17.1 0 31 13.9 31 31S48.1 62 31 62 0 48.1 0 31 13.9 0 31 0zm0 59.24c15.57 0 28.24-12.67 28.24-28.24S46.57 2.76 31 2.76 2.76 15.43 2.76 31 15.43 59.24 31 59.24zm0-50.2a1.42 1.42 0 1 1 0-2.84 1.42 1.42 0 0 1 0 2.84zm0 46.76a1.42 1.42 0 1 1 0-2.84 1.42 1.42 0 0 1 0 2.84zm23.38-23.38a1.42 1.42 0 1 1 0-2.84 1.42 1.42 0 0 1 0 2.84zm-46.76 0a1.42 1.42 0 1 1 0-2.84 1.42 1.42 0 0 1 0 2.84zm39.91-16.53a1.42 1.42 0 1 1 0-2.84 1.42 1.42 0 0 1 0 2.84zM14.47 48.95a1.42 1.42 0 1 1 0-2.84 1.42 1.42 0 0 1 0 2.84zm33.06 0a1.42 1.42 0 1 1 0-2.84 1.42 1.42 0 0 1 0 2.84zM14.47 15.89a1.42 1.42 0 1 1 0-2.84 1.42 1.42 0 0 1 0 2.84z"
                ></path>
              </svg>

              <div>
                <h3 class="c-heading c-heading--brand-7">Convenient</h3>
                <p class="u-text u-text--md u-text--lg-lg">
                  Professionaly made plant based meals delivered at your chosen
                  time.
                </p>
              </div>
            </div>
            <div class="d-flex d-md-block col-md-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 67 62"
                aria-hidden="true"
                height="60"
                width="60"
              >
                <path
                  fill="#9FD455"
                  d="M48.95 8.33a17.32 17.32 0 0 0-12.34 5.13l-.61.61-.6-.6a17.33 17.33 0 0 0-24.68-.02 17.73 17.73 0 0 0-.01 24.9l.6.61 15.72 15.87 3.65 3.68.06.07 1.55 1.58a5.21 5.21 0 0 0 7.4 0l1.45-1.46 3.82-3.85 15.69-15.86.6-.61c5.02-5.03 6.52-12.62 3.82-19.2A17.42 17.42 0 0 0 48.94 8.3l.02.02z"
                ></path>
                <path
                  fill="#444"
                  d="M43.96 3.38c5.82 0 11.06 3.55 13.28 8.98a14.62 14.62 0 0 1-3.14 15.82l-.61.62L37.8 44.67 35 47.49 34 48.52 32.54 50a2.2 2.2 0 0 1-3.1 0l-1.48-1.51-.12-.13-3.65-3.68-.9-.9L8.51 28.84l-.6-.61a14.63 14.63 0 0 1-3.19-15.86 14.4 14.4 0 0 1 13.33-8.99A14.22 14.22 0 0 1 28.2 7.63l.6.61 2.19 2.2 2.15-2.18.61-.61a14.24 14.24 0 0 1 10.2-4.25v-.02zm0-3.05A17.32 17.32 0 0 0 31.6 5.46l-.61.62-.6-.62a17.33 17.33 0 0 0-24.68-.01 17.73 17.73 0 0 0-.01 24.9l.6.61 15.72 15.87 3.65 3.68.06.07 1.55 1.58a5.21 5.21 0 0 0 7.4 0l1.45-1.46 3.82-3.85 15.69-15.86.6-.61c5.02-5.03 6.52-12.61 3.82-19.2A17.42 17.42 0 0 0 43.94.3l.02.02z"
                ></path>
              </svg>

              <div>
                <h3 class="c-heading c-heading--brand-7">Tasty</h3>
                <p class="u-text u-text--md u-text--lg-lg">
                  Creative Flavours that will tempt & Delight your family &
                  Friends.
                </p>
              </div>
            </div>
            <div class="d-flex d-md-block col-md-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 46 51"
                aria-hidden="true"
                height="60"
                width="60"
              >
                <path
                  fill="#9FD455"
                  d="M44.93 15H8.07C7.5 15 7 15.43 7 16.01V50c0 .53.45 1.01 1.07 1.01h36.86c.56 0 1.07-.43 1.07-1.01V15.97c0-.54-.5-.97-1.07-.97z"
                ></path>
                <path
                  fill="#444"
                  d="M40.85 5.42H30.79V1.14c0-.6-.49-1.14-1.15-1.14-.67 0-1.16.48-1.16 1.14v4.28H13.52V1.14c0-.6-.49-1.14-1.16-1.14-.66 0-1.15.48-1.15 1.14v4.28H1.15C.55 5.42 0 5.9 0 6.56v38.3C0 45.46.48 46 1.15 46h39.7c.6 0 1.15-.48 1.15-1.14V6.5c0-.6-.55-1.08-1.15-1.08zM2.3 7.65h8.91v3.13c0 .6.49 1.14 1.15 1.14.67 0 1.16-.48 1.16-1.14V7.65h15.03v3.13c0 .6.48 1.14 1.15 1.14.66 0 1.15-.48 1.15-1.14V7.65h8.9v10.23H2.3V7.65zm0 36.06v-23.6h37.4v23.54H2.3v.06zM18.5 28a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5-3c-.81 0-1.5.69-1.5 1.5s.69 1.5 1.5 1.5 1.5-.69 1.5-1.5-.69-1.5-1.5-1.5zm5 0c-.81 0-1.5.69-1.5 1.5s.69 1.5 1.5 1.5 1.5-.69 1.5-1.5-.63-1.5-1.5-1.5zm-25 4c-.81 0-1.5.69-1.5 1.5S7.69 32 8.5 32s1.5-.69 1.5-1.5S9.37 29 8.5 29zm5 0c-.81 0-1.5.69-1.5 1.5s.69 1.5 1.5 1.5 1.5-.69 1.5-1.5-.69-1.5-1.5-1.5zm5 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5-3c-.81 0-1.5.69-1.5 1.5s.69 1.5 1.5 1.5 1.5-.69 1.5-1.5-.69-1.5-1.5-1.5zm5 0c-.81 0-1.5.69-1.5 1.5s.69 1.5 1.5 1.5 1.5-.69 1.5-1.5-.63-1.5-1.5-1.5zm-25 4c-.81 0-1.5.69-1.5 1.5S7.69 36 8.5 36s1.5-.69 1.5-1.5S9.37 33 8.5 33zm5 0c-.81 0-1.5.69-1.5 1.5s.69 1.5 1.5 1.5 1.5-.69 1.5-1.5-.69-1.5-1.5-1.5zm5 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5-3c-.81 0-1.5.69-1.5 1.5s.69 1.5 1.5 1.5 1.5-.69 1.5-1.5-.69-1.5-1.5-1.5zm5 0c-.81 0-1.5.69-1.5 1.5s.69 1.5 1.5 1.5 1.5-.69 1.5-1.5-.63-1.5-1.5-1.5zm-25 4c-.81 0-1.5.69-1.5 1.5S7.69 40 8.5 40s1.5-.69 1.5-1.5S9.37 37 8.5 37zm5 0c-.81 0-1.5.69-1.5 1.5s.69 1.5 1.5 1.5 1.5-.69 1.5-1.5-.69-1.5-1.5-1.5zm5 0c-.81 0-1.5.69-1.5 1.5s.69 1.5 1.5 1.5 1.5-.69 1.5-1.5-.69-1.5-1.5-1.5zm5 0c-.81 0-1.5.69-1.5 1.5s.69 1.5 1.5 1.5 1.5-.69 1.5-1.5-.69-1.5-1.5-1.5z"
                ></path>
              </svg>

              <div>
                <h3 class="c-heading c-heading--brand-7">No commitment</h3>
                <p class="u-text u-text--md u-text--lg-lg">
                  A taste of Olive & Basil minus weekly subscription
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TheButton from '@/components/partials/TheButton';
export default {
  name: 'GiftHow',
  components: {
    TheButton,
  },
};
</script>

<style lang="css" scoped>
.c-gifts-how__content {
  min-width: 290px;
  margin: 0 auto;
}
.c-heading--brand-4 {
  font-family: var(--main-font);
  font-weight: 500;
  font-feature-settings: 'lnum';
  font-variant-numeric: lining-nums;
  font-size: 3.85rem;
  line-height: calc(3.85rem + 0.85rem);
  margin: 0 0 1.25rem;
}

.c-gifts-how__text ol li::before {
  content: counter(counter);
  font-size: 2rem;
  color: #737373;
  width: 45px;
  height: 45px;
  flex: 0 0 auto;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.c-gifts-how__text ol {
  counter-reset: counter;
  list-style: none;
  padding-left: 0;
  margin-bottom: 30px;
}

.c-gifts-how__text ol li {
  display: flex;
  align-items: center;
  margin: 0 0 15px;
  counter-increment: counter;
  position: relative;
}

.u-text--lg-lg,
.u-text--lg-xl {
  font-family: var(--content-font);
  font-size: 1.8rem;
  line-height: calc(1.8rem + 0.625rem);
  color: #444;
}

.c-gifts-how__text ol li {
  display: flex;
  align-items: center;
  margin: 0 0 15px;
  counter-increment: counter;
  position: relative;
}
.c-input-group {
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 5rem;
}
.c-input-group > input {
  width: 100%;
  font-size: 2rem;
  padding-left: 2rem;
}

/* .c-gifts-how__form {
  margin: 20px;
} */
.c-heading--brand-7 {
  font-family: var(--content-font);
  font-weight: 700;
  font-feature-settings: 'lnum';
  font-variant-numeric: lining-nums;
  font-size: 1.8rem;
  line-height: calc(1.8rem + 0.375rem);
  margin: 2.5rem 0 2rem;
}
.gift-redeem {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  line-height: calc(1rem + 0.375rem);
  color: #222;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.c-button {
  width: 60px;
  height: 60px;
  flex: 0 0 auto;
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  background: #55880d;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  display: inline-block;
  position: relative;
  font-family: OpenSans;
  text-align: center;
  text-decoration: none;
  border-radius: 0;
  transition: color 0.1s ease-in-out, background 0.1s ease-in-out,
    border 0.1s ease-in-out;
}

.chevron-right {
  background: #55880d;
  width: 62px;
  height: 60px;
  padding: 16px;
  float: right;
  border-left: 2px solid #fff;
  cursor: pointer;
}

.c-gifts-why {
  background-color: #f8f8f8;
  padding: 70px 0 40px;
  text-align: center;
}

.c-gifts-why p {
  max-width: 245px;
  margin: 0 auto;
}
</style>
