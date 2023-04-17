<template>
  <div class="section">
    <create-note></create-note>
    <ul class="notes">
      <note-item></note-item>
    </ul>
  </div>
  <router-view></router-view>
</template>
<script>
import CreateNote from "../components/notes/CreateNote.vue";
import NoteItem from "../components/notes/NoteItem.vue";
export default {
  components: { CreateNote, NoteItem },
  setup() {},
};
</script>

<style scoped>
.section {
  background-color: #ffedcc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem;
  overflow-y: scroll;
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

/*SCROLLBAR*/

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #c4a46e;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #907648;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #645232;
}
</style>
