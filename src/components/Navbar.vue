<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav>
    <h1>Vuex Auth</h1>
    <!-- for all users -->
    <template v-if="authIsReady">
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <!-- for logged in users -->
      <div v-if="user">
        <span>Logged in as {{ user.email }}</span>
        <button @click="handleClick">Logout</button>
      </div>
      <!-- for logged out users -->
      <div v-if="!user">
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/signup">Signup</RouterLink>
      </div></template
    >
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const userStore = useStore();

const user = computed(() => userStore.state.user);
const authIsReady = computed(() => userStore.state.authIsReady);

console.log(user);

const handleClick = () => {
  userStore.dispatch("logout");
};
</script>
