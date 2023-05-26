<template>
  <teleport to="body">
    <div class="backdrop" @click="tryClose" v-if="show"></div>
    <transition name="dialog">
      <dialog open v-if="show" :class="color2">
        <header v-if="!fixed" :class="color1">
          <h2><slot name="header">Alert</slot></h2>
        </header>
        <section>
          <p><slot></slot></p>
        </section>
        <menu v-if="!fixed"
          ><slot name="actions">
            <base-button mode="flat" @click="tryClose">Okay</base-button></slot
          ></menu
        >
      </dialog>
    </transition>
  </teleport>
</template>

<script setup>
import { useUserStore } from "@/store/user";
import { defineExpose, defineProps, defineEmits, computed } from "vue";
import BaseButton from "./BaseButton.vue";

const emit = defineEmits(["close"]);
const props = defineProps({
  fixed: {
    type: Boolean,
    required: false,
    default: false,
  },
  show: {
    type: Boolean,
    required: true,
  },
});
const tryClose = () => {
  if (props.fixed) {
    return;
  }
  emit("close");
};
const user = useUserStore();
const color1 = computed(() => {
  if (user.theme === "green") return "green-header";
  else return "brown-header";
});

const color2 = computed(() => {
  if (user.theme === "green") return "green-dialog";
  else return "brown-dialog ";
});

defineExpose({ tryClose });
</script>
<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.372);
  backdrop-filter: blur(4px);
  z-index: 10;
}
dialog {
  position: fixed;
  top: 30vh;
  left: 30%;
  max-width: 60%;
  z-index: 20;
  /* border-radius: 12px; */
  border-radius: 2rem;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;
  background-color: v-bind(color2);
}
.green-dialog {
  background-color: #e0f7dd;
}
.brown-dialog {
  background-color: #ffedcc;
}
.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  scale: 0.8;
}
.dialog-enter-active {
  transition: all 0.3s ease-out;
}
.dialog-leave-active {
  transition: all 0.3s ease-in;
}
.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  scale: 1;
}
header {
  background-color: v-bind(color1);
  display: flex;
  width: 100%;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.green-header {
  background-color: #8ebb87;
}
.brown-header {
  background-color: #ccab71;
}
header h2 {
  font-size: 2.5rem;
}
section {
  /* padding: 1rem; */
  margin: 3rem 4rem;
}
section p {
  font-size: 2rem;
  text-align: center;
}
menu {
  padding: 0rem 2rem 2rem 0rem;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
}
@media (max-width: 32em) {
  dialog {
    top: 25vh;
    left: 20%;
  }
  section {
    margin: 2rem 2rem;
  }
  section p {
    font-size: 1.4rem;
    line-height: 1.4;
    text-align: start;
  }
}
</style>
