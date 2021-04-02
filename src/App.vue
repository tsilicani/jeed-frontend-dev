<template>
  <div class="bg-gray-50 min-h-screen">
    <router-view />
    <Toast /><Modal
      :showing="isOffline"
      :showClose="false"
      :backgroundClose="false"
      ><div class="bg-red-200 border-l-4 border-red-500 text-orange-dark p-4">
        <p class="font-bold">You are offline</p>
        <p>You can not use this app in offline mode.</p>
      </div></Modal
    ><Modal :showing="isFailed" :showClose="false" :backgroundClose="false"
      ><div class="bg-red-200 border-l-4 border-red-500 text-orange-dark p-4">
        <p class="font-bold">Error while syncing keywords</p>
        <p>Try to refresh.</p>
      </div></Modal
    >
  </div>
</template>
<script>
const axios = require("axios").default;
import { endpoint } from "@/settings";
import { mapState } from "vuex";
import Toast from "@/components/Toast";
import Modal from "@/components/Modal";
export default {
  components: { Toast, Modal },
  data: () => ({ isFailed: false }),
  computed: {
    ...mapState(["token", "keywords"]),
  },
  watch: {
    token(val) {
      if (val) {
        this.loadKeywords();
        this.$router.push("keywords");
      } else {
        this.$router.push("login");
      }
    },
    keywords: {
      handler(val) {
        if (this.token && val) {
          axios
            .post(
              endpoint + "keywords",
              {
                keywords: val,
              },
              {
                headers: {
                  authorization: `token ${this.$store.getters.token}`,
                },
              }
            )
            .catch((err) => {
              if (err.response.status === 403 || err.response.status === 401) {
                this.logOut();
              }
            });
        }
      },
      deep: true,
    },
  },
  methods: {
    logOut() {
      this.$store.commit("setToken", "");
      this.$store.commit("setEmail", "");
      this.$store.commit("setKeywords", null);
      this.$notify({
        title: "Info",
        text: "You are now logged out",
        type: "info",
      });
    },
    loadKeywords() {
      try {
        axios
          .get(endpoint + "keywords", {
            headers: {
              authorization: `token ${this.$store.getters.token}`,
            },
          })
          .then((response) => {
            this.$store.commit("setKeywords", response.data.keywords);
          })
          .catch((err) => {
            if (err.response.status === 403 || err.response.status === 401) {
              this.logOut();
            } else {
              this.isFailed = true;
            }
          });
      } catch (error) {
        this.$notify(
          {
            title: "Error",
            text: error?.response?.data?.error || "Something went wrong!",
            type: "error",
          },
          3000
        );
      }
    },
  },
  mounted() {
    if (this.token) {
      this.loadKeywords();
    }
  },
};
</script>
