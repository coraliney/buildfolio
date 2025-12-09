<template>
  <nav class="navbar">
<!--   <img src="../assets/images/1.png" class="logo"> -->
    <ul class="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script setup>
</script>


<style scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: right;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  z-index: 1000;
}

.menu {
  list-style: none;
  display: flex;
  gap: 3rem;
  margin: 0;
  padding: 0;
}

.menu a {
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  font-weight: 200;
  font-size: 1.1rem;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  padding-bottom: 3px;
}

.menu a:hover {
  color: #7b66ff;
  border-bottom: 1px solid #000000;
}

/* .logo {
  display: flex;
  width: 150px;
} */

</style>