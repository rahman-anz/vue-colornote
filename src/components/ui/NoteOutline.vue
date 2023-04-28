<template>
  <section><slot></slot></section>
</template>
<script>
import { useUserStore } from "@/store/user";
import { computed } from "vue";
export default {
  setup() {
    const user = useUserStore();
    const mainColor = computed(() => {
      if (user.theme === "green") return "#baecb2";
      else return "#ffd68d";
    });
    const secColor = computed(() => {
      if (user.theme === "green") return "#a2cc9c";
      else return "#f6ba52";
    });
    return { mainColor, secColor };
  },
};
</script>
<style scoped>
section {
  background: repeating-linear-gradient(
    to bottom,
    v-bind(mainColor),
    v-bind(mainColor) 3rem,
    v-bind(secColor) 3.1rem,
    v-bind(secColor) 3.2rem
  );
  padding: 1rem 2rem;
  position: relative;
}
</style>
