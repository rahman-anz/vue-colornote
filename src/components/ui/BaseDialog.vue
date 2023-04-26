<template>
  <teleport to="body">
    <div class="backdrop" @click="tryClose"></div>
    <dialog open>
      <header v-if="!fixed">
        <h2><slot name="header">Alert</slot></h2>
      </header>
      <section>
        <p><slot>Some mumbo jumbo</slot></p>
      </section>
      <menu v-if="!fixed"
        ><slot name="actions">
          <base-button mode="flat" @click="tryClose">Okay</base-button></slot
        ></menu
      >
    </dialog>
  </teleport>
</template>
<script>
import BaseButton from "./BaseButton.vue";
export default {
  emits: ["close"],
  components: { BaseButton },
  props: {
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, context) {
    function tryClose() {
      if (props.fixed) {
        return;
      }
      context.emit("close");
    }
    return { tryClose };
  },
};
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
  width: 40%;
  z-index: 20;
  /* border-radius: 12px; */
  border-radius: 2rem;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;
  background-color: #ffedcc;
}
header {
  background-color: #ccab71;
  display: flex;
  width: 100%;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
header h2 {
  font-size: 2.5rem;
}
section {
  /* padding: 1rem; */
  margin: 3rem 0rem;
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
</style>
