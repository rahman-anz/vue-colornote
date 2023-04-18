<template>
  <div class="backdrop">
    <div class="main-box">
      <the-header></the-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
// import NoteSection from "./components/NoteSection.vue";
export default {
  components: { TheHeader },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lobster&display=swap");

html {
  font-size: 10px;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: "Inter", sans-serif;
}
.backdrop {
  background-color: black;
  height: 100vh;
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
  background-color: #ffedcc;
}
</style>
