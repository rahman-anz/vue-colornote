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
    <base-button @click="submitNote" mode="curved">Save</base-button>
  </form>
  <base-dialog v-if="dialogVisible"
    ><template #default
      >Are you sure about making the changes to the existing note ?</template
    >
    <template #actions
      ><base-button @click="confirmEdits" mode="flat">Yes</base-button
      ><base-button @click="closeDialog" mode="flat">No</base-button></template
    ></base-dialog
  >
</template>
<script>
import { ref } from "vue";
import { useNoteStore } from "@/store/note";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useNoteStore();
    const router = useRouter();
    const id = ref("");
    const title = ref("");
    const desc = ref("");
    const isPinned = ref("");

    editNote();
    function editNote() {
      if (store.edits === "") return;
      else {
        id.value = store.edits.id;
        title.value = store.edits.title;
        desc.value = store.edits.description;
        isPinned.value = store.edits.isPinned;
        store.clearEdits();
      }
    }
    const dialogVisible = ref(false);
    function closeDialog() {
      dialogVisible.value = false;
    }
    function submitNote() {
      validateForm();
      if (invalidForm.value) return;
      if (id.value) {
        dialogVisible.value = true;
        return;
      }
      addNote();
    }
    const invalidForm = ref(false);
    function validateForm() {
      invalidForm.value = false;
      if (title.value === "" || desc.value === "") {
        invalidForm.value = true;
      }
    }
    function confirmEdits() {
      dialogVisible.value = false;
      addNote();
    }
    function addNote() {
      id.value = id.value ? id.value : new Date().toISOString();
      store.addNote(id.value, title.value, desc.value, isPinned.value);
      router.push(`${id.value}`);
    }

    return {
      title,
      desc,
      dialogVisible,
      closeDialog,
      submitNote,
      editNote,
      confirmEdits,
      invalidForm,
    };
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
