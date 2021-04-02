<template>
  <ViewElement title="Account" class="text-gray-700"
    ><div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Account Information
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details.</p>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div
            class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Email address</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ $store.getters.email }}
            </dd>
          </div>
          <div
            class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">Customer type</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Standard
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </ViewElement>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
import ViewElement from "@/components/ViewElement.vue";
export default {
  components: { ViewElement },
  data: () => ({
    keyword: "",
    keywords: [],
    isFailed: false,
  }),
  computed: {},
  methods: {
    addKeyword() {
      this.$store.commit(
        "setKeywords",
        this.$store.getters.keywords.concat([
          { text: this.keyword, id: uuidv4(), isActive: true },
        ])
      );
    },
  },
};
</script>