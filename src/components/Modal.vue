<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="flex justify-center items-center fixed inset-0 bg-gray-500 bg-opacity-75"
  >
    <div class="flex min-h-full justify-center text-center items-center p-0">
      <form
        class="container max-w-2xl bg-white text-left shadow-xl px-16 py-12 rounded-lg"
      >
        <h3 class="text-2xl font-semibold">New Transaction</h3>
        <div class="relative">
          <p class="my-4">
            <label class="m-2">Amount</label>
            <input
              name="amount"
              class="appearance-none border w-full border-gray-500 rounded-md p-2 focus:outline-blue-500 my-1"
              type="number"
              placeholder="Amount"
              v-model="amount"
              required
            />
          </p>
          <p class="my-4">
            <label class="m-2">Type</label>
            <select
              class="border w-full border-gray-500 rounded-md p-2 focus:outline-blue-500 my-1"
              v-model="type"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </p>
          <p class="my-4">
            <label class="m-2">Category</label>
            <input
              name="category"
              class="border w-full border-gray-500 rounded-md p-2 focus:outline-blue-500 my-1"
              type="text"
              placeholder="Category"
              v-model="category"
              required
            />
          </p>
          <p class="my-4">
            <label class="m-2">Date</label>
            <input
              name="date"
              type="date"
              class="w-full border border-gray-500 rounded-md p-2 focus:outline-blue-500 my-1"
              v-model="date"
            />
          </p>
          <div class="modal-footer flex items-center gap-4 my-1">
            <button
              type="button"
              class="px-6 py-4 w-full bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal"
              @click.prevent="emit('hideModal')"
            >
              Close
            </button>
            <button
              type="submit"
              class="px-6 py-4 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
              @click.prevent="handleAddTransaction(amount, type, date, category)"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useStore } from "vuex";

const store = useStore();

const emit = defineEmits(["hideModal"]);

const amount = ref(null);
const type = ref("income");
const date = ref(new Date());
const category = ref("");

const handleAddTransaction = (amount, type, date, category) => {
  const transaction = { amount, type, date, category };
  store.dispatch("addTransaction", transaction);
  emit("hideModal");
};
</script>
