<template>
  <section>
    <TheModal v-if="showModal" />
    <TheTabs />
    <TheClock />
    <TimerControls />
    <TheGoal />
  </section>
</template>

<script setup>
import TheTabs from './TheTabs.vue';
import TheClock from './TheClock.vue';
import TimerControls from './TimerControls.vue';
import TheModal from './TheModal.vue';
import TheGoal from './TheGoal.vue';

import { usePomidorStore } from '../store/timer';
import { storeToRefs } from 'pinia';
const store = usePomidorStore()

const { showModal } = storeToRefs(store)
</script>