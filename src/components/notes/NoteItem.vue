<template>
  <li>
    <router-link :to="id" class="note">
      <h3 class="note-title">{{ title }}</h3>
      <p class="note-description">
        {{ description.slice(0, 90) }}
      </p>

      <base-button @click="togglePin" mode="circle" class="icon-position">
        <BookmarkIcon class="icon-pin" />
      </base-button>
    </router-link>
  </li>
</template>
<script>
import { BookmarkIcon } from "@heroicons/vue/24/solid";
import { useNoteStore } from "@/store/note";
export default {
  components: { BookmarkIcon },
  props: ["id", "title", "description"],
  setup(props) {
    const store = useNoteStore();
    function togglePin() {
      store.togglePin(props.id);
    }
    return { togglePin };
  },
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
.note:hover .icon-position {
  opacity: 1;
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

.icon-pin {
  width: 1.8rem;
}
</style>
