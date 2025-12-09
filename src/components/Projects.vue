<template>
  <section class="projects-section">
    <h2 class="section-title"></h2>
    <div class="projects-grid">
      <div
        class="project-card"
        v-for="project in projects"
        :key="project.id"
      >
        <img :src="project.image" :alt="project.name" class="project-image" />
        <div class="overlay">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="project-link">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import thezoo from '../assets/images/thezoo.jpg'
import hitchhike from '../assets/images/hitchhike.png'
import todo from '../assets/images/todo.jpg'

const projects = [
  {
    id: 1,
    name: 'The Zoo - Feedpaws',
    description: 'An interactive zoo experience where you can feed adorable virtual animals. Created using React and TS.',
    image: thezoo,
    link: 'https://github.com/coraliney/thezoo'
  },
  {
    id: 2,
    name: 'Hitchhike - rent a car together!',
    description: 'A collaborative car rental platform built with React, Node.js, Express, MongoDB, and Chakra UI.',
    image: hitchhike,
    link: 'https://github.com/coraliney/projekt-coral'
  },
  {
    id: 3,
    name: 'Todo Tracker',
    description: 'A minimalist to-do list with local storage.',
    image: todo,
    link: 'https://github.com/coraliney/todo'
  }
]
  /* {
    id: 4,
    name: 'project',
    description: 'description',
    image: '/images/something.png',
    link: 'https://github.com/'
  },
  {
    id: 5,
    name: 'project',
    description: 'description.',
    image: '/images/something.png',
    link: 'https://github.com/'
  },
  {
    id: 6,
    name: 'project',
    description: 'description',
    image: '/images/something.png',
    link: 'https://github.com/'
  } */
</script>

<style scoped>
.projects-section {
  min-height: 100vh;
  background: #ffffff;
  color: #000;
  padding: 4rem 2rem;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  height: 50vh;
}

.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: scale(1.02);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  color: white;
  transform: translateY(100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
  overflow-y: auto;
}

.project-card:hover .overlay {
  transform: translateY(0);
}


.project-card:hover .project-image {
  filter: grayscale(0%);
}

.overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.overlay p {
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  max-width: 80%;
}

.project-link {
  display: inline-block;
  background: #7b66ff;
  color: white;
  padding: 0.2rem 1.2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
}

.project-link:hover {
  background: #a092ff;
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    height: auto;
  }
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .overlay h3 {
    font-size: 1.2rem;
  }

  .overlay p {
    font-size: 0.9rem;
  }
}
</style>