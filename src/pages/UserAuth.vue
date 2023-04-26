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
export default {
  setup() {
    // const mode = ref("login");

    const router = useRouter();
    function login() {
      router.replace("main/welcome");
    }

    return { login };
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
  background-color: #ffd58d84;
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
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
}
input {
  width: 20rem;
  height: 2.2rem;
}
</style>
