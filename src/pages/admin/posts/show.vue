<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

defineOptions({
  name: "Show",
});

onMounted(() => {
  getPost();
});

const post = reactive({});
const route = useRoute();

const getPost = function () {
  axios
    .get(`http://localhost:3000/posts/${route.params.id}`)
    .then((res) => {
      Object.assign(post, res.data);
    })
    .catch()
    .finally();
};
</script>

<template>
  <div>
    <div>
      <h3>Posts</h3>
    </div>
    <div class="mt-4">
      <div>
        <div class="bg-white border border-gray-200 p-4">
          <h3 class="text-xl">
            {{ post.title }}
          </h3>
          <p class="mt-4 text-base">
            {{ post.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
