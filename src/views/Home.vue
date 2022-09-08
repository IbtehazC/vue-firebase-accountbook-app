<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container max-w-full mx-8 my-8">
    <div class="flex gap-10">
      <div
        class="py-6 px-16 bg-teal-200 flex justify-center items-center rounded shadow-md text-xl font-semibold"
      >
        Income: ${{ income }}
      </div>
      <div
        class="py-6 px-16 bg-pink-200 flex justify-center items-center rounded shadow-md text-xl font-semibold"
      >
        Expense: ${{ expense }}
      </div>
      <div class="py-6 px-16 bg-green-200 text-center rounded shadow-md text-xl font-semibold">
        Balance: ${{ balance }}
      </div>
    </div>
    <div class="flex my-4 gap-16">
      <div class="container max-w-4xl">
        <Graph></Graph>
      </div>
      <div class="container max-w-lg">
        <h3 class="text-3xl pb-4">Transactions</h3>
        <div
          v-for="transaction in recentThreeTransactions"
          :key="transaction.id"
          class="flex items-center justify-between rounded-md p-4 mb-2"
          :class="
            transaction.type === 'income'
              ? 'border border-green-600'
              : 'border border-red-600'
          "
        >
          <div class="flex items-center">
            <p>{{ transaction.category }}</p>
            <div>
              <p>{{ transaction.type }}</p>
              <small>{{ transaction.date }}</small>
            </div>
          </div>
          <p>$ {{ transaction.amount }}</p>
        </div>
        <button
          @click="handleModal"
          class="px-8 py-5 bg-blue-600 text-white text-xl leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add Transaction
        </button>
      </div>
    </div>
    <div class="">Categories</div>
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

const income = computed(() => store.state.income);
const expense = computed(() => store.state.expense);
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
  return [
    store.state.allTransactions[store.state.allTransactions.length - 1],
    store.state.allTransactions[store.state.allTransactions.length - 2],
    store.state.allTransactions[store.state.allTransactions.length - 3],
  ];
});
</script>
