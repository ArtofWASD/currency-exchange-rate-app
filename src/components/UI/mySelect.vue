<template>
  <div id="v-model-select">
    <myTitle :title="title" />
    <select class="p-1 rounded text-sm" v-model="selected">
      <option disabled value="">Выберите Валюту</option>
      <option v-for="item in currency">{{ item }}</option>
    </select>
  </div>
</template>
<script>
import axios from "axios";
import myTitle from "./myTitle.vue";
import { codeTranscript } from "../../service/currencyCodeTranscript.js";
export default {
  components: {
    myTitle,
  },
  props: {
    modelValue: String,
    title: String,
  },
  data() {
    return {
      currency: null,
    };
  },
  mounted() {
    axios
      .get("/api/?get=currency_list&key=a65e139fc72359d4597691114962a4de")
      .then((response) => {
        const arr = response.data.data.map((item) => {
          return item.slice(0, 3);
        });
        this.currency = arr.filter((item, index) => {
          return arr.indexOf(item) === index;
        });
      });
  },
  computed: {
    selected: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>
