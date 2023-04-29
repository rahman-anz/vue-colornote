<template>
  <button :class="[mode]">
    <slot></slot>
  </button>
</template>
<script>
import { useUserStore } from "@/store/user.js";
import { computed } from "vue";
export default {
  props: {
    mode: { type: String, required: false, default: null },
  },
  setup() {
    const user = useUserStore();
    const color = computed(() => {
      if (user.theme === "green") return "#79d067";
      else return " #fdba45";
    });
    const colorHover = computed(() => {
      if (user.theme === "green") return "#66b655";
      else return " #edb24d";
    });
    const colorFlat = computed(() => {
      if (user.theme === "green") return "#c1eeba";
      else return " #ffd791";
    });
    return { color, colorHover, colorFlat };
  },
};
</script>
<style scoped>
button {
  padding: 1.3rem 1.8rem;
  border: none;
  background-color: v-bind(color);
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
button:hover,
button:active {
  scale: 110%;
  background-color: v-bind(colorHover);
}
.circle {
  border-radius: 50%;
  padding: 1rem;
}
.curved {
  border-radius: 10px;
}
.flat {
  border-radius: 10px;
  border: v-bind(color) 2px solid;
  background-color: v-bind(colorFlat);
}

.flat:hover {
  scale: none;
  background-color: v-bind(color);
  border: v-bind(color) 2px solid;
}
</style>
