<template>
  <Navbar />
  <div class="flex">
    <Sidebar />
    <RouterView />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar.vue";
export default {
  components: { Navbar, Sidebar },
};
</script>
