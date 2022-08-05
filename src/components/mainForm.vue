<template>
  <div
    class="input_field border-2 rounded-xl pt-10 pb-16 px-20 grid justify-center">
    <div
      class="grid lg:grid-cols-main justify-items-center md:grid-cols-1 xs:grid-cols-1 gap-2">
      <mySelect title="Валюта 1" v-model="currencyIn" @change="getCurrency" />
      <switchButton @click="changeCurrencyPair" />
      <mySelect title="Валюта 2" v-model="currencyOut" @change="getCurrency" />
      <myInput v-model="input" type="text" />
    </div>
    <div
      class="flex pt-8 gap-3 justify-center border-top"
      v-if="course !== undefined && input !== null">
      <p class="text-2xl text-white">Вы получите:</p>
      <div class="text-2xl text-white flex gap-2">
        {{ mathValue(Number(Object.values(course.data)), input) }}
        <div>
          {{ mathValue(Number(Object.values(course.data)), input) }}
        </div>
        <div>
          {{ currencyOut }}
        </div>
      </div>
    </div>
    <!-- <div
      class="flex pt-8 gap-3 justify-center border-top"
      v-else-if="
        currencyIn !== undefined &&
        currencyOut !== undefined &&
        course !== undefined &&
        course.status !== 200
      ">
      <p class="text-2xl text-white">
        Извините но пары {{ currencyIn }}{{ currencyOut }} несуществует
      </p>
    </div> -->
  </div>
</template>
<script>
import myInput from "./UI/myInput.vue";
import mySelect from "./UI/mySelect.vue";
import switchButton from "./UI/switchButton.vue";
import axios from "axios";
export default {
  components: {
    mySelect,
    myInput,
    switchButton,
  },
  data() {
    return {
      input: null,
      currencyIn: undefined,
      currencyOut: undefined,
      course: undefined,
    };
  },
  methods: {
    getCurrency() {
      if (this.currencyIn !== "" && this.currencyOut !== "") {
        axios.get(
            "/api/?get=rates&pairs=" +
              this.currencyIn +
              this.currencyOut +
              "&key=a65e139fc72359d4597691114962a4de"
          )
          .get("https://currate.ru/api/?get=rates&pairs=" + this.currencyIn + this.currencyOut + "&key=a65e139fc72359d4597691114962a4de", {
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
          })
          .then((response) => {
            this.course = response.data;
          });
      }
    },
    mathValue(rate, amount) {
      if (rate && amount) {
        const result = rate * amount;
        return result.toLocaleString("ru", {
          style: "currency",
          currency: this.currencyOut,
          currencyDisplay: "symbol",
        });
      }
    },
    changeCurrencyPair() {
      const temp = this.currencyIn;
      return (
        (this.currencyIn = this.currencyOut),
        (this.currencyOut = temp),
        this.getCurrency()
      );
    },
  },
};
</script>
