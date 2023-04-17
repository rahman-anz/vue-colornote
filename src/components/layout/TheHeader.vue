<template>
  <header class="main-header">
    <span class="logo">Colornote</span>
    <nav class="actions">
      <ul>
        <base-button radius="curved">Logout</base-button>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Monoton&display=swap");
.main-header {
  padding: 1rem 3rem;
  background-color: #ccab71;
  display: flex;
  align-items: center;
  grid-column: 1/-1;
}
.logo {
  font-family: "Lobster";
  font-size: 3.2rem;
  letter-spacing: 3px;
}
.actions {
  margin-left: auto;
}
.actions ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  font-size: 1.6rem;
  font-weight: 700;
  height: 100%;
}
</style>
