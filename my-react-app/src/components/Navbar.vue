<template>
  <nav class="navbar">
    <ul class="menu">
      //
      <li><a href="#home">Home</a></li>
      //
      <li><a href="#projects">Projects</a></li>
      //
      <li><a href="#contact">Contact</a></li>
      //
    </ul>
  </nav>
</template>

<script setup></script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 3rem;
  z-index: 1000;
}

.menu {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.menu a {
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  padding-bottom: 3px;
}

.menu a:hover {
  color: #000000;
  border-bottom: 1px solid #000000;
}
</style>