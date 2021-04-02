<template>
  <router-link :to="to" :class="computedClass">{{ text }}</router-link>
</template>
<script>
export default {
  props: ["to", "text"],
  data() {
    return {
      isCurrent: false,
    };
  },
  computed: {
    computedClass() {
      return this.$route.path === this.to
        ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
        : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
    },
  },
};
</script>
