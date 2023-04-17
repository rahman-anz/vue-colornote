<template>
  <router-link to="create" class="create-note">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="icon-create"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
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
  width: 4rem;
}
.create-note-text {
  font-size: 2rem;
}
</style>
