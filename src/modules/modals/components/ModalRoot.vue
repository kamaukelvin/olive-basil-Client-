<template>
  <section :class="{ 'modal-root': modal.component }">
    <transition name="modal">
      <component
        v-if="modal"
        :is="modal.component"
        v-bind:close="modal.close"
        v-bind:dismiss="modal.dismiss"
        v-bind="modal.props"
        :class="{ 'd-block': modal.component }"
      />
    </transition>
  </section>
</template>

<script>
import ModalService from '../services/modal.service';
import Modal from './Modal.vue';
export default {
  components: { Modal },
  data() {
    return {
      modal: {},
    };
  },
  created() {
    ModalService.$on('open', ({ component, props, resolve, reject }) => {
      this.modal = {
        component,
        props,
        close: (value) => {
          this.modal = {};
          resolve(value);
        },
        dismiss: (reason) => {
          this.modal = {};
          reject(reason);
        },
      };
    });
  },
 
};
</script>

<style scoped>
.modal-root {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease-out;
}
.modal-enter,
.modal-leave-to {
  transform: translateY(25px);
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
