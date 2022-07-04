<template lang="">
  <main class="main flex flex-col items-center bg-gradient-to-r from-green-500 to-blue-500 min-h-screen">
    <h1 class="text-3xl mt-40 text-white ">Курсы обмена валют</h1>
    <div class="flex gap-5 mt-10">
   <inputField/>
    </div>
    <div>
      {{result}}
    </div>
  </main>
</template>

<script>
import inputField from "./components/inputFiled.vue";
export default {
  components: {
    inputField,
  },
  setup(){
 
  }
};
</script>
<style lang=""></style>
