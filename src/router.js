import { createRouter, createWebHistory } from "vue-router";
import UserAuth from "./pages/UserAuth.vue";
import SectionMain from "./pages/SectionMain.vue";
import NoteView from "./pages/NoteView.vue";
import NoteForm from "./pages/NoteForm.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: UserAuth },
    {
      path: "/notes/:id",
      component: SectionMain,
      children: [
        {
          path: "view",
          component: NoteView,
        },
        { path: "create", component: NoteForm },
      ],
    },
  ],
});
export default router;
