<template>
  <div class="container checkout" v-if="this.getSelectedPlan && this.getTotal">
       <CheckoutModal
      v-show="isModalVisible"
      @close="closeModal"
    />
    <div class="row">
      <div class="col-md-4 order-md-2 mb-4">
        <div>
        
          <div class="card mt-5">
            <img
              :src="this.getSelectedPlan.image"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title">{{this.getSelectedPlan.title}}<a class="change_plan" @click="changePlan">change serving plan</a></h3>
              <h5 class="card-subtitle clearfix">
                Preferred meals: {{this.getSelectedPlan.meal.map((meal)=>meal)}}
               <span class="d-block"> Meals Per week: {{this.getSelectedPlan.mealPerWeek}}</span>
              </h5>
              
              <hr />
              <p class="card-text">
                <ul class="list-group mb-3">
          <li
            class="list-group-item d-flex justify-content-between lh-condensed" v-for="(product, index) in this.getCart" :key="index"
          >
            <div>
              <h6 class="my-0 font-weight-bold">{{product.name}}</h6>
              <span class="text-muted">Quantity : {{product.quantity}}</span>
            </div>
            <span class="text-muted">Ksh. {{product.price}}</span>
          
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (Ksh)</span>
            <strong>Ksh.{{this.getTotal}}</strong>
          </li>
        </ul>
              </p>
          
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">Billing address</h4>
        <form class="needs-validation" @submit.prevent="postOrder">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">First name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
                v-model="order.Fname"
                required
              />
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName">Last name</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder=""
                v-model="order.Lname" 
                required
              />
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="email"
              >Email</label
            >
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="you@example.com"
              v-model="order.email" 
              disabled
            />
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div class="mb-3">
            <label for="address">Address</label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="1234 Main St"
              required
               v-model="order.address"
            />
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

         

          <h4 class="mb-3">Payment</h4>

          <div class="d-block my-3">
            <div class="custom-control custom-radio">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                class="custom-control-input"
                checked
                required
              />
              <label class="custom-control-label" for="credit"
                >MPESA</label
              >
            </div>
           
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="cc-name">Phone Number</label>
              <input
                type="text"
                class="form-control"
                id="cc-name"
                placeholder=""
                required
                v-model="order.phone"
              />
            </div>
            
          </div>
         
          <hr class="mb-4" />
          <button class="btn text-white btn-lg btn-block" type="submit" style="background:#55880d" >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios"
import CheckoutModal from "@/components/modals/CheckoutModal.vue";
export default {
  name: 'Checkout',
  components:{CheckoutModal},
   
data(){
    return{
      isModalVisible:false,
       open: false,
order:{
  Fname:"",
  Lname:"",
  email:"",
  address:"",
  phone:"",
  billData:{
    totalAmount:"",
    mealsChosen:[],
    mealsPerWeek:"",
    itemsPicked:[],
    servingPlan:""
  }
}
    }
  },
    computed: {
    ...mapGetters(["getCart","getSelectedPlan","getTotal","getUser",])},
    methods:{

        showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      changePlan(){
        this.$router.push({ name: 'Pricing' })
      },
    
        
async postOrder(){
  const response = await axios.post("api/orders", {
         Fname: this.order.Fname,
    Lname: this.order.Lname,
    email: this.order.email,
    address: this.order.address,
    phone: this.order.phone,
    billData: {
      totalAmount: this.order.billData.totalAmount,
      mealsChosen: this.order.billData.mealsChosen,
      mealsPerWeek: this.order.billData.mealsPerWeek,
      itemsPicked: this.order.billData.itemsPicked,
      servingPlan: this.order.billData.servingPlan,
    }
      });
      console.log("THE RESPONSE FROM ORDER IS", response);
      this.showModal()
      
      }
    },
    mounted(){
      if(Object.keys(this.getSelectedPlan).length === 0 && this.getSelectedPlan.constructor === Object){
        this.$router.push({ name: 'Menus' })
      }
      console.log("THE ORDERERER", this.getSelectedPlan)
      this.order.billData.mealsChosen= this.getSelectedPlan.meal
      this.order.billData.mealsPerWeek= this.getSelectedPlan.mealPerWeek
      this.order.billData.servingPlan= this.getSelectedPlan.title
      this.order.billData.totalAmount= this.getTotal
      this.order.email= this.getUser
      this.order.billData.itemsPicked= this.getCart.map(item =>({title:item.name,quantity:item.quantity}))

        console.log("1213131313", this.order)
      
    }
  
};
</script>

<style lang="scss" scoped>
.change_plan{
float:right;
font-size: 12px;
cursor:pointer
}
.checkout {
  margin-top: 12rem;
  margin-bottom: 7.5rem;
}
</style>
