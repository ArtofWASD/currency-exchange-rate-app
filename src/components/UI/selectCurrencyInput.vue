<template>
  <div id="v-model-select">
    <select v-model="selected" class="p-1 rounded" @change="returnValue" :value="selected">
      <option disabled value="">Выберите Валюту</option>
      <option v-for="item in coursesPair">{{ item }}</option>
    </select>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "select-input",
  props: {
    modelValue: {
      type: String,
    },
  },
  data() {
    return {
      coursesPair: [],
      selected: "RUB",
    };
  },
  mounted() {
    axios.get("/api/?get=currency_list&key=a65e139fc72359d4597691114962a4de").then((response) => {
      const arr = response.data.data.map((item) => {
        return item.slice(0, 3);
      });
      this.coursesPair = arr.filter((item, index) => {
        return arr.indexOf(item) === index;
      });
    });
  },
  methods: {
    returnValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>
