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
import ModalMixin from '@/modules/modals/mixins/ModalMixin';
export default {
  name: 'MenuModal',
  components: { Modal, ModalHeader, ModalBody, ModalFooter },
  mixins: [ModalMixin],
};
</script>
<style lang="scss"></style>
