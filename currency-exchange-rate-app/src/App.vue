<template>
  <div class="p-5 flex flex-col">
    <form class="py-2" @submit.prevent>
      <h2 class="text-2xl">Добавить пост</h2>
      <input
        class="border-2 border-red-300 w-1/2 pl-2 mt-2"
        v-bind:value="title"
        @input="title = $event.target.value"
        placeholder="Описание"
      />
      <input
        class="border-2 border-red-300 w-1/2 pl-2 mt-2"
        v-bind:value="description"
        @input="description = $event.target.value"
        placeholder="Название"
      />
      <button class="border-2 p-3 rounded mt-2 bg-amber-500" @click="createPost">
        Создать пост
      </button>
    </form>
    <div class="posts py-2 my-1 rounded border-red-300 border-2" v-for="post in posts">
      <div class="flex gap-2 my-1 pl-3"><strong>Название:</strong>{{ post.title }}</div>
      <div class="flex gap-2 my-1 pl-3"><strong>Описание:</strong>{{ post.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "some title 1", description: "Lorem ipsum" },
        { id: 2, title: "some title 2", description: "Lorem ipsum" },
        { id: 3, title: "some title 3", description: "Lorem ipsum" },
        { id: 4, title: "some title 4", description: "Lorem ipsum" },
      ],
      title: "",
      description: "",
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        description: this.description,
      };
      this.posts.push(newPost);
      this.clearInput()
    },
    clearInput(){
      this.title = '';
      this.description = ""
    }
  },
};
</script>
