<template lang="">
  <main
    class="main flex flex-col items-center bg-gradient-to-r from-green-500 to-blue-500 min-h-screen"
  >
    <h1 class="text-3xl mt-40 text-white">Курсы обмена валют</h1>
    <div class="flex gap-5 mt-10">
      <inputField />
    </div>
    <div>
      {{ courses.data }}
    </div>
  </main>
</template>

<script>
import inputField from "./components/inputFiled.vue";
import axios from "axios";
export default {
  data() {
    return {
      courses: {},
    };
  },
  components: {
    inputField,
  },
  mounted() {
    axios
      .get(
        "api/?get=rates&pairs=USDRUB,EURRUB&key=a65e139fc72359d4597691114962a4de",
      )
      .then((response) => {
        this.courses = response.data;
      });
  },
};
</script>
<style lang=""></style>
