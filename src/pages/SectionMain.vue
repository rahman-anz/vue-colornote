<template>
  <section>
    <create-note></create-note>
    <ul class="notes" v-if="store.hasNotes">
      <note-item
        v-for="note in sortedNotes"
        :key="note.id"
        :id="note.id"
        :title="note.title"
        :description="note.description"
      ></note-item>
    </ul>
  </section>
  <router-view></router-view>
</template>
<script>
import { computed } from "vue";
import CreateNote from "../components/notes/CreateNote.vue";
import NoteItem from "../components/notes/NoteItem.vue";
import { useNoteStore } from "../store/note.js";
import { useUserStore } from "@/store/user";
export default {
  components: { CreateNote, NoteItem },
  setup() {
    const store = useNoteStore();
    const notes = store.getNotes;
    const sortedNotes = computed(() => {
      return notes.slice().sort((a, b) => {
        if (a.isPinned === true && b.isPinned === false) {
          return -1;
        } else if (a.isPinned === false && b.isPinned === true) {
          return 1;
        } else {
          return 0;
        }
      });
    });
    const user = useUserStore();
    const mainColor = computed(() => {
      if (user.theme === "green") return "#e0f7dd";
      else return "#ffedcc";
    });
    return { store, sortedNotes, mainColor };
  },
};
</script>

<style scoped>
section {
  background-color: v-bind(mainColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 0.8rem;
  overflow-y: auto;
  overflow-x: hidden;
}

.notes {
  list-style: none;
  width: 97%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0;
}
</style>
