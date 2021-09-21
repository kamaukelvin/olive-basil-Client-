<template>
  <div class="top">
    <TopStrip />
    <GiftsHero />
    <GiftsWhat />
    <GiftsHow />
  </div>
</template>

<script>
import TopStrip from '@/components/partials/TopStrip';
import GiftsHero from '@/components/gifts/Gifts-Hero';
import GiftsWhat from '@/components/gifts/Gifts-What';
import GiftsHow from '@/components/gifts/Gifts-How';
export default {
  name: 'Gifts',
  components: {
    TopStrip,
    GiftsHero,
    GiftsWhat,
    GiftsHow,
  },
};
</script>
<style lang="css" scoped>
.top {
  margin-top: 9.5rem;
}
</style>
