<template>
  <nav>
    <div id="menuToggle">
      <input type="checkbox" id="menuCheckbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <li><a href="#home">Caroline</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
#menuToggle {
  display: block;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 1;
  user-select: none;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: white;
  border-radius: 3px;
  z-index: 1;
  transform-origin: center;
  transition: transform 0.25s ease-in-out, background 0.25s ease;
}

#menuToggle input:checked ~ span {
  background: #ffffff;
}

#menuToggle input:checked ~ span:nth-child(2) {
  transform: rotate(45deg) translate(5px, 8px);
}

#menuToggle input:checked ~ span:nth-child(3) {
  opacity: 0;
}

#menuToggle input:checked ~ span:nth-child(4) {
  transform: rotate(-45deg) translate(5px, -8px);
}

#menu {
  position: absolute;
  width: 200px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background: #111;
  list-style-type: none;
  transform: translateX(-100%);
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0;
}

#menuToggle input:checked ~ ul {
  transform: none;
  opacity: 1;
}

#menu li {
  padding: 10px 0;
}

#menu a {
  color: white;
  text-decoration: none;
  font-size: 20px;
  transition: color 0.3s;
}

#menu a:hover {
  color: #ffffff;
}
</style>