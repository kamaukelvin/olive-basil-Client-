<template>
  <div class="signup-page top">
    <transition name="fade">
      <div v-if="!registerActive" class="wallpaper-login"></div>
    </transition>
    <div class="wallpaper-register"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div class="card register" v-bind:class="{ error: emptyFields }">
            <center><h1>New To Olive &amp; Basil</h1></center>
            <button class="button-facebook btn-block">
              Sign Up with Facebook
            </button>
            <div class="divider">
              <div class="divider-dash"></div>
              <div class="divider-text">OR</div>
              <div class="divider-dash"></div>
            </div>
            <form class="form-group" @submit.prevent="handleSignUp()">
              <input
                v-model="emailReg"
                type="email"
                class="form-control lr-input"
                placeholder="Email"
                required
              />
              <input
                v-model="passwordReg"
                type="password"
                class="form-control lr-input"
                placeholder="Password (minimum 8 characters)"
                required
              />
              <!-- <input
                v-model="confirmReg"
                type="password"
                class="form-control"
                placeholder="Confirm Password"
                required
              /> -->
              <button type="submit" class="button">
                Sign Up
              </button>
              <hr />
              <center class="redirect">
                <p>
                  Are You Already a Customer?
                </p>
                <router-link
                  v-bind:to="{ name: 'Login' }"
                  @click="
                    (registerActive = !registerActive), (emptyFields = false)
                  "
                  >Log In</router-link
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
import axios from 'axios';
export default {
  name: 'Signup',
  components: {},
  data() {
    return {
      registerActive: false,
      emailReg: '',
      passwordReg: '',
      emptyFields: false,
    };
  },
  methods: {
    async handleSignUp() {
      await axios.post('/api/user/signup', {
        email: this.emailReg,
        password: this.passwordReg,
      });
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="css" scoped>
.redirect p {
  font-size: 1.4rem;
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
  margin-top: 7.5rem;
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

.signup-page {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100vh;
}

.signup-page .fade-enter-active,
.signup-page .fade-leave-active {
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}

.signup-page .fade-enter,
.signup-page .fade-leave-to {
  opacity: 0;
}

.signup-page .wallpaper-register {
  background: url('../../assets/img/login-bg1.png') no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
}

.signup-page h1 {
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
