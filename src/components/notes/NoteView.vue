<template>
  <note-outline v-if="selectedNote">
    <h2>{{ selectedNote.title }}</h2>
    <p>
      {{ selectedNote.description }}
    </p>
    <base-button @click="editNote" mode="circle" class="icon-position1"
      ><PencilIcon class="icon-edit"
    /></base-button>
    <base-button @click="openDialog" mode="circle" class="icon-position2">
      <TrashIcon class="icon-edit" />
    </base-button>
  </note-outline>
  <base-dialog v-if="dialogVisible" @close="closeDialog"
    ><template #default
      >Are you sure you want to delete the selected note ?</template
    >
    <template #actions
      ><base-button mode="flat" @click="confirmDeletion">Yes</base-button
      ><base-button mode="flat" @click="closeDialog">No</base-button></template
    ></base-dialog
  >
</template>

<script>
import { TrashIcon, PencilIcon } from "@heroicons/vue/24/outline";
import { useNoteStore } from "@/store/note";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

export default {
  props: ["id"],
  components: { TrashIcon, PencilIcon },
  setup(props) {
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

    return {
      selectedNote,
      editNote,
      dialogVisible,
      openDialog,
      closeDialog,
      confirmDeletion,
    };
  },
};
</script>
<style scoped>
section h2 {
  text-align: center;
  margin-top: 2rem;
  font-size: 3rem;
  font-weight: 600;
}

.icon-position1 {
  position: absolute;
  bottom: 10rem;
  right: 14rem;
}
.icon-position2 {
  position: absolute;
  bottom: 10rem;
  right: 8rem;
}
.icon-edit {
  width: 2.6rem;
}

section p {
  font-size: 1.9rem;
  margin: 0 2rem;
  margin-top: 3rem;
  line-height: 3.2rem;
}
/*SCROLLBAR*/

/* width */
::-webkit-scrollbar {
  width: 1.2rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: #e1bf84;
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
