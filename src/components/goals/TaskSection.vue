<template>
  <div class="tasks__section">
    <h2 class="tasks__label">{{ tasksData.label }}</h2>
    <draggable class="draggable-area" :list="tasksData.tasks" group="tasks" :component-data="{
      type: 'transition-group',
      name: !isDragging ? 'flip-list' : null
    }" v-bind="dragOptions" @start="isDragging = true" @end="isDragging = false" @change="log" itemKey="name">

      <template #item="{ element, index }">
        <TheGoal :task="element" />
      </template>

    </draggable>
    <div class="button__wrapper">
      <button class="button" type="button">
        Add
      </button>
    </div>
  </div>
</template>


<script setup>
import { computed, ref } from 'vue'
import draggable from 'vuedraggable'
import TheGoal from './TheGoal.vue';

const props = defineProps({
  tasksData: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits([])

const isDragging = ref(false);
const dragOptions = computed(() => ({ disabled: false, ghostClass: "ghostClass", animation: 200 }))

function log(e) {
  console.log('event ', e)
}

</script>

<style lang="scss" scoped>
.tasks__section {
  border: 1px solid rebeccapurple;
  min-height: 8rem;
  flex: 1 1 18.75rem;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
}

.draggable-area {
  min-height: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button {
  border-radius: 1rem;
  width: 100%;
  padding: 1rem;
  background-color: rebeccapurple;
}
</style>

<style>
.flip-list-move {
  box-shadow: 5px 5px 5px black;
}

.no-move {
  transition: transform 0s;
}

.ghostClass {
  box-shadow: 5px 5px 5px black;
}
</style>