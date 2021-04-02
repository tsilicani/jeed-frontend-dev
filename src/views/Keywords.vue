<template>
  <ViewElement title="Keywords" class="text-gray-700">
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <label for="keyword" class="block text-sm font-medium">
          Add keyword
        </label>
        <div class="mt-1 flex rounded-md shadow-sm">
          <span
            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50"
            ><svg
              @click="addKeyword"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="feather feather-x rounded-full w-8 hover:bg-thrivegreen cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="{2}"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <input
            v-model="keyword"
            type="text"
            name="keyword"
            class="focus:ring-green cursor-pointer focus:border-green flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 text-gray-500"
            placeholder="Keyword text"
          />
        </div>
      </div>
      <div
        class="col-span-3 sm:col-span-2 border-2 border-dashed border-gray-300 rounded-lg h-96 p-5"
      >
        <Chip
          v-for="item in $store.getters.keywords"
          :key="item.id"
          :id="item.id"
          :isActive="item.isActive"
          :text="item.text"
          :active="true"
        />
      </div></div
  ></ViewElement>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
import ViewElement from "@/components/ViewElement.vue";
import Chip from "@/components/Chip.vue";
export default {
  components: { Chip, ViewElement },
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