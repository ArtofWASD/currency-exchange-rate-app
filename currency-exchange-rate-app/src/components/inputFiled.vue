<template lang="">
  <div class="input_field border-2 rounded-xl px-10 py-20">
    <div class="grid grid-cols-3 items-end gap-5">
      <section>
        <p class="text-lg text-left py-2 text-white">
          Выберите валюту из <br />
          которой хотите сделать обмен
        </p>
        <selectInput v-model="currency.currencyIn"/>
      </section>
      <section>
        <p class="text-lg text-left py-2 text-white">
          Выберите валюту в <br />
          которую хотите сделать обмен
        </p>
        <selectInput v-model="currency.currencyOut"/>
      </section>
      <section>
        <p class="py-2 text-lg text-left text-white">
          Укажите количество валюты
        </p>
        <myInput v-model="currency.input" type="text" />
      </section>
    </div>
  </div>
</template>
<script>
import selectInput from "./UI/selectInput.vue";
import myInput from "./UI/myInput.vue";
export default {
  components: {
    selectInput,
    myInput,
  },
  data() {
    return {
      currency: {
        input: "",
        currencyIn:'',
        currencyOut:'',
        pair: [],
      },
    };
  },
  computed:{
    currencyPair(){
      const arr = []
      arr.push(this.currency.currencyIn)
      arr.push(this.currency.currencyOut)
      this.currency.pair = arr.join('')
    }
  }
};
</script>
<style lang=""></style>
