<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light navbar-expand-sm fixed-top"
    >
      <div class="container">
        <router-link to="/">
          <img class="logo pt-1" alt="logo" src="../assets/img/logo.png" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/why_plants" class="nav-link">
                Why Plants
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/menus" class="nav-link">
                Menus
              </router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link to="/pricing" class="nav-link">
                Pricing
              </router-link>
            </li> -->
            <li class="nav-item">
              <router-link to="/gifts" class="nav-link">
                Gifts
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/test" class="nav-link">
                Test
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="posts" class="nav-link">
                Posts
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="login mt-2" to="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  role="img"
                  aria-labelledby="a326l1oewze6gjkm7nbd6i53hufu5v3a"
                  width="30"
                  fill="#79c039"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 0a15 15 0 110 30 15 15 0 010-30zm2 16h-4c-3 0-5.5 2.2-5.5 5 0 .6.5 1 1 1h13c.5 0 1-.4 1-1 0-2.8-2.4-5-5.4-5zM15 6a4.5 4.5 0 000 9 4.5 4.5 0 000-9z"
                  ></path>
                </svg>
              </router-link>
            </li>
            <li>
              <div id="top-cart" class="top-cart ml-4 dropdown open">
                <a
                  class="dropdown-toggle"
                  id="triggerId top-cart-trigger"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="cart-icon fas fa-shopping-cart"></i>
                  <span>{{ this.getCart.length }}</span>
                </a>
                <MiniCart />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "@/components/menu/MiniCart";
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  props: {},
  components: {
    MiniCart,
  },
  methods: {},
  computed: {
    ...mapGetters(["getCart"]),
  },
};
</script>

<style lang="css" scoped>
.logo {
  width: 25rem;
}
.navbar {
  background-color: #fff !important;
  height: 9.5rem;
  border-bottom: 1px solid #ddd;
}

.navbar-light .navbar-nav .nav-link {
  color: #444;
}

.nav-link {
  margin: 0 2.1rem !important;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 600;
  font-family: var(--content-font);
}

.nav-link:focus,
.nav-link:hover {
  color: transparent;
  border-bottom: 2px solid #79c039;
  transition: 5s, ease-in;
}

#navbarSupportedContent.navbar-collapse.collapse.show {
  background-color: #fff;
  padding: 3rem;
  transition: 0.2s;
}

.dropdown-toggle {
  color: #79c039;
}

.dropdown-toggle:hover {
  color: #55880d;
}

.cart-icon {
  font-weight: 900;
  font-size: 1.6rem;
  color: #79c039;
  margin-top: 6px;
}

.cart-icon:hover {
  color: #55880d;
}
</style>
