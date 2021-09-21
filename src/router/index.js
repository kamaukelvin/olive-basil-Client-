import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Why_Plants from "../views/Why_Plants.vue";
import Menus from "../views/Menus.vue";
import Cart from "../views/Cart.vue";
import Pricing from "../views/Pricing.vue";
import Gifts from "../views/Gifts.vue";
import Test from "../views/Test.vue";
import Login from "@/components/auth/Login.vue";
import Signup from "@/components/auth/Signup.vue";
import Checkout from "@/components/menu/Checkout.vue";
import Posts from "@/components/Posts.vue";
import NewPost from "@/components/NewPost.vue";
import EditPost from "@/components/EditPost";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/why_plants",
    name: "Why_Plants",
    component: Why_Plants,
  },
  {
    path: "/menus",
    name: "Menus",
    component: Menus,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing,
  },
  {
    path: "/gifts",
    name: "Gifts",
    component: Gifts,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/posts/new",
    name: "NewPost",
    component: NewPost,
  },
  {
    path: "/posts/:id",
    name: "EditPost",
    component: EditPost,
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Default scroll position will be 0, 0 unless overridden by a saved position
    const position = {
      x: 0,
      y: 0,
    };

    // Override default with saved position (if it exists)
    if (savedPosition) {
      position.x = savedPosition.x;
      position.y = savedPosition.y;
    }

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash;

      // specify offset of the element
      if (to.hash === "#") {
        position.offset = { y: 350 };
        // return { selector: to.hash };
      }
      // else {
      //   return { x: 0, y: 0 };
      // }

      if (to.hash) {
        return {
          selector: to.hash,
          behavior: "smooth",
        };
      }

      // bypass #1number check
      if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
        return position;
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false;
    }
    // Listen for scrollBeforeEnter event and set scroll position
    return new Promise((resolve) => {
      this.app.$root.$once("scrollBeforeEnter", () => {
        resolve(position);
      });
    });
  },
});

export default router;
