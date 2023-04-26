<template>
  <button :class="[mode]">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    mode: { type: String, required: false, default: null },
  },
};
</script>
<style scoped>
button {
  /* width: 3.5rem; */
  padding: 1.3rem 1.8rem;
  border: none;
  background-color: #fdba45;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
button:hover {
  scale: 110%;
  background-color: rgb(237, 178, 77);
}
.circle {
  border-radius: 50%;
  padding: 1rem;
}
.curved {
  border-radius: 10px;
}
.flat {
  border-radius: 10px;
  border: #ffb028 2px solid;
  background-color: #ffd183;
}
.flat:hover {
  scale: none;
  background-color: #ffc869;
  border: #ffb028 2px solid;
}
</style>
