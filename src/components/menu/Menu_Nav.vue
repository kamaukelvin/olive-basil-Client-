<template>
  <section class="wrapper">
    <div class="menu-nav">
      <h1 class="menu-nav-title">
        What's cooking the week of {{ dateBuilder() }}
      </h1>
      <p class="menu-nav-text">
        Seriously delicious recipes comin' at you every week. Pick your
        favourites and get cooking.
      </p>
    </div>
    <center data-spy="scroll" data-target=".navbar" data-offset="350">
      <div class="link-list my-3">
        <router-link class="link-item" to="#salads">Salads</router-link>
        <router-link class="link-item" to="#budhabowls"
          >Budha Bowls</router-link
        >
        <router-link class="link-item" to="#burgers">Burger</router-link>
        <router-link class="link-item" to="#breads">Breads</router-link>
        <router-link class="link-item" to="#stuffedsweetpotato"
          >Stuffed Sweet Potatoes</router-link
        >
        <router-link class="link-item" to="#hotpots">Hot Pots</router-link>
        <router-link class="link-item" to="#brunch">Brunch</router-link>
      </div>
    </center>
  </section>
</template>

<script>
export default {
  name: 'Menu-Nav',
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    dateBuilder() {
      let d = new Date();
      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      let date = d.getDate();
      let month = months[d.getMonth()];

      return `${month} ${date}`;
    },
  },
};
</script>

<style scoped>
.wrapper {
  border-bottom: 1px solid #dddddd;
}
.menu-nav {
  text-align: center;
  color: #444;
  margin-bottom: 5.2rem;
}

.menu-nav-title {
  font-family: var(--main-font);
  font-size: 3rem;
  font-weight: 500 !important;
}

.menu-nav-text {
  font-family: var(--content-font);
  font-size: 1.5rem;
  font-weight: 400;
}

.link-item {
  text-transform: uppercase;
  padding: 0 2rem;
  font-size: 1.35rem;
  font-family: var(--content-font);
  color: #444;
  font-weight: 600;
}
</style>
