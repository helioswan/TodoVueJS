import { createApp, watch } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);

let pinia = createPinia();

if (localStorage.getItem("state")) {
  pinia.state.value = JSON.parse(localStorage.getItem("state"));
}

watch(
  pinia.state,
  (state) => {
    localStorage.setItem("state", JSON.stringify(state));
  },
  { deep: true }
);

app.use(pinia);

app.mount("#app");
