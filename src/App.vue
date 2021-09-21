<template>
  <div id="app">
    <Loader />
    <Navbar />
    <NotificationAlert />
    <transition name="fade" mode="out-in" @before-enter="beforeEnter" appear>
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  created() {
    Event.$on("token:not-found", (isToThrow) => {
      if (isToThrow) {
        this.$router.push({ name: "Login" });
        // notification.notify(
        //   "warning",
        //   "User Not Logged In",
        //   "Log In to continue"
        // );
      }
    });
  },
  name: "App",
  components: {
    Loader,
    Navbar,
    Footer,
  },
  methods: {
    beforeEnter() {
      this.$root.$emit("scrollBeforeEnter");
    },
  },
};
</script>

<style>
/*
COLORS
green-dark: #55880d
green-light: #79C039
*/
:root {
  @font-face {
    font-family: "Kokomo Breeze";
    src: url("./assets/fonts/Kokomo Breeze/Kokomo Breeze Regular.otf");
  }

  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Zilla+Slab+Highlight:wght@400;700&family=Zilla+Slab:wght@300;400;500;600;700&display=swap");

  --main-font: "Zilla Slab";
  --content-font: "Open Sans";
  --curly-font: "Kokomo Breeze";
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}
</style>
