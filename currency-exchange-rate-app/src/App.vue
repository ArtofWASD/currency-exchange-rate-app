<template lang="">
  <main
    class="main flex flex-col items-center bg-gradient-to-r from-green-500 to-blue-500 min-h-screen"
  >
    <h1 class="text-3xl mt-40 text-white">Курсы обмена валют</h1>
    <div class="flex gap-5 mt-10">
      <inputField />
    </div>
    <div>
      {{ data }}
    </div>
  </main>
</template>

<script>
import inputField from "./components/inputFiled.vue";
import { ref } from "vue";
import axios from "axios";
export default {
  components: {
    inputField,
  },
  setup() {
    const data = ref(null);
    axios
      .get(
        "https://currate.ru/api/?get=rates&pairs=USDRUB,EURRUB&key=a65e139fc72359d4597691114962a4de"
      )
      .then((data) => (result.data = data));
    return { data };
  },
};
</script>
<style lang=""></style>
