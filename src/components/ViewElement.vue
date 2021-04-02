<template>
  <div class="view bg-white">
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svg
                class="h-8"
                id="Livello_1"
                data-name="Livello 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 134.87 39.6"
              >
                <g id="Livello_2" data-name="Livello 2">
                  <g id="Livello_1-2" data-name="Livello 1-2">
                    <g id="Livello_2-2" data-name="Livello 2-2">
                      <g id="Text">
                        <text
                          class="cls-1"
                          transform="translate(42.78 34.96) scale(1.04 1)"
                        >
                          Jeed
                        </text>
                      </g>
                      <g id="Logo">
                        <path
                          class="cls-2"
                          d="M43.72,0A49.59,49.59,0,0,0,22.65,8.68l-.5,3.53-2.08-1.5A28.53,28.53,0,0,0,9.51,29a2.73,2.73,0,0,0,.68,1.16l22.34-20-20.17,21a7.11,7.11,0,0,0,2.06.06C36.55,24,40.9,14.06,40.9,14.06l-4.55-1,6.18-.64c.16-.35.32-.7.45-1C45.85,4.41,43.72,0,43.72,0Z"
                        />
                        <path
                          class="cls-2"
                          d="M10.2,30.11C8,32.24,2.51,37.05,0,39.6l3.05-1.06,9.3-7.42A4,4,0,0,1,10.2,30.11Z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <NavLink to="/keywords" text="Keywords" />
              <NavLink to="/account" text="Account" />
            </div>
          </div>
          <div class="hidden md:block">
            <span
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white"
            >
              <svg
                class="-ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {{ $store.getters.email }} </span
            ><button
              @click="logOut"
              type="button"
              class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <svg
                class="-ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
          <div class="-mr-2 flex md:hidden">
            <button
              type="button"
              class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              @click="mobileMenuVisible = !mobileMenuVisible"
            >
              <svg
                v-if="!mobileMenuVisible"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                v-else
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div v-show="mobileMenuVisible" class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <router-link
            to="keywords"
            class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            >Keywords</router-link
          >

          <router-link
            to="account"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Account</router-link
          >
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="px-2 space-y-1">
            <span
              class="block px-3 py-2 rounded-md text-base font-medium text-white"
              >{{ $store.getters.email }}</span
            >
            <a
              @click="logOut"
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >Log out</a
            >
          </div>
        </div>
      </div>
    </nav>

    <header class="shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">{{ title }}</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
    <footer
      class="bg-gray-50 border-t border-gray-200 py-12 md:py-14 px-4 sm:px-6 lg:px-16 text-sm leading-5"
    >
      <div
        class="max-w-container mx-auto text-center space-y-6 md:space-y-0 md:text-left md:flex"
      >
        <div
          class="space-y-6 md:space-y-0 md:space-x-10 flex flex-col items-center md:flex-row"
        >
          <div class="flex items-center space-x-2">
            <div class="flex">
              <svg
                class="w-14 mr-4 mb-1"
                id="Livello_1"
                data-name="Livello 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 134.87 39.6"
              >
                <g id="Livello_2" data-name="Livello 2">
                  <g id="Livello_1-2" data-name="Livello 1-2">
                    <g id="Livello_2-2" data-name="Livello 2-2">
                      <g id="Text">
                        <text
                          style="fill: #1f2937"
                          class="cls-1"
                          transform="translate(42.78 34.96) scale(1.04 1)"
                        >
                          Jeed
                        </text>
                      </g>
                      <g id="Logo">
                        <path
                          class="cls-2"
                          d="M43.72,0A49.59,49.59,0,0,0,22.65,8.68l-.5,3.53-2.08-1.5A28.53,28.53,0,0,0,9.51,29a2.73,2.73,0,0,0,.68,1.16l22.34-20-20.17,21a7.11,7.11,0,0,0,2.06.06C36.55,24,40.9,14.06,40.9,14.06l-4.55-1,6.18-.64c.16-.35.32-.7.45-1C45.85,4.41,43.72,0,43.72,0Z"
                        />
                        <path
                          class="cls-2"
                          d="M10.2,30.11C8,32.24,2.51,37.05,0,39.6l3.05-1.06,9.3-7.42A4,4,0,0,1,10.2,30.11Z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div class="flex-1">
                Copyright © {{ new Date().getFullYear() }}.
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <div class="relative rounded-full overflow-hidden">
              <img
                src="@/assets/images/tsm.jpg"
                alt=""
                class="bg-gray-200"
                style="width: 30px; height: 30px"
                loading="lazy"
              />
              <div
                class="absolute inset-0 rounded-full border border-black border-opacity-10"
              ></div>
            </div>
            <p>
              Developed by
              <a
                href="https://www.linkedin.com/in/tobias-m-silicani/"
                class="font-medium text-gray-900 hover:text-gray-500 transition-colors duration-150"
                >Tobias M. Silicani</a
              >
            </p>
          </div>
        </div>
        <a
          href="https://twitter.com"
          class="inline-flex items-center space-x-2 text-twitter-blue ml-auto font-medium"
          ><svg width="20" height="20" fill="currentColor">
            <path
              d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
            ></path>
          </svg>
          <p>Share on Twitter</p></a
        >
      </div>
    </footer>
  </div>
</template>
<script>
import NavLink from "@/components/NavLink.vue";
export default {
  components: { NavLink },
  props: ["title"],
  data: () => ({ mobileMenuVisible: false, dropdownOpen: false }),
  methods: {
    logOut() {
      this.$store.commit("setToken", "");
      this.$store.commit("setEmail", "");
      this.$store.commit("setKeywords", []);
      this.$notify({
        title: "Info",
        text: "You are now logged out",
        type: "info",
      });
    },
  },
};
</script><style>
.cls-1 {
  isolation: isolate;
  font-size: 36.26px;
  fill: #fff;
  font-family: Poppins-SemiBold, Poppins;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.st3,
.cls-2 {
  fill: #65ef65;
}
</style>