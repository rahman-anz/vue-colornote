<template>
  <li>
    <router-link :to="id" class="note">
      <h3 class="note-title">{{ title }}</h3>
      <p class="note-description">
        {{ description.slice(0, 90) }}
      </p>

      <base-button radius="circle" class="icon-position">
        <ion-icon name="bookmark" size="small" class=""></ion-icon>
      </base-button>
    </router-link>
  </li>
</template>
<script>
export default {
  props: ["id", "title", "description"],
  setup() {},
};
</script>
<style scoped>
.note {
  height: 7rem;
  background-color: #ffda98;
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
}
.note:hover {
  scale: 1.02;
}

.note-title {
  font-size: 1.7rem;
  font-weight: 500;
}

.note-description {
  font-size: 1.3rem;
}

.icon-position {
  opacity: 0;
  position: absolute;
  right: 5%;
  top: 25%;
}
</style>
