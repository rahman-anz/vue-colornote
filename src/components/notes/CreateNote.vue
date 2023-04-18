<template>
  <router-link to="create" class="create-note">
    <ion-icon name="create-outline" class="icon-create"></ion-icon>
    <span class="create-note-text">Create Note</span>
  </router-link>
</template>
<style scoped>
.create-note {
  height: 9rem;
  margin: 1rem;
  text-decoration: none;
  color: #333;
  width: 97%;
  height: 13%;
  background-color: #ffd080;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.create-note:hover {
  scale: 1.02;
}
.icon-create {
  margin-left: 2rem;
  font-size: 4rem;
}
.create-note-text {
  font-size: 2rem;
}
</style>
