<template>
  <div class="container">
    <Navbar />

    <RouterView />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: { Navbar },
};
</script>
