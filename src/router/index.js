import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Keywords.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("@/views/SignUp.vue"),
  },
  {
    path: "/login",
    name: "LogIn",
    component: () => import("@/views/LogIn.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("@/views/Account.vue"),
  },
  {
    path: "/keywords",
    name: "Keywords",
    component: () => import("@/views/Keywords.vue"),
  },
  {
    path: "/:path(.*)",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (!["LogIn", "SignUp"].includes(to.name) && !store.state.token)
    next({ name: "LogIn" });
  else if (["LogIn", "SignUp"].includes(to.name) && store.state.token) {
    next({ name: "Keywords" });
  } else next();
});

export default router;
