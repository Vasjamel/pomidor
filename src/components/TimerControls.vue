<template>
  <div class="watch-controls">
    <button v-for="control in controls" class="watch-controls__button" @click.prevent="control.callback">
      {{ control.label }}
    </button>
    <!-- <button class="watch-controls__button" @click.prevent="startTimer">
      Start
    </button>
    <button class="watch-controls__button" @click.prevent="stopTimer">
      Pause
    </button>
    <button class="watch-controls__button" @click.prevent="resetTimer">
      Reset
    </button> -->
  </div>
</template>


<script setup>
import { usePomidorStore } from '../store/timer';

const store = usePomidorStore()

const controls = [
  { label: 'Start', callback: startTimer },
  { label: 'Stop', callback: stopTimer },
  { label: 'Reset', callback: resetTimer },
]

function startTimer() {
  store.startTimer()
}

function stopTimer() {
  store.stopTimer()
}

function resetTimer() {
  store.resetTimer()
}

</script>

<style lang="scss" scoped>
.watch-controls {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &__button {
    width: 150px;
    margin: 2rem;
    font-size: 2rem;
    padding: 1rem 2rem;
    border: 2px solid black;
    border-radius: 1rem;

    &:hover {
      color: rgb(133, 57, 57);
      border-color: rgb(133, 57, 57);
    }

    &:active {
      background-color: rgb(133, 57, 57);
      color: white;
      border-color: transparent;
    }
  }
}
</style>