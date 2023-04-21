<template>
  <router-link to="create" class="create-note">
    <PencilSquareIcon class="icon-pen" />
    <span class="create-note-text">Create Note</span>
  </router-link>
</template>
<script>
import { PencilSquareIcon } from "@heroicons/vue/24/outline";
export default {
  components: { PencilSquareIcon },
  setup() {},
};
</script>
<style scoped>
.create-note {
  height: 7rem;
  margin: 1rem;
  text-decoration: none;
  color: #333;
  width: 97%;
  background-color: #fbc669;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.create-note:hover {
  scale: 1.02;
}
/* .create-note:active,
.create-note.router-link-active  */

.icon-pen {
  margin-left: 2rem;
  width: 4.3rem;
}
.create-note-text {
  font-size: 2rem;
}
</style>
