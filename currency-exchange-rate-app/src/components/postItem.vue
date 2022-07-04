<template>
  <div class ='post mt-2 flex justify-between items-center rounded border-red-300 border-2'>
    <div class="py-2 my-1 ">
      <div class="flex gap-2 my-1 pl-3"><strong>Название:</strong>{{ post.title }}</div>
      <div class="flex gap-2 my-1 pl-3"><strong>Описание:</strong>{{ post.description }}</div>
    </div>
    <div class="post__btn">
      <my-button>Удалить пост</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
