<template>
  <div class="login-page top">
    <transition name="fade">
      <div v-if="!registerActive" class="wallpaper-login"></div>
    </transition>
    <div class="wallpaper-register"></div>

    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div class="card login" v-bind:class="{ error: emptyFields }">
            <center><h1>Welcome Back</h1></center>
            <button class="button-facebook btn-block">
              Login with Facebook
            </button>
            <div class="divider">
              <div class="divider-dash"></div>
              <div class="divider-text">OR</div>
              <div class="divider-dash"></div>
            </div>
            <form class="form-group" @submit.prevent="handleLogin()">
              <input
                v-model="user.emailLogin"
                type="email"
                class="form-control lr-input"
                placeholder="Email"
                required
              />
              <input
                v-model="user.passwordLogin"
                type="password"
                class="form-control lr-input"
                placeholder="Password (minimum 8 characters)"
                required
              />
              <div class="form-group form-check">
                <input
                  v-model="checked"
                  type="checkbox"
                  class="form-check-input checkbox"
                  id="keepSignedIn"
                />
                <label class="form-check-label ml-3 mt-1" for="keepSignedIn"
                  >Keep Me Signed In</label
                >
                <p class="float-right mt-2">
                  <a href="#">Forgot your password?</a>
                </p>
              </div>

              <button type="submit" class="button btn-block">
                Log In
              </button>
              <br />
              <hr />
              <!-- <div class="divider">
                <div class="divider-dash-full"></div>
              </div> -->
              <center class="redirect">
                <p>
                  Are You New to Olive &amp; Basil?
                </p>
                <router-link
                  v-bind:to="{ name: 'Signup' }"
                  @click="
                    (registerActive = !registerActive), (emptyFields = false)
                  "
                  >Signup</router-link
                >
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "User_Login",
  components: {},
  data() {
    return {
      registerActive: false,
      user:{
  emailLogin: "",
      passwordLogin: "",
      },
    
      checked: false,
      emptyFields: false,
    };
  },

  methods: {
       ...mapActions(["LogIn"]),

     handleLogin() {
      this.LogIn(this.user)
      // const response = await axios.post("/api/user/login", {
      //   email: this.emailLogin,
      //   password: this.passwordLogin,
      // });
      // console.log("THE RESPONSE FROM LOGIN IS", response);
      // sessionStorage.setItem("basil-token", response.data.data);
  
    },
  },
};
</script>

<style lang="css" scoped>
.redirect p {
  font-size: 1.4rem;
  font-weight: 500;
  font-family: var(--content-font);
}
.redirect > a {
  color: #55880d;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 700;
  font-family: var(--content-font);
}
.top {
  margin-top: 8rem;
}
.button {
  padding: 8px 30px;
  width: 100%;
  font-size: 1.6rem;
  margin: 12px 0;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  border: none;
  background: #79c039;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
}

.button-facebook {
  color: #fff;
  font-weight: 00;
  font-size: 1.6rem;
  padding: 8px 30px;
  border: none;
  background: #3b5998;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  display: inline-block;
  position: relative;
  font-family: var(--content-font);
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  /* border: 1px solid #ddd; */
  border-radius: 0;
  cursor: pointer;
  transition: color 0.1s ease-in-out, background 0.1s ease-in-out,
    border 0.1s ease-in-out;
}

.button,
input {
  overflow: visible;
}

.hr {
  border: 0;
  height: 1px;
  background: #ddd;
  margin: 16px 0;
}

.divider {
  margin: 18px 0;
}
.divider-dash {
  display: inline-block;
  width: 42%;
  margin: 4px 0;
  color: #737373;
  border-bottom: 1px solid #ccc;
}
.divider-dash-full {
  display: inline-block;
  width: 100%;
  margin: 4px 0;
  color: #737373;
  border-bottom: 1px solid #ccc;
}
.divider-text {
  display: inline-block;
  width: 9%;
  margin-right: 2.5%;
  margin-left: 2.5%;
  text-align: center;
  color: #737373;
  font-family: var(--content-font);
  font-size: 1.6rem;
}

p {
  line-height: 1rem;
  font-family: var(--content-font);
}

.card {
  padding: 20px;
  width: 90%;
}

.form-group input {
  margin-bottom: 20px;
}

.lr-input {
  appearance: none;
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.6rem;
  font-family: var(--content-font);
  line-height: calc(1rem + 0.375rem);
  color: #222;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.checkbox {
  /* appearance: none; */
  display: block;
  padding: 8px;
  font-size: 1rem;
  line-height: calc(1rem + 0.375rem);
  color: #222;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.login-page {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
}

.login-page .wallpaper-login {
  background: url("../../assets/img/login-bg.png") no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
}

.login-page .fade-enter-active,
.login-page .fade-leave-active {
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}

.login-page .fade-enter,
.login-page .fade-leave-to {
  opacity: 0;
}

.login-page .wallpaper-register {
  background: url("../../assets/img/login-bg1.png") no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
}

.login-page h1 {
  margin-bottom: 1.5rem;
  font-family: var(--main-font);
  font-size: 2.7rem;
}

.error {
  -webkit-animation-name: errorShake;
  animation-name: errorShake;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
}

@-webkit-keyframes errorShake {
  0% {
    -webkit-transform: translateX(-25px);
    transform: translateX(-25px);
  }
  25% {
    -webkit-transform: translateX(25px);
    transform: translateX(25px);
  }
  50% {
    -webkit-transform: translateX(-25px);
    transform: translateX(-25px);
  }
  75% {
    -webkit-transform: translateX(25px);
    transform: translateX(25px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes errorShake {
  0% {
    -webkit-transform: translateX(-25px);
    transform: translateX(-25px);
  }
  25% {
    -webkit-transform: translateX(25px);
    transform: translateX(25px);
  }
  50% {
    -webkit-transform: translateX(-25px);
    transform: translateX(-25px);
  }
  75% {
    -webkit-transform: translateX(25px);
    transform: translateX(25px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
</style>
