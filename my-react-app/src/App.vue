<template>
  <div id="app">
    <Navbar />
<!-- Home -->
  <section class="home" id="home">
    <h1>Hey, I'm Caroline</h1>
    <p>A frontend developer currently based in Stockholm</p>
  </section>
  <!-- Projects -->
  <section class="projects" id="projects">
    <Projects />
  </section>
  <!-- Contact -->
   <section class="contact" id="contact">
    <Contact />
   </section>
   <!-- Social Bar -->
   <div class="social-bar">
  <a href="https://github.com/coraliney" target="_blank" aria-label="GitHub">
    <i class="fab fa-github"></i>
  </a>
  <a href="https://www.linkedin.com/in/carolineyt/" target="_blank" aria-label="LinkedIn">
    <i class="fab fa-linkedin"></i>
  </a>
</div>
</div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue';
</script>

<style>
html {
  scroll-behavior: smooth;
}

.home{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.projects{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

  .contact{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
</style>