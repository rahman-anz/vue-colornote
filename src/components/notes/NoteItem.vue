<template>
  <li>
    <router-link :to="id" class="note">
      <h3 class="note-title">{{ title }}</h3>
      <p class="note-description">
        {{ description.slice(0, 110) }}
      </p>
      <base-button
        v-if="getPinStatus"
        @click="togglePin"
        title="unpin"
        class="icon-position pinned"
        mode="circle"
        ><BookmarkSolid class="icon"
      /></base-button>
      <base-button
        v-else
        @click="togglePin"
        title="pin"
        mode="circle"
        class="icon-position unpinned"
      >
        <BookmarkIcon class="icon" />
      </base-button>
    </router-link>
  </li>
</template>
<script>
import { computed } from "vue";
import { BookmarkIcon } from "@heroicons/vue/24/outline";
import { BookmarkIcon as BookmarkSolid } from "@heroicons/vue/24/solid";
import { useNoteStore } from "@/store/note";
import { useUserStore } from "@/store/user";
export default {
  components: { BookmarkIcon, BookmarkSolid },
  props: ["id", "title", "description"],
  setup(props) {
    const store = useNoteStore();
    const togglePin = () => {
      store.togglePin(props.id);
    };
    const getPinStatus = computed(() => {
      return store.getPinStatus(props.id);
    });
    const user = useUserStore();
    const mainColor = computed(() => {
      if (user.theme === "green") return "#c1eeba";
      else return " #ffda98";
    });
    const activeColor = computed(() => {
      if (user.theme === "green") return "#b2eaa9";
      else return " #ffc45da4";
    });
    const borderColor = computed(() => {
      if (user.theme === "green") return "#b2eaa9";
      else return " #ffbb46";
    });
    return { togglePin, getPinStatus, mainColor, activeColor, borderColor };
  },
};
</script>
<style scoped>
li {
  position: relative;
}
.note {
  min-height: 7.5rem;
  background-color: v-bind(mainColor);
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  overflow: hidden;
}
.icon-position {
  position: absolute;
  right: 5%;
  top: 25%;
}
.pinned {
  opacity: 1;
}
.unpinned {
  opacity: 0;
}
.note:hover {
  scale: 1.02;
}
.note.router-link-active {
  background-color: v-bind(activeColor);
  border: v-bind(borderColor) 1px solid;
}
.note:hover .unpinned,
.icon-position:hover {
  opacity: 1;
}
.note-title {
  font-size: 1.7rem;
  font-weight: 500;
}

.note-description {
  font-size: 1.3rem;
}

.icon {
  width: 1.8rem;
}
</style>
