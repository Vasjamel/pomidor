<template>
  <section class="watch">
    <div>
      {{ shownMinutes }}:{{ shownSeconds }}
    </div>
  </section>
</template>

<script setup>
import { usePomidorStore } from '../store/timer';
import { storeToRefs } from 'pinia';

const store = usePomidorStore()
const { shownMinutes, shownSeconds } = storeToRefs(store)
</script>

<style scoped>
.watch {
  background-color: rgb(133, 57, 57);
  color: rgb(236, 236, 236);
  font-size: 10rem;
  text-align: center;
  padding: 4rem 0;
}

@media only screen and (max-width: 375px) {
  .watch {
    margin: none;
    font-size: 4rem;
    width: 100%;
  }
}
</style>