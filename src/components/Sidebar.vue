<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col w-80 bg-[#050F1E] h-screen">
    <div class="items-center justify-center shadow-md mt-8">
      <h1 class="text-3xl uppercase text-indigo-500 text-center">LOGO</h1>
    </div>
    <ul class="flex flex-col py-4 bg-[#050F1E] text-2xl mt-10">
      <li>
        <RouterLink
          to="/"
          class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-200"
          :class="useLink.isExactActive === 'true' && 'bg-[#3A36DB]'"
        >
          <span
            class="inline-flex items-center justify-center h-12 w-12 text-lg text-white"
            ><i class="bx bx-home"></i
          ></span>
          <span class="text-sm font-medium">Home</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink
          to="/transactions"
          class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-200"
          :class="useLink.isExactActive === 'true' && 'bg-[#3A36DB]'"
        >
          <span
            class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"
            ><i class="bx bx-drink"></i
          ></span>
          <span class="text-sm font-medium">Transactions</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useLink } from "vue-router";
</script>
