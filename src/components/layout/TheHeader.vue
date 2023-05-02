<template>
  <header class="main-header">
    <span class="logo">Colornote</span>
    <nav class="actions">
      <ul>
        <div class="palette">
          <button
            title="Light"
            @click="user.changeTheme('brown')"
            :class="['brown', { active: !greenActive }]"
          ></button>
          <button
            title="Dark"
            @click="user.changeTheme('green')"
            :class="['green', { active: greenActive }]"
          ></button>
        </div>

        <base-button v-if="user.loggedIn" @click="logoutDialog" mode="curved"
          >Logout</base-button
        >
      </ul>
    </nav>
    <base-dialog v-if="dialogVisible"
      ><template #default>Are you sure you want to log out ?</template
      ><template #actions
        ><base-button mode="flat" @click="confirmedLogout">Yes</base-button
        ><base-button mode="flat" @click="closeDialog"
          >No</base-button
        ></template
      ></base-dialog
    >
  </header>
</template>
<script setup>
import { defineExpose, computed, ref } from "vue";

import { useUserStore } from "@/store/user";
const user = useUserStore();

import { useRouter } from "vue-router";
const router = useRouter();

const dialogVisible = ref(false);
const logoutDialog = () => {
  dialogVisible.value = true;
};
const confirmedLogout = () => {
  user.toggleAuth();
  router.replace("/auth");
  closeDialog();
};
const closeDialog = () => (dialogVisible.value = false);

const greenActive = computed(() => {
  if (user.theme === "green") return true;
  else return false;
});

const color1 = computed(() => {
  if (user.theme === "green") return "#7a9874";
  else return " #ccab71";
});
const colorLogo = computed(() => {
  if (user.theme === "green") return "#f8fdf7";
  else return "#333";
});
defineExpose({
  user,
  logoutDialog,
  confirmedLogout,
  closeDialog,
  color1,
  greenActive,
  colorLogo,
});
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
  color: v-bind(colorLogo);
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
  background-color: rgb(95, 198, 95);
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
