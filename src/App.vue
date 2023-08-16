<script setup>
import TheMain from './components/TheMain.vue';
import TheGoals from './components/TheGoals.vue';
</script>

<template>
  <div class="app">
          <header class="header"></header>
        <main class="main">
          <TheMain />
            <TheGoals />
        </main>
    <footer class="footer"></footer>
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  font-size: 1rem;
}

.main {
  flex: 1 1 auto;
}

.footer {
  height: 4rem;
  text-align: center;
}
</style>