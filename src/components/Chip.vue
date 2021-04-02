<template>
  <div class="inline-block">
    <div :class="activeClass">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="feather feather-x cursor-pointer ${controlColor} rounded-full w-8 h-8 mr-1 hover:bg-thrivegreen"
        @click="toggleState"
      >
        <path
          v-if="!isActive"
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="{2}"
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />

        <path
          v-if="isActive"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="{2}"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div class="font-normal flex-initial">{{ text }}</div>
      <div class="flex flex-auto flex-row-reverse">
        <div>
          <svg
            @click="remove"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x cursor-pointer hover:text-red-400 rounded-full w-4 h-4 ml-2 mr-1 transform hover:scale-125 motion-reduce:transform-none"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["text", "id", "isActive"],
  computed: {
    activeClass() {
      const borderColor = this.isActive
        ? "border-thrivegreen"
        : "border-gray-300 text-gray-400";
      return `flex justify-center items-center m-1 font-medium p-1 rounded-full border-2  ${borderColor}`;
    },
    controlClass() {
      const controlColor = this.isActive ? "text-gray-600" : "text-green-300";
      return `feather feather-x cursor-pointer ${controlColor} rounded-full w-8 h-8 mr-1 transform hover:scale-110 motion-reduce:transform-none`;
    },
  },
  methods: {
    toggleState() {
      this.$store.commit(
        "setKeywords",
        this.$store.getters.keywords.map((i) => ({
          ...i,
          ...{ isActive: i.id === this.id ? !i.isActive : i.isActive },
        }))
      );
    },
    remove() {
      this.$store.commit(
        "setKeywords",
        this.$store.getters.keywords.filter((i) => i.id !== this.id)
      );
    },
  },
};
</script>