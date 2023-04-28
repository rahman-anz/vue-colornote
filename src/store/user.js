import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: "django",
    theme: "brown",
    loggedIn: false,
  }),
  getters: {
    getTheme: (state) => {
      return state.theme;
    },
  },
  actions: {
    changeTheme(color) {
      this.theme = color;
    },
    toggleAuth() {
      this.loggedIn = !this.loggedIn;
    },
  },
});
