<template>
  <div class="wrapper grid bg-gradient-to-r from-green-500 to-blue-500 min-h-screen">
    <header>
      <nav class="nav p-2 justify-end">
        <navBar />
      </nav>
    </header>
    <main class="grid grid-flow-rows justify-center">
      <h1 class="text-3xl text-center mt-40 text-white">Курс обмена валют</h1>
      <div class="flex flex-col mt-10">
        <mainForm />
      </div>
    </main>
  </div>
</template>
<script>
import mainForm from "./components/mainForm.vue";
import navBar from "./components/navBar.vue";
export default {
  components: {
    mainForm,
    navBar,
  },
};
</script>
