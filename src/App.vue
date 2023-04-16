<template>
  <div class="backdrop">
    <div class="main-box">
      <the-header></the-header>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: { TheHeader },
};
</script>

<style>
html {
  font-size: 10px;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.backdrop {
  background-color: black;
  padding: 1.7rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-box {
  margin: auto;
  border-radius: 2rem;
  width: 95vw;
  height: 94vh;
  display: grid;
  grid-template-rows: 10vh 1fr;
  grid-template-columns: 30vw 1fr;
  overflow: hidden;
  background-color: aquamarine;
}
</style>
