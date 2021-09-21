<template>
  <Modal>
    <div class="modal-container">
      <img src="../../assets/img/sub-img.png" class="sub-img" alt="" />
      <div class="content">
        <ModalHeader class="title text-center">
          <h3>OH Hey!</h3>
          <p>We're so glad you found us!</p>
        </ModalHeader>
        <ModalBody class="text">
          <p>
            We're Olive & Basil Ke. A subscription based food distributor
            service. The first of it's kind, in East & Central Africa. Come on
            over & join the family. Good things come to those who sign up.
          </p>
        </ModalBody>
        <ModalFooter>
          <button @click="close('Modal closed')" class="btn">
            Close
          </button>
          <!-- <button @click="dismiss('Modal dismissed')" class="btn btn-primary">
            Dismiss
          </button> -->
        </ModalFooter>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/modules/modals/components/Modal.vue';
import ModalHeader from '@/modules/modals/components/ModalHeader.vue';
import ModalFooter from '@/modules/modals/components/ModalFooter.vue';
import ModalBody from '@/modules/modals/components/ModalBody.vue';
// import ModalMixin from '@/modules/modals/mixins/ModalMixin';
export default {
  name: 'HomeModal',
  components: { Modal, ModalHeader, ModalBody, ModalFooter },
  // mixins: [ModalMixin],
  methods:{
      close() {
        this.$emit('close');
      },
  }
};
</script>
<style lang="scss" scoped>
.sub-img {
  width: 100%;
}

.content {
  padding: 20px 30px;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.2s ease-in-out;
}

.title {
  padding: 0;
  display: block;
  h3 {
    padding: 0;
    text-align: center;
    font-family: var(--curly-font);
    // margin-left: 2rem;
    color: #e68618;
    font-size: 5.4rem;
  }
  p {
    font-family: var(--main-font);
    font-size: 2.3rem;
  }
}

.text {
  font-family: var(--content-font);
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
}

.btn {
  background: #79c039;
  color: #fff;
  padding: 3.5px 14px;
}
.btn:hover,
.btn:focus {
  background: #55880d;
  color: #fff;
}
</style>
