<template>
  <li class="note">
    <h3 class="note-title">Note 1</h3>
    <p class="note-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed magnam
      par
    </p>

    <button class="btn btn-pin">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="icon-pin"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
        />
      </svg>
    </button>
  </li>
</template>
<style scoped>
.note {
  height: 7rem;
  background-color: #ffda98;
  padding: 0.5rem 1rem;
  border-radius: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
}

.note-title {
  font-size: 1.8rem;
  font-weight: 600;
}

.note-description {
  font-size: 1.4rem;
}
.icon-pin {
  width: 2.2rem;
}
.btn-pin {
  position: absolute;
  right: 5%;
  top: 25%;
}
</style>
