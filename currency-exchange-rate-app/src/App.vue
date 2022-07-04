<template>
  <div class="p-5 flex flex-col">
    <post-form @create="createPost"/>
    <post-list :posts="posts"/>
  </div>
</template>

<script>

import PostList from './components/postList.vue'
import PostForm from './components/postForm.vue'

export default {
  components:{
    PostList,
    PostForm
},
  data() {
    return {
      posts: [
        { id: 1, title: "some title 1", description: "Lorem ipsum" },
        { id: 2, title: "some title 2", description: "Lorem ipsum" },
        { id: 3, title: "some title 3", description: "Lorem ipsum" },
        { id: 4, title: "some title 4", description: "Lorem ipsum" },
      ],
    };
  },
  methods: {
    createPost(post){
      this.posts.push(post)
    }
  },
};
</script>
