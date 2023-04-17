<template>
  <button :class="radius"><slot></slot></button>
</template>
<script>
export default {
  props: {
    radius: { type: String, required: false, default: null },
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
.circle {
  border-radius: 50%;
}
.curved {
  border-radius: 10px;
}
</style>
