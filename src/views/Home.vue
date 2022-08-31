<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container max-w-full mx-8 my-8">
    <div class="flex gap-10">
      <div
        class="w-72 h-20 bg-teal-200 rounded-md flex justify-center items-center"
        @click="addIncome(1000)"
      >
        <p class="text-lg font-semibold">Income: ${{ income }}</p>
      </div>
      <div
        class="w-72 h-20 bg-pink-200 rounded-md flex justify-center items-center"
        @click="addExpense(1000)"
      >
        <p class="text-lg font-semibold">Expense: ${{ expense }}</p>
      </div>
      <div
        class="w-72 h-20 bg-green-200 rounded-md flex justify-center items-center"
      >
        <p class="text-lg font-semibold">Balance: ${{ balance }}</p>
      </div>
    </div>
    <div class="flex my-4 gap-16">
      <div class="container max-w-3xl h-96 rounded-md border border-gray-600">
        Graph
      </div>
      <div class="container max-w-lg">
        <h3 class="text-3xl pb-4">Transactions</h3>
        <div
          class="flex items-center justify-between border border-b-gray-600 rounded-md p-4 mb-2"
        >
          <div class="flex items-center">
            <p>logo</p>
            <div>
              <p>name</p>
              <small>date</small>
            </div>
          </div>
          <p>$ XXX</p>
        </div>
        <div
          class="flex items-center justify-between border border-b-gray-600 rounded-md p-4 mb-2"
        >
          <div class="flex items-center">
            <p>logo</p>
            <div>
              <p>name</p>
              <small>date</small>
            </div>
          </div>
          <p>$ XXX</p>
        </div>
        <div
          class="flex items-center justify-between border border-b-gray-600 rounded-md p-4 mb-2"
        >
          <div class="flex items-center">
            <p>logo</p>
            <div>
              <p>name</p>
              <small>date</small>
            </div>
          </div>
          <p>$ XXX</p>
        </div>
        <div
          class="w-56 h-16 bg-red-200 rounded-md flex justify-center items-center"
        >
          <p class="text-lg font-semibold">Add Transaction</p>
        </div>
      </div>
    </div>
    <div class="">Categories</div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const addIncome = (payload) => {
  store.dispatch("addIncome", payload);
};

const addExpense = (payload) => {
  store.dispatch("addExpense", payload);
};

const income = computed(() => store.state.income);
const expense = computed(() => store.state.expense);
const balance = computed(() => {
  return income.value - expense.value;
});
</script>
