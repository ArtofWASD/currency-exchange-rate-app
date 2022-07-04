<template lang="">
  <h2 class="text-2xl">Добавить пост</h2>
  <form class="flex form py-2 justify-between" @submit.prevent>
    <div class="flex flex-col">
      <input
        class="border-2 border-red-300 pl-2 mt-2"
        v-model="post.title"
        placeholder="Описание"
        type="text"
      />
      <input
        class="border-2 border-red-300 pl-2 mt-2"
        v-model="post.description"
        placeholder="Название"
        type="text"
      />
    </div>
    <my-button class="form__btn" @click="createPost">Создать пост</my-button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      post: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        description: "",
      };
    },
  },
};
</script>
<style lang=""></style>
