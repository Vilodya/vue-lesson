<script setup>
import { reactive, ref, watch, stop, provide, computed, onMounted } from "vue";
import PostItem from "./components/post/PostItem.vue";

onMounted(() => {
  console.log(inputImage);
});

const posts = ref([]);
const errors = ref([]);
const isOpen = ref(false);
const inputImage = ref(null);

const post = reactive({
  title: "",
  content: "",
  is_favored: false,
});

const editedPost = reactive({
  title: "",
  content: "",
});

const favoredPosts = computed(() => {
  return posts.value.filter((postItem => postItem.is_favored));
});

provide('posts', posts);

const storePost = function () {
  if (isNotValidated()) {
    return;
  }

  posts.value.unshift({
    title: post.title,
    content: post.content,
  });

  Object.assign(post, {
    title: "",
    content: "",
  });
};

const editPost = function (post) {
  isOpen.value = true;
  Object.assign(editedPost, {
    index: posts.value.indexOf(post),
    title: post.title,
    content: post.content,
  });
};

const updatePost = function () {
  Object.assign(posts.value[editedPost.index], {
    title: editedPost.title,
    content: editedPost.content,
  });
  isOpen.value = false;
};

const isNotValidated = function () {
  errors.value = [];
  if (post.title === "") {
    errors.value.push("Title is required");
  }
  if (post.content === "") {
    errors.value.push("Content is required");
  }

  return errors.value.length > 0;
};

watch(post, () => {
  errors.value = [];
});
</script>

<template>
  <div
    v-if="isOpen"
    @click="isOpen = false"
    class="modal-shadow w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black/80"
  >
    <div @click.stop class="modal bg-white border border-gray-200 p-4 w-1/2">
      <div class="mb-4">
        <input
          v-model="editedPost.title"
          type="text"
          placeholder="title"
          class="p-4 border border-gray-200 w-full"
        />
      </div>
      <div class="mb-4">
        <textarea
          v-model="editedPost.content"
          placeholder="content"
          class="p-4 border border-gray-200 w-full"
        ></textarea>
      </div>
      <div>
        <a
          @click="updatePost"
          href="#"
          class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white hover:bg-sky-700"
          >Update Post</a
        >
      </div>
    </div>
  </div>

  <div class="w-1/2 mx-auto p-4">
    <div class="bg-white border border-gray-200 p-4">
      <div class="mb-4">
        <input
          v-model="post.title"
          type="text"
          placeholder="title"
          class="p-4 border border-gray-200 w-full"
        />
      </div>
      <div class="mb-4">
        <input
          ref="inputImage"
          type="file"
          placeholder="title"
          class="p-4 border border-gray-200 w-full"
        />
      </div>
      <div class="mb-4">
        <textarea
          v-model="post.content"
          placeholder="content"
          class="p-4 border border-gray-200 w-full"
        ></textarea>
      </div>
      <div v-if="errors.length > 0" class="mb-4">
        <div v-for="error in errors" :key="error" class="text-red-500">
          {{ error }}
        </div>
      </div>
      <div>
        <a
          @click.prevent="storePost"
          href="#"
          class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white hover:bg-sky-700"
          >Store Post</a
        >
      </div>
    </div>
    <div class="grid gap-4 grid-cols-2">
      <div>
        <h3 class="mt-4">Posts</h3>
        <PostItem v-for="post in posts" :key="post.title" :post="post" @editpost="editPost" />
      </div>
      <div>
        <h3 class="mt-4">Favorite Posts</h3>
        <PostItem v-for="post in favoredPosts" :key="post.title" :post="post" @editpost="editPost" />
      </div>
    </div>
  </div>
</template>
