<template>
  <router-link to="create" class="create-note">
    <PencilSquareIcon class="icon-pen" />
    <span class="create-note-text">Create Note</span>
  </router-link>
</template>
<script setup>
import { PencilSquareIcon } from "@heroicons/vue/24/outline";
import { useUserStore } from "@/store/user.js";
import { defineExpose, computed } from "vue";

const user = useUserStore();
const color1 = computed(() => {
  if (user.theme === "green") return "#a0d398";
  else return " #fbc669";
});
defineExpose({ color1 });
</script>
<style scoped>
.create-note {
  min-height: 7rem;
  margin: 1rem;
  text-decoration: none;
  color: #333;
  width: 97%;
  background-color: v-bind(color1);
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
@media (max-width: 25em) {
  .icon-pen {
    width: 3.5rem;
  }
}
</style>
