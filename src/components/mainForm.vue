<template>
  <div class="input_field border-2 rounded-xl px-10 py-20 grid justify-center">
    <div class="grid lg:grid-cols-3 sm:grid-cols-1 sm:justify-items-center justify-between items-center gap-5">
      <selectComponent title="Валюта 1" v-model="currencyIn" @change="getCurrency" />
      <!-- <switchButton @click="changeCurrencyPair"></switchButton> -->
      <selectComponent title="Валюта 2" v-model="currencyOut" @change="getCurrency" />
      <amountInput v-model="input" type="text" />
    </div>
    <div class="flex pt-8 gap-3 justify-center border-top" v-if="course !== undefined && input !== null">
      <p class="text-2xl text-white">Вы получите:</p>
      <div class="text-2xl text-white flex gap-2">
        <div>
          {{ mathValue(Number(Object.values(course.data)), input) }}
        </div>
        <div>
          {{ currencyOut }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import selectInput from "./UI/selectCurrencyInput.vue";
import amountInput from "./UI/amountInput.vue";
import switchButton from "./UI/switchButton.vue";
import selectComponent from "../components/selectComponent.vue";
import axios from "axios";

export default {
  components: {
    selectInput,
    amountInput,
    switchButton,
    selectComponent,
  },
  data() {
    return {
      input: null,
      currencyIn: "",
      currencyOut: "",
      course: undefined,
    };
  },
  methods: {
    getCurrency() {
      if (this.currencyIn !== "" && this.currencyOut !== "") {
        axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
        axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
        axios.get("https://currate.ru/api/?get=rates&pairs=" + this.currencyIn + this.currencyOut + "&key=a65e139fc72359d4597691114962a4de").then((response) => {
          this.course = response.data;
        });
      }
    },
    mathValue(rate, amount) {
      if (rate && amount) {
        const result = rate * amount;
        return result.toFixed(2);
      }
    },
    changeCurrencyPair() {
      const temp = this.currencyIn;
      return (this.currencyIn = this.currencyOut), (this.currencyOut = temp);
    },
  },
};
</script>
