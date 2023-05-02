<template>
  <section>
    <create-note></create-note>
    <ul class="notes" v-if="store.hasNotes">
      <transition-group name="note">
        <note-item
          v-for="note in sortedNotes"
          :key="note.id"
          :id="note.id"
          :title="note.title"
          :description="note.description"
        ></note-item>
      </transition-group>
    </ul>
  </section>
  <router-view></router-view>
</template>
<script setup>
import { defineExpose, computed } from "vue";
import CreateNote from "../components/notes/CreateNote.vue";
import NoteItem from "../components/notes/NoteItem.vue";
import { useNoteStore } from "../store/note.js";
import { useUserStore } from "@/store/user";
<<<<<<< Updated upstream
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
      if (user.theme === "green") return "#e9ffe5";
      else return "#ffedcc";
    });
    return { store, sortedNotes, mainColor };
  },
};
=======
const store = useNoteStore();
store.getLocal();
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
user.getLocal();
const mainColor = computed(() => {
  if (user.theme === "green") return "#e9ffe5";
  else return "#ffedcc";
});
defineExpose({ store, sortedNotes, mainColor });
>>>>>>> Stashed changes
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
.note-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.note-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.note-enter-active {
  transition: all 0.3s ease-out;
}
.note-leave-active {
  transition: all 0.3s ease-in;
  position: absolute;
}
.note-enter-to,
.note-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.note-move {
  transition: transform 0.6s ease;
}
</style>
