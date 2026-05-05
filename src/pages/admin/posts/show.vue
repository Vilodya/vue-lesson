<script setup>
import { usePostStore } from "@/stores/post";
import { onMounted } from "vue";

defineOptions({
  name: "Show",
});

onMounted(() => {
  postStore.getPost();
});

const postStore = usePostStore();
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
            {{ postStore.postTitle }}
          </h3>
          <p class="mt-4 text-base">
            {{ postStore.post.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
