import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router.js";
import App from "./App.vue";
import BaseButton from "./components/ui/BaseButton.vue";

const app = createApp(App);
const pinia = createPinia();
app.component("base-button", BaseButton);
app.use(pinia);
app.use(router);
app.mount("#app");
