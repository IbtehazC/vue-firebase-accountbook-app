import { createStore } from "vuex";
import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { v4 as uuidv4 } from "uuid";

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
    income: 0,
    expense: 0,
    allTransactions: [
      {
        id: "1",
        amount: 1000,
        type: "income",
        date: "27-02-03",
        category: "Salary",
      },
      {
        id: "2",
        amount: 200,
        type: "expense",
        date: "27-02-03",
        category: "Travel",
      },
      {
        id: "3",
        amount: 175,
        type: "expense",
        date: "27-03-04",
        category: "Passive Income",
      },
      {
        id: "4",
        amount: 200,
        type: "income",
        date: "27-03-04",
        category: "Transportation",
      },
    ],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    setIncome(state, payload) {
      state.income = payload;
    },
    setExpense(state, payload) {
      state.expense = payload;
    },
    setAllTransaction(state, payload) {
      state.allTransactions = payload;
    },
  },
  actions: {
    async signup(context, { email, password }) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw Error("could not complete signup");
      }
    },
    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw Error("could not complete login");
      }
    },
    async logout(context) {
      await signOut(auth);
      context.commit("setUser", null);
    },
    addTransaction(context, { amount, type, date, category }) {
      var newTransaction = {
        id: uuidv4(),
        amount,
        type,
        date,
        category,
      };
      var totalTransactions = this.state.allTransactions;
      if (type === "income") {
        addIncome(amount);
      } else {
        addExpense(amount);
      }
      totalTransactions.push(newTransaction);
      const sortedTransactions = totalTransactions.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      context.commit("setAllTransaction", sortedTransactions);
    },
  },
  getters: {
    getMonthly(state) {
      var monthlyTransactions = [];
      for (var i = 0; i < 12; i++) {
        monthlyTransactions.push(
          state.allTransactions.filter((transaction) => {
            return new Date(transaction.date).getMonth() === i;
          })
        );
      }
      return monthlyTransactions;
    },
    getTotalIncome(state) {
      var totalIncome = 0;
      state.allTransactions.forEach((transaction) => {
        if (transaction.type === "income") {
          totalIncome += transaction.amount;
        }
      });
      return totalIncome;
    },
    getTotalExpense(state) {
      var totalIncome = 0;
      state.allTransactions.forEach((transaction) => {
        if (transaction.type === "expense") {
          totalIncome += transaction.amount;
        }
      });
      return totalIncome;
    },
  },
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsub();
});

const addIncome = (amount) => {
  let newAmount = store.state.income;
  newAmount += amount;
  store.commit("setIncome", newAmount);
};

const addExpense = (amount) => {
  let newAmount = store.state.expense;
  newAmount += amount;
  store.commit("setExpense", newAmount);
};

export default store;
