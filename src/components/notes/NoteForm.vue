<template>
  <div class="container">
    <form @submit.prevent="submitNote">
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
      <p v-if="invalidForm" class="errorMsg">Please enter some input 😐</p>
      <base-button mode="curved">Save</base-button>
    </form>
    <base-dialog :show="dialogVisible" @close="closeDialog"
      ><template #default
        >Are you sure about making the changes to the existing note ?</template
      >
      <template #actions
        ><base-button mode="flat" @click="confirmEdits">Yes</base-button
        ><base-button mode="flat" @click="closeDialog"
          >No</base-button
        ></template
      ></base-dialog
    >
  </div>
</template>
<script setup>
import { defineExpose, ref, computed } from "vue";
import { useNoteStore } from "@/store/note";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";
const store = useNoteStore();
const router = useRouter();
const id = ref("");
const title = ref("");
const desc = ref("");
const isPinned = ref(false);
const editNote = () => {
  if (store.edits === "") return;
  else {
    id.value = store.edits.id;
    title.value = store.edits.title;
    desc.value = store.edits.description;
    isPinned.value = store.edits.isPinned;
    store.clearEdits();
  }
};
editNote();
const dialogVisible = ref(false);
const closeDialog = () => {
  dialogVisible.value = false;
};
const submitNote = () => {
  validateForm();
  if (invalidForm.value) return;
  if (id.value) {
    dialogVisible.value = true;
    return;
  }
  addNote();
};
const invalidForm = ref(false);
const validateForm = () => {
  invalidForm.value = false;
  if (title.value === "" || desc.value === "") {
    invalidForm.value = true;
  }
};
const confirmEdits = () => {
  dialogVisible.value = false;
  addNote();
};
const addNote = () => {
  id.value = id.value ? id.value : new Date().toISOString();
  store.addNote(id.value, title.value, desc.value, isPinned.value);
  router.push(`${id.value}`);
};
const user = useUserStore();
const mainColor = computed(() => {
  if (user.theme === "green") return "#baecb2";
  else return " #ffd68d";
});
const inpColor = computed(() => {
  if (user.theme === "green") return "#e8f9e5";
  else return " #ffedcc";
});
const focusColor = computed(() => {
  if (user.theme === "green") return "#7da476";
  else return " #e5a537";
});
defineExpose({
  closeDialog,
  submitNote,
  editNote,
  confirmEdits,
});
</script>
<style scoped>
.container {
  overflow-y: auto;
  background-color: v-bind(mainColor);
}
form {
  position: relative;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.2rem;
}
h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #444;
}
.form-control {
  margin: 1.5rem 0;
}
.title,
.desc {
  background-color: v-bind(inpColor);
  border: none;
  border-radius: 9px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  width: 50vw;
  white-space: pre-wrap;
}
.title:focus,
.desc:focus {
  outline: v-bind(focusColor) 3px solid;
  border: v-bind(focusColor) 1px solid;
}
.desc {
  height: 40vh;
  margin-bottom: 3.5rem;
}
.errorMsg {
  position: absolute;
  bottom: 14%;
  font-size: 1.8rem;
  color: red;
  margin-bottom: 1rem;
}
@media (max-width: 32em) {
  form {
    justify-content: start;
  }
  .desc {
    height: 25vh;
  }
  .errorMsg {
    bottom: 20%;
  }
}
</style>
