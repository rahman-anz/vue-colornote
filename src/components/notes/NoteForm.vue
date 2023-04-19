<template>
  <form @submit.prevent="addNote">
    <h2>Start Creating Notes</h2>
    <div class="form-control">
      <input placeholder="Title" id="title" type="text" v-model="title" />
    </div>
    <div class="form-control">
      <textarea
        placeholder="Description"
        id="desc"
        cols="100"
        rows="10"
        v-model="desc"
      ></textarea>
    </div>
    <p v-if="invalidForm">Please enter valid characters</p>
    <base-button radius="curved">Submit</base-button>
  </form>
</template>
<script>
import { ref } from "vue";
import { useNoteStore } from "@/store/note";
import { useRouter } from "vue-router";
export default {
  setup() {
    const title = ref("");
    const desc = ref("");
    const invalidForm = ref("false");
    const store = useNoteStore();
    const router = useRouter();

    function validateForm() {
      invalidForm.value = false;
      if (title.value === "" || desc.value === "") {
        invalidForm.value = true;
      }
    }

    function addNote() {
      validateForm();
      if (invalidForm.value) return;
      const id = new Date().toISOString();
      store.addNote(id, title, desc);
      router.push(`${id}`);
    }
    return { title, desc, addNote, invalidForm };
  },
};
</script>
<style scoped>
form {
  background-color: #ffd68d;
  padding: 1rem 2rem;
}
h2 {
  text-align: center;
  font-size: 2rem;
  color: #444;
}
.form-control {
  margin: 2rem 0;
}
#title,
#desc {
  background-color: #ffedcc;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
#title {
  height: 3rem;
}
</style>
