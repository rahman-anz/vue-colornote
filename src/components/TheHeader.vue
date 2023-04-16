<template>
  <header class="main-header">
    <span class="logo">Colornote</span>
    <nav class="actions">
      <ul>
        <button class="logout">Logout</button>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
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
  letter-spacing: 1.4px;
}
.actions {
  margin-left: auto;
}
.actions ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  height: 100%;
}
.logout {
  cursor: pointer;
  padding: 1rem 2rem;
  border: none;
  background-color: #fdba45;
  border-radius: 10px;
}
.logout:hover {
  padding: 1.2rem 2.2rem;
}
</style>
