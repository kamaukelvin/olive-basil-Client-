<template>
  <div class="top">
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
    />
    <TopStrip />
    <Hero />
    <Features />
  </div>
</template>

<script>
import TopStrip from "@/components/partials/TopStrip";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";

import Modal from "@/components/modals/Modal.vue";

export default {
  name: "Home",
  components: {
    TopStrip,
    Hero,
    Features,
     Modal
  },
  data() {
    return {
      open: false,
      lastScrollPosition: 0,
      isModalVisible: false,
    };
  },
  mounted() {
    this.showModal()
  },
 
  methods: {
   
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
  },
};
</script>
<style lang="css" scoped>
.top {
  margin-top: 9.5rem;
}
</style>
