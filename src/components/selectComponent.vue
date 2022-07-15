<template lang="">
  <div class="flex flex-col justify-center items-center">
    <inputTitle :title="title" />
    <selectInput @change="returnSelect"/>
  </div>
</template>
<script>
import inputTitle from "./UI/inputTitle.vue";
import selectInput from "./UI/selectCurrencyInput.vue";
export default {
  components: {
    inputTitle,
    selectInput,
  },
  props: {
    title: {
    },
    modelValue: {
      type: String,
    },
  },
  methods: {
    returnSelect(e){
        this.$emit("update:modelValue", e.target.value);
    }
  },
};
</script>
