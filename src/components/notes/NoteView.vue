<template>
  <note-outline v-if="selectedNote">
    <h2>{{ selectedNote.title }}</h2>
    <p class="desc">
      {{ selectedNote.description }}
    </p>
    <base-button
      @click="editNote"
      title="Edit"
      mode="circle"
      class="icon-position1"
      ><PencilIcon class="icon-edit"
    /></base-button>
    <base-button
      @click="openDialog"
      title="Delete"
      mode="circle"
      class="icon-position2"
    >
      <TrashIcon class="icon-edit" />
    </base-button>
  </note-outline>
  <div v-else>{{ this.$router.replace("welcome") }}</div>
  <base-dialog :show="dialogVisible" @close="closeDialog"
    ><template #default
      >Are you sure you want to delete the selected note ?</template
    >
    <template #actions
      ><base-button mode="flat" @click="confirmDeletion">Yes</base-button
      ><base-button mode="flat" @click="closeDialog">No</base-button></template
    ></base-dialog
  >
</template>

<script setup>
import { TrashIcon, PencilIcon } from "@heroicons/vue/24/outline";
import { useNoteStore } from "@/store/note";
import { defineExpose, defineProps, ref, computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({ id: String });
const store = useNoteStore();
const router = useRouter();

const selectedNote = computed(() => {
  if (props.id) {
    return store.noteById(props.id);
  } else {
    return false;
  }
});
const editNote = () => {
  store.editNote(props.id);
  router.push("create");
};

const dialogVisible = ref(false);
const openDialog = () => {
  dialogVisible.value = true;
};
const closeDialog = () => {
  dialogVisible.value = false;
};

const confirmDeletion = () => {
  store.removeNote(props.id);
  router.replace("welcome");
  closeDialog();
};

defineExpose({
  selectedNote,
  editNote,
  openDialog,
  closeDialog,
  confirmDeletion,
});
</script>
<style scoped>
section h2 {
  text-align: center;
  margin-top: 2rem;
  font-size: 3rem;
  font-weight: 600;
}

.icon-position1 {
  position: fixed;
  bottom: 10rem;
  right: 18rem;
}
.icon-position2 {
  position: fixed;
  bottom: 10rem;
  right: 12rem;
}
.icon-edit {
  width: 2.6rem;
}
section p {
  font-size: 1.9rem;
  margin: 0 2rem;
  margin-top: 3rem;
  white-space: pre-wrap;
  line-height: 3.2rem;
}
@media (max-width: 25em) {
  .icon-position1 {
    right: 8rem;
  }
  .icon-position2 {
    right: 2rem;
  }

  section p {
    font-size: 1.7rem;
  }
}
</style>
