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
           <img src="../../assets/img/thanks.jpg" class="sub-img" alt="" />
           <div class="content">
           <div class="title text-center">
             <h5>Thank you for your order!</h5>
         </div>
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
            Kindly make your payment of amount Ksh <span class="amount">{{this.getTotal}}</span> to our till Number <span class="till">5372893</span> to process you order
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
           Back to Menu
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapGetters,mapActions } from "vuex";
  export default {
    name: 'Modal',
    computed:{
        ...mapGetters(["getTotal"])
    },
    methods: {
      ...mapActions(["clearCart"]),
      close() {
        this.$emit('close');
        this.$router.push({name:"Menus"})
        this.clearCart()
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
  font-size: 1.8rem;
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
  h5 {
    padding: 10px;
    text-align: center;
    font-family: var(--curly-font);
    // margin-left: 2rem;
    color: #e68618;
    font-size: 3rem;
  }
  p {
    font-family: var(--main-font);
    font-size: 2.3rem;
  }
}
.amount,.till{
  font-weight:bold
}
.till{
  color:#4AAE9B;
    font-size: 2.4rem;
}
</style>
