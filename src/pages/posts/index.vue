<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const posts = ref([]);
const status = ref(0);

const getPosts =function() {
  axios.get('http://localhost:3000/posts')
    .then(res => {
      posts.value = res.data;
      status.value = res.status;
    })
    .catch()
    .finally();
}

onMounted(() => {
  getPosts();
});
</script>

<template>
  <div>
    Posts
  </div>
  <div>
    <div v-for="post in posts">
      {{ post.title }}
    </div>
  </div>
  <div>
    {{ status }}
  </div>
</template>