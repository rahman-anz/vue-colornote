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
      this.setLocal();
    },
    toggleAuth() {
      this.loggedIn = !this.loggedIn;
    },
    setLocal() {
      localStorage.setItem("theme", this.theme);
    },
    getLocal() {
      const oldTheme = localStorage.getItem("theme");
      this.theme = oldTheme;
    },
  },
});
