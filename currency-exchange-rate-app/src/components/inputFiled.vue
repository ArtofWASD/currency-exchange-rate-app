<template lang="">
  <div class="input_field border-2 rounded-xl px-10 py-28">
    <div>
      <p>Поле для ввода валюты</p>
    </div>
    <selectInput />
    <div>
      <p>Укажите количество</p>
    </div>
    <input v-model="input"/>
  </div>
</template>
<script>
import selectInput from "./UI/selectInput.vue";
import input from "./UI/input.vue";
export default {
  components: {
    selectInput,
    input,
  },
  data() {
    return{
        input:''
    }
  },
  
};
</script>
<style lang=""></style>
