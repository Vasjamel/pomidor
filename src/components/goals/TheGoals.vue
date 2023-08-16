<template>
  <section class="tasks__wrapper">
    <TaskSection :class="{ empty: !section.tasks.length }" v-for="section in store.tasks" :key="section.id"
      :tasksData="section" />
  </section>
</template>

<script setup>
import TaskSection from './TaskSection.vue';

import { useTasksStore } from '../../store/tasks';

const store = useTasksStore()

</script>

<style scoped>
.tasks__wrapper {
  display: block;
  width: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 4rem
}

.empty {
  height: 20px;
}
</style>