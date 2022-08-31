<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav
    class="bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20"
  >
    <!-- logo -->
    <div class="inline-flex">
      <div class="hidden md:block text-3xl">Money Jiggle</div>
      <div class="block md:hidden"></div>
    </div>

    <!-- end logo -->

    <div class="flex justify-between">
      <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div class="inline-block">
          <div class="inline-flex items-center max-w-full">
            <button
              class="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1 py-1"
              type="button"
            >
              <div class="block flex-grow flex-shrink overflow-hidden">
                Start your search
              </div>
              <div
                class="flex items-center justify-center relative h-8 w-8 rounded-full"
              >
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style="
                    display: block;
                    fill: none;
                    height: 12px;
                    width: 12px;
                    stroke: currentcolor;
                    stroke-width: 5.33333;
                    overflow: visible;
                  "
                >
                  <g fill="none">
                    <path
                      d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <!-- end search bar -->

      <!-- login -->
      <div class="flex-initial">
        <div class="flex justify-end items-center relative">
          <div class="flex mr-4 items-center">
            <a
              class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
              href="#"
            >
              <div
                class="flex items-center relative cursor-pointer whitespace-nowrap"
              >
                Login
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- end login -->
    </div>
    <!-- search bar -->
  </nav>
</template>

<script setup></script>
