import { defineStore } from "pinia";
export default useUserStore = defineStore("user", {
  state() {
    return {
      user: "django",
    };
  },
  methods: {
    async sendData() {
      fetch(
        "https://vue-colornote-app-default-rtdb.firebaseio.com/notes.json",
        {
          method: "PUT",
          body: JSON.stringify(),
        }
      );
    },
  },
});
