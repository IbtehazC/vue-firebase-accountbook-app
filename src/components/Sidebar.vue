<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-row bg-gray-100">
    <div class="flex flex-col w-72 bg-white overflow-hidden">
      <div class="hidden  items-center justify-center h-20 shadow-md">
        <h1 class="text-3xl uppercase text-indigo-500">User</h1>
      </div>
      <ul class="flex flex-col py-4">
        <li>
          <a
            href="#"
            class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span
              class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"
              ><i class="bx bx-home"></i
            ></span>
            <span class="text-sm font-medium">Home</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span
              class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"
              ><i class="bx bx-music"></i
            ></span>
            <span class="text-sm font-medium">Categories</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span
              class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"
              ><i class="bx bx-drink"></i
            ></span>
            <span class="text-sm font-medium">Transactions</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
          >
            <span
              class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"
              ><i class="bx bx-shopping-bag"></i
            ></span>
            <span class="text-sm font-medium">Calendar</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
