<template>
  <div class="flex flex-col justify-center items-center">
    <inputTitle title="Укажите количество"/>
    <input type="text" :value="modelValue" @input="updateInput" class="rounded p-1" />
  </div>
</template>
<script>
import inputTitle from "./inputTitle.vue";
export default {
    components: {
inputTitle
    },
  props: {
    modelValue: [String, Number],
    title: {
      type: Text,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
