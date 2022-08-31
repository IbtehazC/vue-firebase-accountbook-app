import { createStore } from "vuex";
import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
    income: 0,
    expense: 0,
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
    addIncome(context, payload) {
      let newAmount = this.state.income;
      newAmount += payload;
      context.commit("setIncome", newAmount);
    },
    addExpense(context, payload) {
      let newAmount = this.state.expense;
      newAmount += payload;
      context.commit("setExpense", newAmount);
    },
  },
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("setAuthIsReady", true);
  store.commit("setUser", user);
  unsub();
});

export default store;
