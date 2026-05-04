<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

defineOptions({
  name: "Edit",
});

const route = useRoute();
const post = reactive({
  title: "",
  content: "",
});

const getPost = function () {
  axios
    .get(`http://localhost:3000/posts/${route.params.id}`)
    .then((res) => {
      Object.assign(post, res.data);
    })
    .catch()
    .finally();
};

const updatePost = function () {
  axios
    .patch(`http://localhost:3000/posts/${route.params.id}`, post)
    .then((res) => {});
};

onMounted(() => {
  getPost();
});
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
          @click.prevent="updatePost"
          href="#"
          class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white"
          >Update Post</a
        >
      </div>
    </div>
  </div>
</template>
