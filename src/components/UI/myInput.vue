<template>
  <div class="flex flex-col justify-center items-center">
    <myTitle title="Укажите количество" />
    <input type="text" :value="modelValue" @input="updateInput" class="rounded p-1 text-sm" />
  </div>
</template>
<script>
import myTitle from "./myTitle.vue";
export default {
  components: {
    myTitle,
  },
  props: {
    modelValue: Number,
    title: String,
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
