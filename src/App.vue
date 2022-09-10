<template>
  <div class="flex">
    <Sidebar />
    <RouterView />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {  Sidebar },
};
</script>
