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
        },
        {
          id: "c2",
          title: "John Cena",
          description:
            "Dolores iur Lorem ipsum dolor siDolores iur Lorem ipsum dolor siDolores iur Lorem ipsum dolor siDolores iur Lorem ipsum dolor si",
        },
        {
          id: "c3",
          title: "Freddy Mercury",
          description:
            "architecto possimus molestias. Odit sit est pariatur obcaecati. Dicta",
        },
      ],
    };
  },
  getters: {
    hasNotes(state) {
      return state.notes && state.notes.length > 0;
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
      };
      console.log(newNote);
      this.notes.unshift(newNote);
    },
    removeNote(id) {
      const selectedNoteIndex = this.notes.findIndex((note) => note.id === id);
      console.log(selectedNoteIndex);
      this.notes.splice(selectedNoteIndex, 1);
      console.log(this.notes);
    },
  },
});
