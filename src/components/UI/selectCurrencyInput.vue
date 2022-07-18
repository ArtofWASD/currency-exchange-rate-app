<template>
  <div id="v-model-select">
    <select v-model="selected" class="p-1 rounded" @change="returnValue">
      <option disabled value="">Выберите Валюту</option>
      <option v-for="item in convertArray">{{ item }}</option>
    </select>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
export default {
  name: "select-input",
  props: {
    modelValue: {
      type: String,
    },
  },
  setup() {
    const selected = ref(0);
    return { selected };
  },
  data() {
    return {
      coursesPair: [],
    };
  },
  mounted() {
    axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.get("/api/?get=currency_list&key=a65e139fc72359d4597691114962a4de").then((response) => {
      this.coursesPair = response.data.data.map((item) => {
        return item.slice(0, 3);
      });
    });
  },
  methods: {
    returnValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
  computed: {
    convertArray() {
      return this.coursesPair.filter((item, index) => {
        return this.coursesPair.indexOf(item) === index;
      });
    },
  },
};
</script>
