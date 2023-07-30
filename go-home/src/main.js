import "./assets/scss/index.scss";
import { createApp } from "vue";
import { store } from "./store";
import App from "./App.vue";
import Notifications from "@kyvg/vue3-notification";

import router from "./router";



const app = createApp(App);

app.use(router);
app.use(Notifications);
app.use(store);

app.mount("#app");
