<template>
  <header class="main-header">
    <span class="logo">Colornote</span>
    <nav class="actions">
      <ul>
        <div class="palette">
          <button
            title="Light"
            @click="user.changeTheme('brown')"
            :class="brownActive"
          ></button>
          <button
            title="Dark"
            @click="user.changeTheme('green')"
            :class="greenActive"
          ></button>
        </div>
        <base-button @click="logout" mode="curved">Logout</base-button>
      </ul>
    </nav>
  </header>
</template>
<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
export default {
  setup() {
    const router = useRouter();
    const logout = () => {
      router.replace("/auth");
    };
    const user = useUserStore();
    const greenActive = computed(() => {
      if (user.theme === "green") return "active green";
      else return "green";
    });
    const brownActive = computed(() => {
      if (user.theme !== "green") return "active brown";
      else return "brown";
    });

    const color1 = computed(() => {
      if (user.theme === "green") return "#7a9874";
      else return " #ccab71";
    });
    return { user, logout, color1, greenActive, brownActive };
  },
};
</script>
<style scoped>
.main-header {
  padding: 1rem 3rem;
  background-color: v-bind(color1);
  display: flex;
  align-items: center;
  grid-column: 1/-1;
  min-height: 2rem;
}
.logo {
  font-family: "Lobster";
  font-size: 4rem;
  letter-spacing: 3px;
}
.palette {
  display: flex;
  background-color: #eee;
  padding: 1.1rem;
  gap: 1.3rem;
  border-radius: 30px;
}
.palette button {
  padding: 1rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}
.brown {
  background-color: burlywood;
}
.green {
  background-color: green;
}
.active {
  outline: #444 7px solid;
}
.actions {
  margin-left: auto;
}
.actions ul {
  list-style: none;
  display: flex;
  gap: 4rem;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
  height: 100%;
}
</style>
