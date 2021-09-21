<template>
  <div class="container mt-5">
    <section class="Header"></section>

    <div class="menu-items">
      <div v-for="(value, propertyName) in menuItems" :key="propertyName">
        <h2 class="category-title mb-5" id="salads">
          {{ propertyName }}
        </h2>

        <div class="row">
          <Salad
            v-for="(salad, index) in value"
            :key="index"
            :salad="salad"
            :category="propertyName"
            @update-cart="addToCart"
          />
        </div>
      </div>
      <!-- <h2 class="category-title mb-5" id="budhabowls">Budha Bowls</h2>
      <div class="row">
        <BudhaBowl
          v-for="budhabowl in menu.categories.Budha_Bowls"
          :key="budhabowl.id"
          :budhabowl="budhabowl"
        />
      </div>
      <h2 class="category-title mb-5" id="burgers">Burgers</h2>
      <div class="row">
        <Burger
          v-for="burger in menu.categories.Burgers"
          :key="burger.id"
          :burger="burger"
        />
      </div>
      <h2 class="category-title mb-5" id="breads">Breads</h2>
      <div class="row">
        <Bread
          v-for="bread in menu.categories.Breads"
          :key="bread.id"
          :bread="bread"
        />
      </div>
      <h2 class="category-title mb-5" id="stuffedsweetpotato">
        Stuffed Sweet Potatoes
      </h2>
      <div class="row">
        <StuffedSweetPotato
          v-for="stuffedsweetpotato in menu.categories.Stuffed_Sweet_Potatoes"
          :key="stuffedsweetpotato.id"
          :stuffedsweetpotato="stuffedsweetpotato"
        />
      </div>
      <h2 class="category-title mb-5" id="hotpots">Hot Pots</h2>
      <div class="row">
        <HotPot
          v-for="hotpot in menu.categories.Hot_Pots"
          :key="hotpot.id"
          :hotpot="hotpot"
        />
      </div>
      <h2 class="category-title mb-5" id="brunch">Brunch</h2>
      <div class="row">
        <Brunch
          v-for="brunch in menu.categories.Brunch"
          :key="brunch.id"
          :brunch="brunch"
        />
      </div> -->
    </div>
  </div>
</template>

<script>
import Salad from "@/components/menu/Salad";
// import BudhaBowl from "@/components/menu/BudhaBowl";
// import Burger from "@/components/menu/Burger";
// import Bread from "@/components/menu/Bread";
// import StuffedSweetPotato from "@/components/menu/StuffedSweetPotato";
// import HotPot from "@/components/menu/HotPot";
// import Brunch from "@/components/menu/Brunch";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "menu",

  components: {
    Salad,
    // BudhaBowl,
    // Burger,
    // Bread,
    // StuffedSweetPotato,
    // HotPot,
    // Brunch,
  },
  data() {
    return {
      menuItems: {},
      total: 0,
      menu: {
        categories: {
          salads: [
            {
              id: 1,
              name: "Asian Citrus Pasta",
              price: "900",
              additives:
                "(with Cranberries,spinach, almonds, mandarin oranges, & a Teriyaki Dressing)",
              src: require("@/assets/img/s1.png"),
            },
            {
              id: 2,
              name: "Blueberry Beet Walnut",
              price: "1050",
              additives:
                "(with candied walnut, pumpkin seed, roasted beet & a maple tahini sauce)",
              src: require("@/assets/img/s2.png"),
            },
            {
              id: 3,
              name: "BBQ chickpea",
              price: "800",
              additives:
                "(oven roasted chickpeas, sauteed in homemade vegan bbq sauce & a Tahini Ranch Dressing)",
              src: require("@/assets/img/s3.png"),
            },
            {
              id: 4,
              name: "Cranberry Apple Quinoa",
              price: "1100",
              additives:
                "(with smoky vegan bacon, savoury flavoured quinoa, candied walnut & a maple mustard vinaigrette)",
              src: require("@/assets/img/s4.png"),
            },
            {
              id: 5,
              name: "Thai Rainbow",
              price: "950",
              additives:
                "(Rainbow veggies,Rice noodles & a peanut Red Curry Dressing)",
              src: require("@/assets/img/s5.png"),
            },
            {
              id: 6,
              name: "La Fiesta",
              price: "900",
              additives:
                "(fresh mango, black beans, quinoa, avocado, pickled jalapeno, & a magic green sauce)",
              src: require("@/assets/img/s6.png"),
            },
            {
              id: 7,
              name: "Harvest Moon",
              price: "1050",
              additives:
                "(oven roasted butternut cubes, quinoa, pumpkin seeds,crisp apple, spinach,cranberries, feta, almonds & a sweet tangy vinaigrette)",
              src: require("@/assets/img/s7.png"),
            },
          ],
          Budha_Bowls: [
            {
              id: 1,
              name: "Call Me Butter Bowl",
              price: "950",
              additives:
                "(Cauliflower Fried Rice, grilled tofu, & a Peanut Butter Coconut Sauce)",
              src: require("@/assets/img/Budha1.png"),
            },
            {
              id: 2,
              name: "Chipotle Tahini Bowl",
              price: "950",
              additives:
                "(Sweet potatoes, flavoured quinoa, sweetcorn, grilled tofu & a Chipotle Tahini Power Sauce)",
              src: require("@/assets/img/Budha2.png"),
            },
            {
              id: 3,
              name: "Spicy Satay Bowl",
              price: "950",
              additives:
                "(Grilled tofu in satay sauce, veggie Rice, with sauteed spinach & a Thai Peanut hoisin Dressing)",
              src: require("@/assets/img/Budha3.png"),
            },
            {
              id: 4,
              name: "Nourishing Garden Bowl",
              price: "890",
              additives:
                "(With Brown rice, Chickpeas tossed in romesco sauce, Roasted pumpkin seeds, raisins, & a Green Goddess Sauce)",
              src: require("@/assets/img/Budha4.png"),
            },
            {
              id: 5,
              name: "Krispy Korean BBQ Tofu Bowl",
              price: "950",
              additives:
                "(Stir fried veggies, krispy tofu, flavoured quinoa, & a BBQ dressing)",
              src: require("@/assets/img/Budha5.png"),
            },
            {
              id: 6,
              name: "The Samba Master bowl",
              price: "1000",
              additives:
                "(Black bean, sauteed bell peppers, sweet corn, fried rice, pico de gallo, shredded spinach, guacamole, jalapeno ranch & Green tahini Dressing)",
              src: require("@/assets/img/Budha6.png"),
            },
            {
              id: 7,
              name: "Bali Power Bowl",
              price: "890",
              additives:
                "(Pinto beans, fresh mango salsa, roasted sweet potato, sprouts, , avocado cilantro pesto, & a Tamari Lime Sauce)",
              src: require("@/assets/img/balibowl.png"),
            },
            {
              id: 8,
              name: "Sunshine Power Bowl",
              price: "890",
              additives:
                "(Spiced chickpeas, sweet potato, flavoured quinoa, & a Tahini Curry Dressing)",
              src: require("@/assets/img/Budha7.png"),
            },
          ],
          Burgers: [
            {
              id: 1,
              name: "Black Bean Walnut Burger",
              price: "1190",
              additives:
                "(With SaucySweet Onions , Avocado Cilantro Pesto, & a Tahini Ranch Dressing)",
              src: require("@/assets/img/Burger1.png"),
            },
            {
              id: 2,
              name: "Spicy Miso Portobello Burger",
              price: "1090",
              additives: "(With A Miso Power Dressing & Creamy Guacamole)",
              src: require("@/assets/img/Burger2.png"),
            },
            {
              id: 3,
              name: "Beet Quinoa Burger",
              price: "1190",
              additives: "(With Avocado aioli  & Chipotle Mayo Sauce)",
              src: require("@/assets/img/Burger3.png"),
            },
            {
              id: 4,
              name: "Chickpea Burger",
              price: "1090",
              additives:
                "(Topped with Spicy Jerk Sauce, pickles & Mushroom tossed in BBQ sauce)",
              src: require("@/assets/img/Burger4.png"),
            },
            {
              id: 5,
              name: "BBQ Tex-Mex Burger",
              price: "1190",
              additives:
                "(Topped with Vegan Bacon,Pickled red onions,  Vegan Sour Cream & dressed with BBQ sauce)",
              src: require("@/assets/img/Burger5.png"),
            },
            {
              id: 6,
              name: "Beet Quinoa Burger",
              price: "1090",
              additives:
                "(With a Sweet & Spicy Mango chutney, sprouts, guacamole, cheddar cheese, & a jalapeno cilantro ranch sauce)",
              src: require("@/assets/img/beet-quinnoa.png"),
            },
          ],

          Breads: [
            {
              id: 1,
              name: "Black Bean Burrito",
              price: "950",
              additives:
                "(With Pesto Rice, Sweet corn, Vegan Cilantro Sour Cream Dressing)",
              src: require("@/assets/img/Bread1.png"),
            },
            {
              id: 2,
              name: "Falafel in Pita",
              price: "850",
              additives: "(Fluffy Falafels, with a green tahini dressing)",
              src: require("@/assets/img/falafel.png"),
            },
            {
              id: 3,
              name: "MiddleEastern Shawarma",
              price: "850",
              additives:
                "(Saucy, spiced chickpeas, pickled red cabbage & a tahini ranch dressing)",
              src: require("@/assets/img/Bread3.png"),
            },
          ],

          Stuffed_Sweet_Potatoes: [
            {
              id: 1,
              name: "Chickpea Massoman Curry",
              price: "750",
              additives: "(Topped with roasted peanuts)",
              src: require("@/assets/img/Potato1.png"),
            },
            {
              id: 2,
              name: "Bean Walnut Chilli",
              price: "850",
              additives: "(Topped with Avocado Pesto)",
              src: require("@/assets/img/Potato2.png"),
            },
            {
              id: 3,
              name: "Mexican Quinoa",
              price: "800",
              additives: "(Black Beans, sweet corn, & a green tahini dressing)",
              src: require("@/assets/img/Potato3.png"),
            },
            {
              id: 4,
              name: "Mediterrenean Quinoa",
              price: "850",
              additives:
                "(With Olives, cashews, herbed chimichuri & tahini dressing)",
              src: require("@/assets/img/Potato4.png"),
            },
          ],

          Hot_Pots: [
            {
              id: 1,
              name: "Tofu Veggie Lo Mein",
              price: "1000",
              additives:
                "(Stir fried veggies, sauteed tofu, mushroom, Rice noodles)",
              src: require("@/assets/img/Hot Pots1.png"),
            },
            {
              id: 2,
              name: "Chickpea Coconut Curry",
              price: "1050",
              additives:
                "(With Cilantro Lime Cauliflower rice & a Herbed, Garlic Cashew Sauce)",
              src: require("@/assets/img/Hot Pots2.png"),
            },
            {
              id: 3,
              name: "Soy-Ginger BBQ Chickpea Stir Fry",
              price: "950",
              additives: "(With Rice & a Sticky Sesame Sauce)",
              src: require("@/assets/img/Hot Pots3.png"),
            },
            {
              id: 4,
              name: "Jamaican Plantain Rice",
              price: "1050",
              additives:
                "(Roasted Plantain, With saucy spiced black beans, pico de gallo,  mango chutney & a Chipotle Cashew Queso Sauce)",
              src: require("@/assets/img/Hot Pots4.png"),
            },
            {
              id: 5,
              name: "Tandoori Fried Rice",
              price: "1050",
              additives:
                "(Sautéed Chickpeas, with a fresh coriander cashew yoghurt)",
              src: require("@/assets/img/Hot Pots5.png"),
            },
            {
              id: 6,
              name: "Tahini Chickpea Stew",
              price: "1050",
              additives:
                "(With fluffy Spring Onion naan bread, & a Creamy Garlic Hummus)",
              src: require("@/assets/img/Hot Pots6.png"),
            },
          ],
          Brunch: [
            {
              id: 1,
              name: "Fluffy Vanilla Vegan Pancakes",
              price: "650",
              additives:
                "(with assorted berries, or a mint orange syrup, or chia jam, whipped cream or dark chocolate sauce)",
              src: require("@/assets/img/Brunch1.png"),
            },
            {
              id: 2,
              name: "PB & J Stuffed Sweet Potatoes",
              price: "750",
              additives:
                "(With Creamy Peanut Butter, Chia Jam, bananas & Assorted Berries)",
              src: require("@/assets/img/Brunch2.png"),
            },
            {
              id: 3,
              name: "Baked Spinach Mushroom Quesadillas",
              price: "750",
              additives: "(With Cheddar Cheese)",
              src: require("@/assets/img/Brunch3.png"),
            },
            {
              id: 4,
              name: "Honey Chilli Potatoes",
              price: "650",
              additives: "(With a Sesame Honey Chilli Sauce)",
              src: require("@/assets/img/Brunch4.png"),
            },
          ],
        },
      },
    };
  },
  computed: {
    ...mapGetters(["getCart", "getTotal"]),
  },
  mounted() {
    this.getMenu();
  },

  methods: {
    ...mapActions(["addToCart", "cartTotal", "addToCart"]),
    groupBy(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        console.log("THE RETURNED STUFF", rv);
        return rv;
      }, {});
    },
    async getMenu() {
      try {
        let response = await axios.get("/api/items");
        console.log("the response from menu ", response.data);
        let grouped = this.groupBy(response.data, "category");
        this.menuItems = grouped;
      } catch (err) {
        console.log("err", err);
      }
    },


    emptyCart(salad) {
      this.getCart.splice(this.getCart.indexOf(salad), 1);
      this.total = 0;
    },
  },
};
</script>

<style lang="css">
.category-title {
  font-family: var(--main-font);
  font-size: 3rem;
  font-weight: 500 !important;
}
</style>
