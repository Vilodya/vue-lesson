<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import AdminLayout from "./layouts/AdminLayout.vue";
import ClientLayout from "./layouts/ClientLayout.vue";

const router = useRouter();
const route = useRoute();
const isAdmin = ref(false);

router.isReady().then(() => {
  isAdmin.value = route.name.split(".")[0] === "admin";
});

defineOptions({
  name: "App",
});
</script>

<template>
  <div>
    <div>
      <admin-layout v-if="isAdmin">
        <router-view></router-view>
      </admin-layout>
      <client-layout v-else>
        <router-view></router-view>
      </client-layout>
    </div>
  </div>
</template>
