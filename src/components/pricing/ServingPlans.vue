<template>
  <div>
    <div v-if="display">
      <div
        class="alert alert-primary alert-dismissible fade show d-flex  align-items-center my-5"
        role="alert"
      >
        <h4>
          Please Select a plan below to proceed.
        </h4>
        <a class="close_button" @click="close">
          &times;
        </a>
      </div>
    </div>
    <form method="get mb-5">
      <div class="form-group">
        <div class="container">
          <div class="row">
            <Serving
              v-for="(plan, index) in this.servingPlans"
              :key="index"
              :plan="plan"
            />
          </div>
        </div>
      </div>
    </form>

    <h2 class="cf-heading text-center">
      Complete Flexibility
    </h2>
    <section class="cf mt-5 mb-5">
      <div class="container">
        <div class="cf-content text-center">
          <div class="row justify-content-between">
            <div class="d-flex d-md-block col-md-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 69 75"
                aria-hidden="true"
                class="c-how-it-works__icon"
                height="60"
                width="60"
              >
                <title>Choose icon</title>
                <path
                  fill="#9FD455"
                  d="M63.29 30.17a5 5 0 0 1 5 4.95 101.45 101.45 0 0 1 .14 3.25c.06 2.2.09 4.44.06 6.64-.07 6.21-.53 10.92-1.53 13.32-.3.73-.98 1.72-1.93 2.92-.59.74-1.2 1.46-1.77 2.11v10.11a1.13 1.13 0 0 1-1.12 1.1H37.48c-.61 0-1.12-.5-1.12-1.11V62.83l-13.02-19.6a4.98 4.98 0 0 1 5.16-7.66 4.91 4.91 0 0 1 3.19 2.14l1.34 2.01V14.01a4.99 4.99 0 0 1 5.01-5c2.76 0 5 2.24 5.01 5v10a4.97 4.97 0 0 1 3.4-1.35 5.04 5.04 0 0 1 4.93 4.08 5.02 5.02 0 0 1 8.5 3.58v1.18a5 5 0 0 1 3.4-1.33zM26.5 14a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0zm42 0a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0z"
                ></path>
                <path
                  fill="#444"
                  d="M26.03 17.58a9.52 9.52 0 0 1-4.53-8.1 9.52 9.52 0 0 1 19 0 9.43 9.43 0 0 1-4.45 8.05v1.97a4.97 4.97 0 0 1 3.4-1.34 5.04 5.04 0 0 1 4.93 4.08 5.02 5.02 0 0 1 8.5 3.58V27a5 5 0 0 1 8.42 3.62 101.45 101.45 0 0 1 .13 3.25c.06 2.2.09 4.44.06 6.64-.07 6.21-.53 10.92-1.53 13.32-.3.73-.98 1.72-1.93 2.92-.59.74-1.2 1.46-1.77 2.11v10.11a1.13 1.13 0 0 1-1.12 1.1H30.48c-.61 0-1.12-.5-1.12-1.11V58.33l-13.02-19.6a4.98 4.98 0 0 1 5.16-7.66 4.91 4.91 0 0 1 3.19 2.14l1.34 2.01V17.58zm0-2.85V9.51a4.99 4.99 0 0 1 5.01-5c2.76 0 5 2.24 5.01 5v5.15l.06-.06a7.17 7.17 0 0 0 2.12-5.11 7.25 7.25 0 0 0-14.46 0 7.17 7.17 0 0 0 2.26 5.24zm7.85 1.75V9.74a2.75 2.75 0 0 0-5.48 0v29.03c0 .49-.33.91-.8 1.05a1.1 1.1 0 0 1-1.23-.44l-3.34-5.03a2.7 2.7 0 0 0-1.74-1.16 2.73 2.73 0 0 0-2.83 4.19L31.51 57c.12.18.18.4.18.6v9.73h22.14v-9.3c0-.28.1-.54.29-.74 1.49-1.62 3.15-3.7 3.54-4.64.74-1.8 1.16-5.4 1.3-10.23a158.17 158.17 0 0 0-.15-11.73 2.77 2.77 0 0 0-2.74-2.8 2.73 2.73 0 0 0-2.74 2.74l.01 4.33a1.1 1.1 0 0 1-1.1 1.11h-.64c-.6 0-1.1-.5-1.1-1.1v-9.13a2.74 2.74 0 0 0-5.48 0v5.43c0 .28-.11.56-.32.76-.2.21-.5.33-.78.32h-.63c-.61 0-1.1-.5-1.1-1.1v-8.03a2.75 2.75 0 0 0-4.68-1.93 2.7 2.7 0 0 0-.8 1.93l.01 8.04c0 .29-.12.56-.32.77-.2.2-.48.31-.78.32h-.63c-.61 0-1.1-.5-1.1-1.1l-.01-14c-.1-.26-.09-.53 0-.77zM10 19a9.51 9.51 0 0 1 0-19 9.51 9.51 0 0 1 0 19zm0-16.5a7 7 0 1 0 .01 14.01A7 7 0 0 0 10 2.5zM52 19a9.51 9.51 0 0 1 0-19 9.51 9.51 0 0 1 0 19zm0-16.5a7 7 0 1 0 .01 14.01A7 7 0 0 0 52 2.5z"
                ></path>
              </svg>

              <div>
                <h3 class="cf-title">Be Your Own Boss</h3>
                <p class="cf-text">
                  Customize your order to meet your taste buds every week.
                </p>
              </div>
            </div>
            <div class="d-flex d-md-block col-md-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 72 72"
                aria-hidden="true"
                class="byob"
                height="60"
                width="60"
              >
                <title>Add to icon</title>
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="#9FD455"
                    d="M41 40.44L67 31v31.32L41 72 15 61.88V31l26 9.24v.2zM31 5h17a4 4 0 0 1 4 4v17a4 4 0 0 1-4 4H31a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4z"
                  ></path>
                  <path
                    fill="#444"
                    fill-rule="nonzero"
                    d="M9.97 38.06v16.2l24.99 9.01v-24.2l-4.6 6.5-20.39-7.51zm-2.32-.85L.53 34.58l7.5-10.94.53-.2 12.02-5.39v2.6l-8.5 3.77L36 33.04l23.85-8.6-8.98-3.79v-2.6l13.1 5.6 7.5 10.93-7.12 2.63v18.67L36.3 66h-.59L7.65 55.88V37.21zm54.38.85l-20.4 7.52-4.35-6.16v23.77l24.75-8.93v-16.2zM37.28 35.4l5.23 7.4 25.37-9.36-5.18-7.56-25.42 9.16v.36zM9.3 25.88l-5.18 7.56 25.37 9.34 5.43-7.67L9.3 25.88zM26 0h19a4 4 0 0 1 4 4v19a4 4 0 0 1-4 4H26a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v19c0 1.1.9 2 2 2h19a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H26zm9 5h2v6h6v2h-6v6h-2v-6h-6v-2h6V7z"
                  ></path>
                </g>
              </svg>

              <div>
                <h3 class="cf-title">Switch it up</h3>
                <p class="cf-text">
                  Why not get some breakfast &amp; lunch too!
                </p>
              </div>
            </div>
            <div class="d-flex d-md-block col-md-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 46 51"
                aria-hidden="true"
                class="siu"
                height="60"
                width="60"
              >
                <title>Calendar icon</title>
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
                <h3 class="cf-title">Busy</h3>
                <p class="cf-text">
                  Cancel your order anytime before payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="faqs">
        <div class="container">
          <h2 class="faqs-heading text-center">
            Frequently Asked Questions
          </h2>
          <br />
          <div class="cf-faqs cf-card">
            <div class="cf-faqs-content">
              <a
                class="cf-faqs-question collapsed"
                data-toggle="collapse"
                href="#faqs1"
                role="button"
                aria-expanded="false"
                aria-controls="faqs1"
              >
                How do I select my meals?
              </a>
              <div class="cf-faqs-answer collapse" id="faqs1" style="">
                Pretty Simple! We want you to have maximum variety. You can
                select a maximum of 5 meals & a minimum of 2 meals per order,
                from the list of meals that tempt your taste buds most from our
                menu. <br />
                However, the same meal cannot be selected twice in one order,
                but after the week has lapsed since your order was placed, you
                can reorder again.
              </div>
            </div>
          </div>

          <div class="cf-faqs cf-card">
            <div class="cf-faqs-content">
              <a
                class="cf-faqs-question collapsed"
                data-toggle="collapse"
                href="#faqs2"
                role="button"
                aria-expanded="false"
                aria-controls="faqs2"
              >
                When will I receive my order?
              </a>
              <div class="cf-faqs-answer collapse" id="faqs2" style="">
                You'll recieve your order according to the dates you select to
                recieve your order in the week, under your chosen serving plan.
                I.e twice a week ( select Tue & Thu).
              </div>
            </div>
          </div>

          <div class="cf-faqs cf-card">
            <div class="cf-faqs-content">
              <a
                class="cf-faqs-question collapsed"
                data-toggle="collapse"
                href="#faqs3"
                role="button"
                aria-expanded="false"
                aria-controls="faqs3"
              >
                Can I cancel my order?
              </a>
              <div class="cf-faqs-answer collapse" id="faqs3" style="">
                Absolutely! An order can be cancelled any time before payment is
                made. However, there is no reimbursement once an order has been
                fully carried out. I.e after payment is made.
              </div>
            </div>
          </div>
          <div class="cf-faqs cf-card">
            <div class="cf-faqs-content">
              <a
                class="cf-faqs-question collapsed"
                data-toggle="collapse"
                href="#faqs4"
                role="button"
                aria-expanded="false"
                aria-controls="faqs4"
              >
                When can I order again?
              </a>
              <div class="cf-faqs-answer collapse" id="faqs4" style="">
                Your ordering process will renew after your current week's order
                has been fully carried out. Then you can go through the
                reordering process once again.
              </div>
            </div>
          </div>
          <div class="cf-faqs cf-card">
            <div class="cf-faqs-content">
              <a
                class="cf-faqs-question collapsed"
                data-toggle="collapse"
                href="#faqs5"
                role="button"
                aria-expanded="false"
                aria-controls="faqs5"
              >
                I have a food allergy. What do I do?
              </a>
              <div class="cf-faqs-answer collapse" id="faqs5" style="">
                We'd hate for anyone to miss out! The best way to accommodate
                any allergens is to customize your meals by choosing the ones
                that work for you. In addition, we're more than happy to consult
                with you on email or on direct message through our whatsapp
                details on any ingredient you have questions about.
              </div>
            </div>
          </div>
          <div class="cf-faqs cf-card">
            <div class="cf-faqs-content">
              <a
                class="cf-faqs-question collapsed"
                data-toggle="collapse"
                href="#faqs6"
                role="button"
                aria-expanded="false"
                aria-controls="faqs6"
              >
                Can I add Extras to my order ?
              </a>
              <div class="cf-faqs-answer collapse" id="faqs6" style="">
                Yes! You can add Extras to your order after selecting your
                meals. <br />
                *Extras
                <ol class="ml-5">
                  <li>
                    Request for extra protein in your meal ~ +200/=
                  </li>
                  <li>
                    Request for replacement of starch for a gluten free option ~
                    +200/=
                  </li>
                  <li>
                    Request for more Veggies ~ +100/=
                  </li>
                  <li>
                    Request for Extra Sauce/Dressing ~ +150/=
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div class="cf-faqs cf-card">
            <div class="cf-faqs-content">
              <a
                class="cf-faqs-question collapsed"
                data-toggle="collapse"
                href="#faqs7"
                role="button"
                aria-expanded="false"
                aria-controls="faqs7"
              >
                What about my Delivery ?
              </a>
              <div class="cf-faqs-answer collapse" id="faqs7" style="">
                Delivery fee is not inclusive of your ordering fee. Delivery fee
                shall be paid once your shipment arrives. You'll recieve an
                email or text with tracking info as soon as your order has
                shipped, to keep an eye on the where abouts of your meal.
              </div>
            </div>
          </div>
          <div class="cf-faqs cf-card">
            <div class="cf-faqs-content">
              <a
                class="cf-faqs-question collapsed"
                data-toggle="collapse"
                href="#faqs8"
                role="button"
                aria-expanded="false"
                aria-controls="faqs8"
              >
                How Soon Can I get a Meal ?
              </a>
              <div class="cf-faqs-answer collapse" id="faqs8" style="">
                Place an order today for a meal tomorrow i.e Place an order
                today and recieve a meal a day later. e.g Order on Thursday for
                a meal to start your delivery on Friday.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Serving from "@/components/pricing/Serving";
export default {
  name: "ServingPlans",
  components: {
    Serving,
  },

  data() {
    return {
      display: false,
      servingPlans: [
        {
          image: require("@/assets/img/pricing-img1.jpg"),
          title: "2 Serving Plan ",
          meals: [2, 3],
        },
        {
          image: require("@/assets/img/pricing-img2.jpg"),

          title: "3 Serving Plan ",
          meals: [3, 4],
        },
        {
          image: require("@/assets/img/pricing-img3.jpg"),
          title: "4 Serving Plan ",
          meals: [4, 5],
        },
      ],
    };
  },
  methods: {
    close() {
      this.display = false;
    },
  },
  mounted() {
    this.display = true;
  },
};
</script>

<style lang="css" scoped>
.close_button {
  font-size: 25px;
  margin-left: auto;
}
.close_button:hover {
  text-decoration: none;
}

.cf-heading,
.faqs-heading {
  font-family: var(--main-font);
  font-size: 3.25rem;
  font-weight: 500 !important;
  margin: 5rem 0 4rem;
}
.cf-title {
  color: #444;
  font-size: 2rem;
  line-height: calc(2.7rem + 0.25rem);
  font-family: var(--content-font);
  font-weight: 700;
  font-feature-settings: "lnum";
  font-variant-numeric: lining-nums;
  margin: 1rem 0 0.8rem;
}

.cf-text {
  color: #444;
  font-size: 1.8rem;
  font-family: var(--content-font);
  line-height: calc(1.9rem + 0.75rem);
  margin-bottom: 0.5rem;
}

.cf-faqs {
  max-width: 750px;
  margin: 0 auto 20px;
  display: block;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.06);
}

.cf-faqs-content {
  padding: 30px;
}

.cf-faqs-question {
  display: block;
  position: relative;
  font-weight: 700;
  padding-right: 22px;
  margin-bottom: 0;
  font-size: 1.8rem;
  line-height: calc(1.8rem + 0.375rem);
}

.cf-faqs-question[aria-expanded="false"]::after {
  content: "+";
  top: 0;
  right: 0;
}

.cf-faqs-question::after {
  font-weight: 400;
  font-size: 2.25rem;
  color: #55880d;
  position: absolute;
}

a {
  cursor: pointer;
  transition: color 0.15s ease-out;
  background-color: transparent;
  color: #444;
  font-family: var(--content-font);
  line-height: calc(1rem + 0.625rem);
}

a:focus,
a:hover {
  color: #79c039;
  text-decoration: underline;
}

.cf-faqs-answer {
  font-family: var(--content-font);
  font-size: 1.6rem;
  line-height: calc(1.6rem + 0.375rem);
  margin-top: 15px;
}
</style>
