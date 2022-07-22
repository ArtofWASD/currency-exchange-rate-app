<template>
  <div
    class="wrapper flex flex-col min-h-screen"
    :class="{
      'bg-gradient-to-r from-indigo-300 to-blue-900': darkMode,
      'bg-gradient-to-r from-green-500 to-blue-500': lightMode,
    }">
    <header class="h-10 p-2">
      <nav class="nav p-2 flex justify-end">
        <myToggler @toggleDarkMode="onDarkMode" />
      </nav>
    </header>
    <main class="grid grid-flow-rows justify-center lg:pt-40 xs:pt-10">
      <h1 class="text-3xl text-center text-white py-10">Курс обмена валют</h1>
      <div class="flex flex-col">
        <mainForm />
      </div>
    </main>
  </div>
</template>
<script>
import mainForm from "./components/mainForm.vue";
import myToggler from "./components/UI/myToggler.vue";
export default {
  components: {
    mainForm,
    myToggler,
  },
  data: () => ({
    darkMode: false,
    lightMode: true,
  }),
  methods: {
    onDarkMode() {
      this.darkMode = !this.darkMode;
      this.lightMode = !this.lightMode;
    },
  },
};
</script>
