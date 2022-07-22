<template>
  <div class="wrapper flex flex-col bg-gradient-to-r from-green-500 to-blue-500 min-h-screen dark:bg-black" :class="{ dark: darkMode }">
    <header class="h-10">
      <nav class="nav p-2 flex justify-end">
        <myToggler @toggleDarkMode="onDarkMode"/>
      </nav>
    </header>
    <main class="grid grid-flow-rows justify-center pt-40">
      <h1 class="text-3xl text-center text-white py-10">Курс обмена валют</h1>
      <div class="flex flex-col ">
        <mainForm />
      </div>
    </main>
  </div>
</template>
<script>
import mainForm from "./components/mainForm.vue";
import myToggler from "./components/UI/myToggler.vue"
export default {
  components: {
    mainForm,
    myToggler
  },
  data:()=>({
    darkMode:false
  }),
  methods: {
    onDarkMode(){
      this.darkMode =!this.darkMode
    }
  }
};
</script>
