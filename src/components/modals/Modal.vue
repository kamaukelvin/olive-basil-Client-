<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal-container"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
           <img src="../../assets/img/sub-img.png" class="sub-img" alt="" />
           <div class="content">
           <div class="title text-center">
             <h3>OH Hey!</h3>
          <p>We're so glad you found us!</p></div>
          </div>
          </slot>
          <!-- <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button> -->
        </header>

        <section
          class="text"
          id="modalDescription"
        >
          <slot name="body">
            <p>
            We're Olive & Basil Ke. A subscription based food distributor
            service. The first of it's kind, in East & Central Africa. Come on
            over & join the family. Good things come to those who sign up.
          </p>
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            
          </slot>
          <button
            type="button"
            class="btn"
            @click="close"
            aria-label="Close modal"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<style lang="scss" scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

 .sub-img {
  width: 100%;
}
  .modal-container{
  width: 500px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.2s ease-in-out;
}

  .modal-footer {
    padding: 15px;
    
  }

  .modal-header {
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    position: relative;
    border:0;
     color: #4AAE9B;
    padding: 0
   
  }

  .modal-footer {
    flex-direction: column;
    align-items: end;
  }

  .modal-body {
    position: relative;
    padding:10px;
  }
.text {
     position: relative;
    padding: 0px 10px 10px 10px;
  font-family: var(--content-font);
  font-size: 1.6rem;
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

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
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
</style>