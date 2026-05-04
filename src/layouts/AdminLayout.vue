<script setup>
import { RouterLink } from "vue-router";

defineOptions({
  name: "AdminLayout",
});
</script>

<template>
  <div>
    <section>
      <header class="bg-white p-4">Admin Panel</header>
    </section>
    <section class="flex">
      <aside class="bg-gray-700 w-1/4 text-white min-h-screen">
        <router-link
          :to="{ name: 'admin.dashboard.index' }"
          class="block text-gray-200 p-4 border-b border-b-gray-500"
          >Dashboard</router-link
        >
        <router-link
          :to="{ name: 'admin.posts.index' }"
          class="block text-gray-200 p-4 border-b border-b-gray-500"
          >Posts</router-link
        >
      </aside>
      <article class="bg-gray-50 w-3/4 p-4">
        <slot />
      </article>
    </section>
  </div>
</template>
