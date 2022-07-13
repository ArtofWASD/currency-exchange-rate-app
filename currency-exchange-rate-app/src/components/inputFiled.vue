<template lang="">
  <div class="input_field border-2 rounded-xl px-10 py-20">
    <div class="grid grid-cols-3 items-end justify-between gap-5">
      <section>
        <p class="text-lg text-left py-2 text-white">
          Валюта из которой хотите сделать обмен
        </p>
        <selectInput v-model="currencyIn" @change="getCurrency" />
      </section>
      <section>
        <p class="text-lg text-left py-2 text-white">
          Валюта в которую хотите сделать обмен
        </p>
        <selectInput v-model="currencyOut" @change="getCurrency" />
      </section>
      <section>
        <p class="py-2 text-lg text-left text-white">
          Укажите количество валюты
        </p>
        <myInput v-model="input" type="text" />
      </section>
    </div>
    <div class="flex pt-4 gap-3 justify-center" v-if="course !== undefined">
        <p class="py-2 text-2xl text-left text-white">Вы получите: </p>
        <div class="py-2 text-2xl text-left text-white flex gap-2">
          <div>
            {{mathValue(Number(Object.values(course.data)), input)}}
          </div>
          <div>
            {{currencyOut}}
          </div>
          
        </div>
        
    </div>
  </div>
</template>
<script>
import selectInput from "./UI/selectInput.vue";
import myInput from "./UI/myInput.vue";
import axios from "axios";

export default {
  components: {
    selectInput,
    myInput,
  },
  data() {
    return {
      input: "",
      currencyIn: "",
      currencyOut: "",
      course: undefined,
    };
  },
  methods: {
    getCurrency() {
      if (this.currencyIn !== "" && this.currencyOut !== "") {
        axios
          .get(
            "/api/?get=rates&pairs=" +
              this.currencyIn +
              this.currencyOut +
              "&key=a65e139fc72359d4597691114962a4de"
          )
          .then((response) => {
            this.course = response.data;
          });
      }
    },
    mathValue(rate, amount){
      if (rate && amount) {
        return rate * amount
      }
    }
  },
};
</script>
<style lang=""></style>
