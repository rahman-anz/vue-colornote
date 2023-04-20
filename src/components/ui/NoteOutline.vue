<template>
  <section><slot></slot></section>
</template>
<style scoped>
section {
  background: repeating-linear-gradient(
    to bottom,
    #ffd68d,
    #ffd68d 3rem,
    #f6ba52 3.1rem,
    #f6ba52 3.2rem
  );
  padding: 1rem 2rem;
  position: relative;
}
</style>
