import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router.js";
import App from "./App.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import NoteOutline from "./components/ui/NoteOutline.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";

const app = createApp(App);
const pinia = createPinia();
app.component("base-button", BaseButton);
app.component("note-outline", NoteOutline);
app.component("base-dialog", BaseDialog);
app.use(pinia);
app.use(router);
app.mount("#app");
