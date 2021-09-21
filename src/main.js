import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./axios";
import "@/services/Api";
import icons from "v-svg-icons";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js";
import jQuery from "jquery";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

window.$ = window.jQuery = jQuery;

library.add(faFacebook, faInstagram, faTwitter);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(Element);

Vue.component("icon", icons);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
