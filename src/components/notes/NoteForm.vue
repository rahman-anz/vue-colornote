<template>
  <form @submit.prevent="addNote">
    <h2>Start Creating Notes</h2>
    <div class="form-control">
      <input placeholder="Title" class="title" type="text" v-model="title" />
    </div>
    <div class="form-control">
      <textarea
        placeholder="Description"
        class="desc"
        v-model="desc"
      ></textarea>
    </div>
    <p v-if="invalidForm" class="errorMsg">Please enter some input</p>
    <base-button mode="curved">Save</base-button>
  </form>
</template>
<script>
import { ref } from "vue";
import { useNoteStore } from "@/store/note";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useNoteStore();
    const router = useRouter();
    const title = ref("");
    const desc = ref("");
    const invalidForm = ref(false);

    editNote();
    function editNote() {
      if (store.edits === "") return;
      else {
        title.value = store.edits.title;
        desc.value = store.edits.description;
        store.clearEdits();
      }
    }

    function addNote() {
      validateForm();
      if (invalidForm.value) return;
      const id = new Date().toISOString();
      store.addNote(id, title, desc);
      router.push(`${id}`);
    }

    function validateForm() {
      invalidForm.value = false;
      if (title.value === "" || desc.value === "") {
        invalidForm.value = true;
      }
    }

    return { title, desc, addNote, editNote, invalidForm };
  },
};
</script>
<style scoped>
form {
  background-color: #ffd68d;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #444;
}
.form-control {
  margin: 2rem 0;
}
.title,
.desc {
  background-color: #ffedcc;
  border: none;
  border-radius: 9px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  width: 50vw;
  white-space: pre;
}
.desc {
  height: 40vh;
}
.errorMsg {
  font-size: 1.8rem;
  color: red;
  margin-bottom: 1rem;
}
</style>
