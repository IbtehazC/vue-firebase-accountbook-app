import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import userStore from "./store/userStore";

import "./assets/main.css";

createApp(App).use(router).use(userStore).mount("#app");
