<template>
  <li>
    <router-link :to="id" class="note">
      <h3 class="note-title">{{ title }}</h3>
      <p class="note-description">
        {{ description.slice(0, 110) }}
      </p>
    </router-link>
    <base-button
      @click="togglePin"
      :isPinned="getPinStatus"
      mode="circle"
      class="icon-position"
    >
      <BookmarkIcon class="icon-pin" />
    </base-button>
  </li>
</template>
<script>
import { computed } from "vue";
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
    const getPinStatus = computed(function () {
      return store.getPinStatus(props.id);
    });
    return { togglePin, getPinStatus };
  },
};
</script>
<style scoped>
li {
  position: relative;
}
.note {
  height: 7.5rem;
  background-color: #ffda98;
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  overflow: hidden;
}
.icon-position {
  opacity: 0;
  position: absolute;
  right: 5%;
  top: 25%;
}
.note:hover {
  scale: 1.02;
}
.note.router-link-active {
  background-color: #ffc45da4;
  border: #ffbb46 1px solid;
}
.icon-position:hover,
.note:hover + .icon-position {
  opacity: 1;
}
.note-title {
  font-size: 1.7rem;
  font-weight: 500;
}

.note-description {
  font-size: 1.3rem;
}

.icon-pin {
  width: 1.8rem;
}
</style>
