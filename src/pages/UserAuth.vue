<template>
  <section>
    <form @submit.prevent>
      <h2>Take notes on the go and access from any device</h2>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" class="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" class="password" />
      </div>
      <div class="actions">
        <base-button @click="login" mode="curved">Login</base-button>
        <base-button @click="login" mode="flat"> Signup instead </base-button>
      </div>
    </form>
    <div class="img-box">
      <img
        class="image-note"
        src="../img/cover2.jpg"
        alt="taking notes near a laptop"
      />
    </div>
  </section>
</template>
<script>
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useUserStore } from "@/store/user";
export default {
  setup() {
    const user = useUserStore();
    const router = useRouter();
    const login = () => {
      user.toggleAuth();
      router.replace("main/welcome");
    };

    const mainColor = computed(() => {
      if (user.theme === "green") return "#e9ffe5";
      else return "#ffedcc";
    });
    const inpColor = computed(() => {
      if (user.theme === "green") return "#5ea751";
      else return "#e5a537";
    });
    return { login, mainColor, inpColor };
  },
};
</script>
<style scoped>
section {
  grid-row: 2/-1;
  grid-column: 1/-1;
  padding: 2rem 4rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  background-color: v-bind(mainColor);
}
form {
  margin-left: 4rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.8rem;
}
.img-box {
  width: 50%;
}
.image-note {
  width: 100%;
  border-radius: 2rem;
}
h2 {
  font-family: "Rubik";
  font-weight: 700;
  margin-bottom: 1.4rem;
  font-size: 4rem;
  line-height: 1.1;
  letter-spacing: 0.2px;
}

.actions {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}
label,
input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
label {
  font-size: 1.6rem;
  margin-bottom: 0.3rem;
}
input {
  width: 22rem;
  height: 2.4rem;
  border: v-bind(inpColor) 0.1px solid;
}
input:focus {
  outline: v-bind(inpColor) 2px solid;
  border: v-bind(inpColor) 1px solid;
}
</style>
