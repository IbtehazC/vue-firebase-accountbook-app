<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container max-w-full mx-8 my-8">
    <div class="flex gap-10">
      <div
        class="py-3 pl-5 pr-28 bg-[#384455] text-white flex justify-start items-center rounded-xl gap-2"
      >
        <svg
          width="56"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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

        <div>
          <p class="text-lg font-semibold">${{ income }}</p>
          <small class="font-semibold text-gray-500">Income</small>
        </div>
      </div>
      <div
        class="py-3 pl-5 pr-28 bg-[#384455] text-white flex justify-start items-center rounded-xl gap-2"
      >
        <svg
          width="56"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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

        <div>
          <p class="text-lg font-semibold">${{ expense }}</p>
          <small class="font-semibold text-gray-500">Expense</small>
        </div>
      </div>
      <div
        class="py-3 pl-5 pr-28 bg-[#384455] text-white flex justify-start items-center rounded-xl gap-4"
      >
        <svg
          width="56"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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

        <div>
          <p class="text-lg font-semibold">${{ balance }}</p>
          <small class="font-semibold text-gray-500">Balance</small>
        </div>
      </div>
    </div>
    <div class="flex my-4 gap-16">
      <div class="container max-w-4xl bg-[#384455] rounded-lg p-8">
        <Graph></Graph>
      </div>
      <div class="container max-w-lg bg-[#384455] rounded-lg py-8 text-white">
        <h3 class="text-2xl font-semibold ml-4 mb-4">Transactions</h3>
        <div
          v-for="transaction in recentThreeTransactions"
          :key="transaction.id"
          class="flex items-center justify-between rounded-md px-4 m-4"
        >
          <div class="flex items-center gap-2">
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
            <div>
              <p class="text-lg font-semibold">{{ transaction.category }}</p>
              <small>{{ transaction.date }}</small>
            </div>
          </div>
          <p
            class="text-lg font-semibold"
            :class="
              transaction.type === 'income'
                ? 'text-[#5AE782]'
                : 'text-[#FF5757]'
            "
          >
            ${{ transaction.amount }}
          </p>
        </div>
        <div class="flex justify-center items-center">
          <button
            @click="handleModal"
            class="mt-8 px-6 py-4 bg-blue-600 text-white text-xl leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add Transaction
          </button>
        </div>
      </div>
    </div>
    <div class="text-white"></div>
    <Modal v-if="showModal" @hideModal="handleModal"></Modal>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import Modal from "@/components/Modal.vue";
import Graph from "@/components/Graph.vue";

const showModal = ref(false);

const store = useStore();
const handleModal = () => (showModal.value = !showModal.value);

const income = computed(() => store.getters.getTotalIncome);
const expense = computed(() => store.getters.getTotalExpense);
const balance = computed(() => {
  return income.value - expense.value;
});
const recentThreeTransactions = computed(() => {
  if (!store.state.allTransactions.length > 0) return [];
  if (store.state.allTransactions.length == 1) {
    return [store.state.allTransactions[0]];
  }
  if (store.state.allTransactions.length == 2) {
    return [store.state.allTransactions[1], store.state.allTransactions[0]];
  }
  if (store.state.allTransactions.length == 3) {
    return [
      store.state.allTransactions[store.state.allTransactions.length - 1],
      store.state.allTransactions[store.state.allTransactions.length - 2],
      store.state.allTransactions[store.state.allTransactions.length - 3],
    ];
  }
  return [
      store.state.allTransactions[store.state.allTransactions.length - 1],
      store.state.allTransactions[store.state.allTransactions.length - 2],
      store.state.allTransactions[store.state.allTransactions.length - 3],
      store.state.allTransactions[store.state.allTransactions.length - 4],
    ];
});
</script>
