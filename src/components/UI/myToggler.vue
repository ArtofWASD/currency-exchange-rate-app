<template>
  <label
    for="orange-toggle"
    class="inline-flex relative items-center mr-5 cursor-pointer">
    <input
      type="checkbox"
      value=""
      id="orange-toggle"
      class="sr-only peer"
      checked
      @change="toggleDarkMode" />
    <div
      class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
    <span class="sun ml-2" v-if="darkMode === false">
      <img src="../../assets/sun.png" alt="" class="sun w-6 h-6" />
    </span>
    <span class="moon ml-2" v-else-if="darkMode === true">
      <img src="../../assets/moon.png" alt="" class="w-6 h-6" />
    </span>
  </label>
</template>
<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.$emit("toggleDarkMode");
      this.darkMode = !this.darkMode;
    },
  },
};
</script>
<style scoped>
.sun{
  transition: all 1s ease-out;
}
.moon{
  transition: all 1s ease-out;
}
</style>
