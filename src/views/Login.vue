<template>
  <div class="top">
    <TopStrip />
  </div>
</template>

<script>
import TopStrip from "@/components/partials/TopStrip";
export default {
  name: "Gifts",
  components: {
    TopStrip,
  },
};
</script>
<style lang="css" scoped>
.top {
  margin-top: 9.5rem;
}
</style>
