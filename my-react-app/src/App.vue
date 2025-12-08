<template>
  <div id="app">
    <Navbar />
<!-- Home -->
  <section class="home" id="home">
    <div class="left-side">
    <h1>Hey, I'm Car<span class="highlight-o">o</span>line</h1>
    <p>A creative, fun and collaborative frontend developer currently based in Stockholm. I love clean design, solving problems, and bringing ideas to life with quality, dedication, and that last touch of care.</p>
  </div>
  <div class="right-side">
    <img src="./assets/images/portraitcircle.jpg">
  </div>
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
  flex-direction: row;
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

  .left-side{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    align-items: flex-start;
    max-width:400px;
  }

  .right-side{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .right-side img {
  width: 600px;
  height: 600px;
  border-radius: 80%;
  object-fit: cover;
}

.highlight-o{
  color:#7b66ff;

}
</style>