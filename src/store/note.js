import { defineStore } from "pinia";
export const useNoteStore = defineStore("note", {
  state() {
    return {
      user: "django",
      notes: [
        {
          id: "c1",
          title: "The Name's Bond",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iur iur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iur iur Lorem ipsum dolor sit, amet consectetur adip",
          isPinned: false,
        },
        {
          id: "c2",
          title: "Movies WatchList",
          description:
            "Antman Quantumania, Thaapad, Ruby Sparks, Before Sunrise, Agro,  Athena, Into the wild, Uncut gems, Women King, Banshees of Insherin ",
          isPinned: false,
        },
        {
          id: "c3",
          title: "Freddy Mercury",
          description:
            "architecto possimus molestias. Odit sit est pariatur obcaecati. Dicta",
          isPinned: false,
        },
        {
          id: "c4",
          title: "Serenity Prayer",
          description:
            "God grant me the serenity to accept the things I cannot change, courage to change the things I can, and the wisdom to know the difference. Living one day at a time, enjoying one moment at a time, taking this world as it is and not as I would have it.",
          isPinned: true,
        },
      ],
      edits: "",
    };
  },
  getters: {
    hasNotes(state) {
      return state.notes && state.notes.length > 0;
    },
    getNotes(state) {
      return state.notes;
    },
    getEdits(state) {
      return state.edits;
    },
  },
  actions: {
    noteById(id) {
      return this.notes.find((note) => note.id === id);
    },
    addNote(id, title, desc) {
      const newNote = {
        id: id,
        title: title,
        description: desc,
        isPinned: false,
      };
      this.notes.unshift(newNote);
    },
    editNote(id) {
      this.edits = this.noteById(id);
      this.removeNote(id);
    },
    clearEdits() {
      this.edits = "";
    },
    removeNote(id) {
      const selectedNoteIndex = this.notes.findIndex((note) => note.id === id);
      this.notes.splice(selectedNoteIndex, 1);
    },
    togglePin(id) {
      const selectedNote = this.noteById(id);
      selectedNote.isPinned = !selectedNote.isPinned;
    },
    getPinStatus(id) {
      const selectedNote = this.noteById(id);
      return selectedNote.isPinned;
    },
  },
});
