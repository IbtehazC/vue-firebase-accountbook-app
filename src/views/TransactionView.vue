<template>
  <div
    class="container min-h-max m-8 max-w-5xl bg-[#384455] rounded-lg py-3 text-white"
  >
    <table class="w-full text-sm text-left text-gray-400">
      <thead class="text-md uppercase bg-gray-700 text-gray-400">
        <tr>
          <th class="py-3 px-6">Transaction ID</th>
          <th class="py-3 px-6">Type</th>
          <th class="py-3 px-6">Category</th>
          <th class="py-3 px-6">Amount</th>
          <th class="py-3 px-6">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="transaction in transactions"
          :key="transaction.id"
          class="border-b bg-gray-800 border-gray-700"
        >
          <th class="py-4 px-6 font-medium whitespace-nowrap text-white">
            <div class="flex justify-start items-center gap-2">
              <svg
                width="56"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-if="transaction.type == 'income'"
              >
                <rect
                  width="24"
                  height="24"
                  rx="7"
                  fill="#96F3DD"
                  fill-opacity="0.33"
                />
                <path
                  d="M9.68688 11.0202C9.49162 11.2155 9.17504 11.2155 8.97977 11.0202C8.78451 10.825 8.78451 10.5084 8.97977 10.3131L11.6464 7.64645C11.8417 7.45118 12.1583 7.45118 12.3535 7.64645L15.0202 10.3131C15.2155 10.5084 15.2155 10.825 15.0202 11.0202C14.825 11.2155 14.5084 11.2155 14.3131 11.0202L12.5 9.20711L12.5 15.6667C12.5 15.9428 12.2761 16.1667 12 16.1667C11.7239 16.1667 11.5 15.9428 11.5 15.6667L11.5 9.20711L9.68688 11.0202Z"
                  fill="#5AE782"
                />
              </svg>
              <svg
                width="56"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-if="transaction.type == 'expense'"
              >
                <rect
                  width="24"
                  height="24"
                  rx="7"
                  fill="#FF8181"
                  fill-opacity="0.33"
                />
                <path
                  d="M14.3131 12.9798C14.5084 12.7845 14.825 12.7845 15.0202 12.9798C15.2155 13.175 15.2155 13.4916 15.0202 13.6869L12.3536 16.3536C12.1583 16.5488 11.8417 16.5488 11.6465 16.3536L8.97978 13.6869C8.78452 13.4916 8.78452 13.175 8.97978 12.9798C9.17505 12.7845 9.49163 12.7845 9.68689 12.9798L11.5 14.7929L11.5 8.33333C11.5 8.05719 11.7239 7.83333 12 7.83333C12.2761 7.83333 12.5 8.05719 12.5 8.33333L12.5 14.7929L14.3131 12.9798Z"
                  fill="#FF5757"
                />
              </svg>
              <p class="text-lg">{{ transaction.id }}</p>
            </div>
          </th>
          <td class="py-4 px-6">
            <p
              class="font-bold"
              :class="
                transaction.type === 'income'
                  ? 'text-[#5AE782]'
                  : 'text-[#FF5757]'
              "
            >
              {{ transaction.type.toUpperCase() }}
            </p>
          </td>
          <td class="py-4 px-6">
            <p class="text-lg">{{ transaction.category }}</p>
          </td>
          <td class="py-4 px-6">
            <p
              class="text-lg font-semibold"
              :class="
                transaction.type === 'income'
                  ? 'text-[#5AE782]'
                  : 'text-[#FF5757]'
              "
            >
              $ {{ transaction.amount }}
            </p>
          </td>
          <td class="py-4 px-6">{{ transaction.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const transactions = computed(() => store.state.allTransactions);
</script>
