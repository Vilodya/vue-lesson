<script setup>
import axios from "axios";
import { reactive } from "vue";

defineOptions({
  name: "Create",
});

const post = reactive({
  title: "",
  content: "",
});

const storePost = function () {
  axios.post("http://localhost:3000/posts", post).then();
};
</script>

<template>
  <div>
    <div class="bg-white border border-gray-200 p-4">
      <div>
        <input
          v-model="post.title"
          type="text"
          placeholder="title"
          class="border border-gray-200 p-4 w-full"
        />
      </div>
      <div class="mt-4">
        <textarea
          v-model="post.content"
          type="text"
          placeholder="content"
          class="border border-gray-200 p-4 w-full"
        />
      </div>
      <div class="mt-4">
        <a
          @click.prevent="storePost"
          href="#"
          class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white"
          >Store Post</a
        >
      </div>
    </div>
  </div>
</template>
