<template lang="">
  <div>
    <h3>Список постов</h3>
    <post-item v-for="post in posts" :post="post" />
  </div>
</template>

<script>
import postItem from "./postItem.vue";
export default {
  components: {
    postItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang=""></style>
