<template>
  <div class="top">
    <TopStrip />
    <div class="container-fluid mt-5">
      <MenuNav />
      <Categories />
      <div class="container mb-5">
        <div class="extras">
          <h5 class="extras-title">EXTRAS</h5>
          <p class="extras-text">
            - Request for Extra Protein in your meal +200/=
          </p>
          <p class="extras-text">
            - Request for replacement of Starch for a gluten free option +200/=
          </p>
          <p class="extras-text">- Request for More Veggies +100/=</p>
          <p class="extras-text">- Request for Extra Sauce/Dressing +150/=</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopStrip from '@/components/partials/TopStrip';
import MenuNav from '@/components/menu/Menu_Nav';
import Categories from '@/components/menu/Categories';

export default {
  name: 'Menus',
  components: {
    TopStrip,
    MenuNav,
    Categories,
  },
};
</script>
<style lang="css" scoped>
.top {
  margin-top: 9.5rem;
}

.extras-title {
  font-family: var(--main-font);
  font-size: 3rem;
  font-weight: 500 !important;
}
.extras-text {
  font-family: var(--content-font);
  font-size: 1.6rem;
  font-weight: 600 !important;
  color: #444;
  margin-left: 1.25rem;
}
</style>
