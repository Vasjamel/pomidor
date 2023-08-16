import { defineStore } from "pinia";
import { reactive, computed, watch } from "vue";

import { v4 as uuid } from 'uuid'

export const useTasksStore = defineStore('tasks', () => {
  const rawTasks = reactive({
    planned: [
      {
        label: 'goal1',
        id: uuid(),
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officia repudiandae recusandae dolorem excepturi ex impedit officiis quisquam eligendi amet suscipit accusantium iure facere distinctio beatae, magnam nulla? Debitis, cumque.',
        deadline: new Date() + 23478423,
        responsible: 'Vasyl Meleshyn'
      },
      {
        label: 'goal2',
        id: uuid(),
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officia repudiandae recusandae dolorem excepturi ex impedit officiis quisquam eligendi amet suscipit accusantium iure facere distinctio beatae, magnam nulla? Debitis, cumque.',
        deadline: new Date() + 66789,
        responsible: 'Vasyl Meleshyn'
      },
      {
        label: 'goal3',
        id: uuid(),
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta officia repudiandae recusandae dolorem excepturi ex impedit officiis quisquam eligendi amet suscipit accusantium iure facere distinctio beatae, magnam nulla? Debitis, cumque.',
        deadline: new Date() + 3333,
        responsible: 'Vasyl Meleshyn'
      },
    ],
    inProgress: [],
    completed: [],
  })

  const tasks = computed(() => ([
    { id: uuid(), label: 'Planned', tasks: rawTasks.planned },
    { id: uuid(), label: 'In progress', tasks: rawTasks.inProgress },
    { id: uuid(), label: 'Completed', tasks: rawTasks.completed },
  ]))

  watch(tasks, (newVal) => { console.log('watch tasks', newVal) }, { deep: true, immediate: true })

  return {
    tasks
  }
})