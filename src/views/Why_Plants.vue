<template>
  <div class="top">
    <TopStrip />
    <div class="">
      <WhyHero />
      <WhyGood />
      <WhyClean />
      <Exciting />
      <Beliefs />
    </div>
  </div>
</template>

<script>
import TopStrip from '@/components/partials/TopStrip';
import WhyHero from '@/components/why plants/Why_Hero';
import WhyGood from '@/components/why plants/Why_Good';
import WhyClean from '@/components/why plants/Why_Clean';
import Exciting from '@/components/why plants/Exciting';
import Beliefs from '@/components/why plants/Beliefs';
export default {
  name: 'Why_Plants',
  components: {
    TopStrip,
    WhyHero,
    WhyGood,
    WhyClean,
    Exciting,
    Beliefs,
  },
};
</script>
<style lang="css" scoped>
.top {
  margin-top: 9.5rem;
}
</style>
