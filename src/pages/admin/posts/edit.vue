<script setup>
import { usePostStore } from "@/stores/post";
import { onMounted } from "vue";

defineOptions({
  name: "Edit",
});

const postStore = usePostStore();

onMounted(() => {
  postStore.getPost();
});
</script>

<template>
  <div>
    <div class="bg-white border border-gray-200 p-4">
      <div>
        <input
          v-model="postStore.post.title"
          type="text"
          placeholder="title"
          class="border border-gray-200 p-4 w-full"
        />
      </div>
      <div class="mt-4">
        <textarea
          v-model="postStore.post.content"
          type="text"
          placeholder="content"
          class="border border-gray-200 p-4 w-full"
        />
      </div>
      <div class="mt-4">
        <a
          @click.prevent="postStore.updatePost"
          href="#"
          class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white"
          >Update Post</a
        >
      </div>
    </div>
  </div>
</template>
