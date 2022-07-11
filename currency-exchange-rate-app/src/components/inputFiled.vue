<template lang="">
  <div class="input_field border-2 rounded-xl px-10 py-28">
    <div class="flex gap-4 flex-wrap items-center">
      <section>
        <p class="text-lg text-left py-2 text-white">
          Выберите валюту из <br />
          которой хотите сделать обмен
        </p>
        <selectInput/>
      </section>
      <section>
        <p class="text-lg text-left py-2 text-white">
          Выберите валюту в <br />
          которую хотите сделать обмен
        </p>
        <selectInput/>
      </section>
      <section>
        <p class="py-2 text-lg text-left text-white">Укажите количество валюты</p>
        <myInput v-model="input" />
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
      input: "",
      currencyPair: [],
    };
  },
};
</script>
<style lang=""></style>
