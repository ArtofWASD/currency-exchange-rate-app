<template>
  <div id="v-model-select">
    <select v-model="selected" class="w-60" v-bind:value="selected">
      <option disabled value="" >Выберите Валюту</option>
      <option v-for="item in convertArray">{{ item }}</option>
    </select>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "select-input",
  props: {
    messageObj: {
      type: String,
      default: () => {},
    },
  },
  data() {
    return {
      selected: "",
      coursesPair: [],
    };
  },
  mounted() {
    axios.get("api/?get=currency_list&key=a65e139fc72359d4597691114962a4de").then((response) => {
      this.coursesPair = response.data.data.map(item => {
        return item.slice(0,3)
      })
    });
  },
  methods: {
    returnValue() {
      this.$emit("updateValue", this.selected);
    },
  },
  computed:{
    convertArray(){
      return this.coursesPair.filter((item, index)=>{
        return this.coursesPair.indexOf(item)===index
      })
    }
  }
};
</script>
