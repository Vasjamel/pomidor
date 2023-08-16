<template>
  <section class="task-wrapper">
    <div class="task">
      {{ props.task.label }}
      <br />
      {{ props.task.details }}
      <br />
      {{ props.task.deadline }}
      <br />
      {{ props.task.responsible }}
      <br />
    </div>

    <div class="button-wrapper">
      <button class="button" type="button" @click="clickBtn">
        Options
      </button>
    </div>

    <div class="button-wrapper">
      <button class="button" type="button" @click="startTask">
        Start working
      </button>
    </div>

  </section>
</template>

<script setup>
const props = defineProps({
  task: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits([''])

function clickBtn() {
  console.log('clicked options for', props.task.label)
}

function startTask() {
  console.log('started',)
}
</script>

<style lang="scss" scoped>
.task-wrapper {
  display: flex;
  cursor: pointer;
  border: 1px solid black;
  padding: 2rem 1rem;
  border-radius: .5rem;
}

.task {}

.button-wrapper {
  flex: 1 1 auto;
}

.button {
  background-color: aqua;
  color: rgb(44, 26, 0);
}

.button:hover {
  background-color: grey;
  color: white;
}
</style>

