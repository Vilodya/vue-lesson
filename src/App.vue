<script setup>
import { reactive, ref } from 'vue';

const posts = ref([]);

const post = reactive({
  title: '',
  content: '',
});

const storePost = function() {
  posts.value.unshift({
    title: post.title,
    content: post.content,
  });

  Object.assign(post, {
    title: '',
    content: '',
  });
};

const deletePost = function(post) {
  posts.value = posts.value.filter(p => p !== post);
};
</script>

<template>
  <div class="w-1/2 mx-auto p-4">
    <div class="bg-white border border-gray-200 p-4">
      <div class="mb-4">
        <input v-model="post.title" type="text" placeholder="title" class="p-4 border border-gray-200 w-full">
      </div>
      <div class="mb-4">
        <textarea v-model="post.content" placeholder="content" class="p-4 border border-gray-200 w-full"></textarea>
      </div>
      <div>
        <a @click.prevent="storePost" href="#" class=" inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white hover:bg-sky-700">Store Post</a>
      </div>
    </div>
    <div>
      <div v-for="post in posts" :key="post.title" class="bg-white border border-gray-200 p-4 mt-4 flex items-center justify-between">
        <div>
          <h3 class="text-lg text-gray-700">{{ post.title }}</h3>
          <p class="text-sm text-gray-500">{{ post.content }}</p>
        </div>
        <div>
          <div @click="deletePost(post)" class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4 text-red-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
