<template>
  <section class="goal">
    <div v-if="hasGoal">
      Current goal is: {{ currentGoal.text }}
    </div>
    <div v-else>
      No goal
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { usePomidorStore } from '../store/timer';
import { computed } from 'vue';

const store = usePomidorStore()
const { goals } = storeToRefs(store)

const hasGoal = computed(() => goals.value?.length)
const currentGoal = computed(() => goals.value[goals.value?.length - 1])
</script>

<style lang="scss" scoped>
.goal {
  display: block;
  margin: 3rem auto;
  padding: 3rem;
  width: 50%;
  min-width: 400px;
  border: 4px solid rgb(133, 57, 57);
  text-align: center;
  font-size: 2rem;
}

@media only screen and (max-width: 375px) {
  .goal {
    margin: 0;
    min-width: none;
    width: auto;
    padding: 0;
    border: none;
    text-align: center;
  }
}
</style>