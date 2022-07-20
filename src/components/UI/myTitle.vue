<template>
  <p class="text-lg text-center py-2 text-white">{{ title }}</p>
</template>
<script>
export default {
  props: {
    title: {
      required: true,
    },
  },
};
</script>
