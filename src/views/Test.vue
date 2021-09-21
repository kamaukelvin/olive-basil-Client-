<template>
  <div class="top">
    <Menu_Items />
  </div>
</template>

<script>
import Menu_Items from '../components/menu/Menu_Items.vue';

export default {
  name: 'Test',
  components: {
    Menu_Items,
  },
};
</script>
<style lang="css" scoped>
.top {
  margin-top: 9.5rem;
}
</style>
