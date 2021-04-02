import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

import VueFormulate from "@braid/vue-formulate";
Vue.use(VueFormulate, {
  classes: {
    outer: "pt-1",
    label: "sm:text-sm mt-1 mb-1 text-gray-600",
    input(context) {
      const border = context.hasErrors ? "border-red-500" : "border-gray-300";
      return `placeholder-gray-500 appearance-none rounded-md w-full px-3 py-2 border ${border} text-gray-900 focus:outline-none focus:border-primary sm:text-sm`;
    },
    help: "font-medium text-gray-500 text-xs mt-1",
    error: "font-medium text-red-500 text-xs mt-1",
  },
});

import Notifications from "vt-notifications";
Vue.use(Notifications);

// const plugin = {
//   install() {
//     Vue.toast = (params = {}) => {
//       Vue.$notify(
//         {
//           title: params.title || "Info",
//           text: "This channel archived by the owner!",
//           type: "info",
//           group: "main",
//           position: "bottom",
//         },
//         4000
//       );
//     };
//     Vue.prototype.$toast = Vue.toast;
//   },
// };
// Vue.use(plugin);
import Modal from "@/components/Modal.vue";
Vue.component("Modal", Modal);

import VueOffline from "vue-offline";

Vue.use(VueOffline);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
