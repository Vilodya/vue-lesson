<script setup>
defineOptions({
  name: "ClientLayout",
});
</script>

<template>
  <div>
    <section>
      <header class="bg-white p-4">Client Panel</header>
    </section>
    <section class="flex">
      <article class="bg-gray-50 w-3/4 p-4 min-h-screen">
        <slot />
      </article>
    </section>
  </div>
</template>
