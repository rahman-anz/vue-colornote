<template>
  <div class="backdrop">
    <div class="main-box">
      <the-header></the-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lobster&family=Rubik:wght@700&display=swap");
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
  color: #333;
}
.backdrop {
  background-color: rgb(62, 62, 62);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-box {
  margin: auto;
  border-radius: 2rem;
  width: 92vw;
  height: 94vh;
  display: grid;
  grid-template-rows: 10vh 1fr;
  grid-template-columns: 30vw 1fr;
  overflow: hidden;
  
}
</style>
