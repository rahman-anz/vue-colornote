<template>
  <button :class="[mode, { pinned: isPinned }]">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    mode: { type: String, required: false, default: null },
    isPinned: { type: Boolean, required: false, default: false },
  },
};
</script>
<style scoped>
button {
  /* width: 3.5rem; */
  padding: 1rem;
  border: none;
  background-color: #fdba45;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
button:hover {
  scale: 110%;
  background-color: rgb(237, 178, 77);
}
.pinned {
  opacity: 1;
}
.circle {
  border-radius: 50%;
}
.curved {
  border-radius: 10px;
}
.flat {
  border-radius: 10px;
  border: #fdba45 2px solid;
  background-color: #ffd183;
}
.flat:hover {
  scale: none;
  background-color: #ffd183;
  border: #a2762a 2px solid;
}
</style>
