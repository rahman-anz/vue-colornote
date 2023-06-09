import { createRouter, createWebHistory } from "vue-router";
import UserAuth from "./pages/UserAuth.vue";
import SectionMain from "./pages/SectionMain.vue";
import NoteView from "./components/notes/NoteView.vue";
import NoteForm from "./components/notes/NoteForm.vue";
import WelcomeNote from "./components/notes/WelcomeNote.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/auth" },
    { path: "/auth", component: UserAuth },
    {
      path: "/main",
      component: SectionMain,
      children: [
        { path: "create", component: NoteForm },
        { path: "welcome", component: WelcomeNote },
        {
          path: ":id",
          component: NoteView,
          props: true,
        },
      ],
    },
    { path: "/:notFound(.*)", redirect: "/main/welcome" },
  ],
});
export default router;
