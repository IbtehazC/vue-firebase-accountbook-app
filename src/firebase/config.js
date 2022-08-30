import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQPelZiZXshVumtY6eJ_rMuZ9Qx3WSHiY",
  authDomain: "vueex-auth.firebaseapp.com",
  projectId: "vueex-auth",
  storageBucket: "vueex-auth.appspot.com",
  messagingSenderId: "941809862507",
  appId: "1:941809862507:web:2ea461d2599256f678ee2e",
  measurementId: "G-1QYK7ZLRMM",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
