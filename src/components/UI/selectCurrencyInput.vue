<template>
  <div id="v-model-select">
    <select v-model="selected" class="p-1 rounded" @change="returnValue">
      <option value="КГИ">Выберите Валюту</option>
      <option v-for="item in convertArray">{{ item }}</option>
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
    };
  },
  mounted() {
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
