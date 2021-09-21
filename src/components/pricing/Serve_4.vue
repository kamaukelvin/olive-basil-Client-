<template>
  <div class="col-md-4">
    <div
      class="card plan"
      data-plan-group="two_servings"
      data-plan-type="two_servings"
    >
      <div class="img-container">
        <img
          src="../../assets/img/pricing-img3.jpg"
          alt="..."
          class="card-img-top"
        />
      </div>

      <div class="card-content plan-content">
        <div class="card-title plan-title text-center">
          4 Serving Plan
        </div>
        <div>
          <p class="subtitle text-center">
            Choose your prefered Meal:
          </p>
          <div class="meals">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="__brunch"
                value="brunch"
              />
              <label class="form-check-label" for="__brunch">Brunch</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="__lunch"
                value="lunch"
              />
              <label class="form-check-label" for="__lunch">Lunch</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="__dinner"
                value="dinner"
              />
              <label class="form-check-label" for="__dinner">Dinner</label>
            </div>
          </div>
        </div>

        <div class="plan-details">
          <p class="plan-subtitle text-center mt-4 mb-4">
            <strong>Meals per week</strong>
          </p>
          <div class="swch-radio-picker">
            <div class="swch-hold">
              <input
                type="radio"
                id="tbr6"
                class="swch-rad"
                value="4"
                v-model="plan.mealPerWeek"
              />
              <label for="tbr6">4</label>
            </div>
            <div class="swch-hold">
              <input
                type="radio"
                id="tbr7"
                class="swch-rad"
                value="5"
                v-model="plan.mealPerWeek"
              />
              <label for="tbr7">5</label>
            </div>
          </div>
        </div>
        <a class="plan-button" href="/login">
          <span class="button btn btn-primary d-block">Select This Plan</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Serve4",
  data() {
    return {
      plan: {
        meal: [],
        mealPerWeek: "",
      },
    };
  },
};
</script>

<style lang="css" scoped>
.plan-button {
  text-decoration: none;
}
.plan-content {
  padding: 25px 15px 15px;
}
.plan-title {
  position: relative;
  width: auto;
  top: inherit;
  left: inherit;
  transform: none;
  margin-bottom: 25px;
  font-size: 3.25rem;
  font-weight: 500;
  font-family: var(--main-font);
  color: #444;
  background-color: transparent;
  border: none;
  border-radius: 3px;
}

.card {
  border-radius: 0;
}
.card::selection {
  outline: 1px solid #fff;
}
.card:hover,
.card:focus {
  transform: translate(0px, -15px);
  transition: 0.2s border ease-in, 0.2s transform ease-out;
  z-index: 100;
  border: 2px solid #79c039;
}
.plan {
  width: 100%;
  max-width: 372px;
  margin: 0 30px 20px 0;
  display: block;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.06);
}
.img-container {
  position: relative;
  overflow: hidden;
}

.card-content {
  padding: 25px 15px 15px;
}

.subtitle {
  font-family: var(--content-font);
  font-size: 1.7rem;
  font-weight: 600;
}
.meals {
  text-align: justify;
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: var(--content-font);
}

.plan-details {
  background-color: #fff;
  margin-bottom: 15px;
  padding: 0 0 15px;
}

.plan-subtitle {
  font-size: 1.7rem;
  font-family: var(--content-font);
}
.swch-radio-picker {
  text-align: center;
  margin: 0 auto;
}
.swch-rad {
  opacity: 0;
  position: absolute;
}
.swch-hold {
  display: inline;
}
.swch-hold label {
  background: #fff;
  border: 1px solid #79c039;
  padding: 6px;
  border-radius: 0px;
  color: #79c039;
  font-family: var(--content-font);
  font-size: 1.25rem;
  font-weight: 700;
  margin: -2px;
  display: inline-grid;
  width: 50px;
  text-align: center;
  cursor: pointer;
}
.swch-rad:checked + label {
  background: #79c039;
  color: #fff;
}
.button {
  text-decoration: none !important;
  color: #fff;
  display: block;
  padding: 17px 30px;
  font-weight: 600;
  font-size: 1.6rem;
  border: none;
  background: #79c039;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}

.button:hover,
.button:focus,
.button:active,
span.button.btn-primary.d-block:active {
  text-decoration: none !important;
  color: #fff;
  background-color: #578812;
  border-color: #79c039;
}

.plan-button:active {
  text-decoration: none !important;
  color: #fff;
  background-color: #578812;
  border-color: #79c039;
}

.plan.is-selected {
  padding: 0;
  border: 2px solid #79c039;
}
.plan.is-selected::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  width: 0;
  height: 0;
  border-color: #79c039 transparent transparent;
  border-style: solid;
  border-width: 20px 23px 0;
}
</style>
