<template>
  <p class="text-lg text-left py-2 text-white">{{ title }}</p>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
