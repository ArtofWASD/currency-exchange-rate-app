<template>
  <div id="v-model-select">
    <select class="p-1 rounded"  @input="returnValue" v-model="selected">
      <option disabled value="">Выберите Валюту</option>
      <option v-for="item in currency">{{ item }}</option>
    </select>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    modelValue:String,
  },
  data() {
    return {
      currency: "",
      selected: "",
    };
  },
  mounted() {
    axios.get("/api/?get=currency_list&key=a65e139fc72359d4597691114962a4de").then((response) => {
      const arr = response.data.data.map((item) => {
        return item.slice(0, 3);
      });
      this.currency = arr.filter((item, index) => {
        return arr.indexOf(item) === index;
      });
    });
  },
  methods: {
    returnValue(e) {
      this.$emit("update:modelValue", e.target.value);
      
    },
    change(e) {
      this.selected = e.target.value;
    }
  },
};
</script>
