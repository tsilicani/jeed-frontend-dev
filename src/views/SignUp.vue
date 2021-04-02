<template>
  <AuthLayout title="Create an account">
    <div class="mt-5">
      <FormulateForm v-model.trim="formValues" #default="{ hasErrors }"
        ><FormulateInput
          type="email"
          name="email"
          label="Email"
          validation-name="Email"
          validation="required|email"
          autocomplete="username"
        /><FormulateInput
          type="password"
          name="password"
          label="Password"
          validation-name="Password"
          validation="required|min:8,length"
          autocomplete="new-password"
        />
        <button
          :disabled="hasErrors || loading"
          @click="submit"
          class="disabled:opacity-50 relative block w-full mt-5 py-2 px-3 border border-transparent rounded-md text-white font-semibold bg-gray-800 hover:bg-gray-700 focus:bg-gray-900 focus:outline-none focus:shadow-outline sm:text-sm"
        >
          <svg
            v-if="loading"
            class="animate-spin w-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path></svg
          ><span v-else>Sign up</span>
        </button></FormulateForm
      >
    </div>
    <div class="mt-6">
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-gray-100 text-gray-500"
            >Already have an account?</span
          >
        </div>
      </div>
      <router-link
        to="/login"
        class="mt-6 block w-full text-center py-2 px-3 border border-gray-300 rounded-md text-gray-900 font-medium hover:border-gray-400 focus:outline-none focus:border-gray-400 sm:text-sm"
        >Log in
      </router-link>
    </div></AuthLayout
  >
</template>
<script>
import AuthLayout from "@/components/AuthLayout";
const axios = require("axios").default;
import { endpoint } from "@/settings";

export default {
  components: { AuthLayout },
  data() {
    return {
      formValues: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    async submit() {
      this.loading = true;
      axios
        .post(endpoint + "signup", this.formValues)
        .then((response) => {
          const { email, token } = response.data;
          this.$store.setSession(email, token);
          this.$notify({
            title: "Success",
            text: "Account successfully created",
            type: "success",
          });
        })
        .catch((error) => {
          this.$notify(
            {
              title: "Error",
              text: error.response.data.error || "Something went wrong!",
              type: "error",
            },
            3000
          );
          if (error.response) {
            console.log(error.response.data);
          }
        })
        .finally(() => {
          this.loading = false;
          this.$router.push("keywords");
        });
    },
  },
};
</script>