import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'

import {
  INITIAL_BREAK_MINUTES,
  INITIAL_LONGBREAK_MINUTES,
  INITIAL_POMIDOR_MINUTES,
  INITIAL_SECONDS,
  TAB_VALUES,
  DEFAULT_TABS
} from './constants'

await Notification.requestPermission();

export const usePomidorStore = defineStore('timer', () => {
  const activeTab = ref(null)
  const minutes = ref(getMinutes());
  const seconds = ref(INITIAL_SECONDS);
  const interval = ref(null)
  const isActive = ref(false)
  const tabs = ref(DEFAULT_TABS)
  const goals = ref([])
  const showModal = ref(false)
  const isPaused = ref(false)

  const shownSeconds = computed(() => seconds.value < 10 ? `0${seconds.value}` : `${seconds.value}`)
  const shownMinutes = computed(() => minutes.value < 10 ? `0${minutes.value}` : `${minutes.value}`)

  function startCountDown() {
    isActive.value = true
    interval.value = setInterval(() => {
      seconds.value = seconds.value - 1

      if (seconds.value === 0 && minutes.value === 0) {
        notify()
        stopTimer()
      }

      if (seconds.value < 0) {
        seconds.value = 59
        minutes.value = minutes.value - 1
      }
    }, 1000)
    hideModal()
  }

  function startTimer() {
    if (isActive.value) return;
    const displayModal = activeTab.value === TAB_VALUES.POMIDOR && !isPaused.value
    if (displayModal) {
      openModal()
    } else {
      startCountDown()
    }
    isPaused.value = false
  }

  function stopTimer() {
    if (!isActive.value) return
    isActive.value = false
    isPaused.value = true
    clearInterval(interval.value)
  }

  function resetTimer() {
    if (isActive.value) {
      stopTimer()
    }
    minutes.value = getMinutes()
    seconds.value = INITIAL_SECONDS
    isPaused.value = false
  }

  function openModal() {
    showModal.value = true
  }

  function hideModal() {
    showModal.value = false
  }

  function saveGoal(goalText) {
    const goal = {
      startedAt: new Date(),
      completedAt: null,
      text: goalText,
      completed: false,
      pomidors: 0
    }
    goals.value = [...goals.value, goal]
    startCountDown()
  }

  function getMinutes() {
    if (activeTab.value === TAB_VALUES.SHORT_BREAK) {
      return INITIAL_BREAK_MINUTES
    }
    if (activeTab.value === TAB_VALUES.LONG_BREAK) {
      return INITIAL_LONGBREAK_MINUTES
    }
    return INITIAL_POMIDOR_MINUTES
  }

  function switchTab({ value }) {
    activeTab.value = value
    resetTimer()
  }

  function notify() {
    new Notification('You have finished this pomidor!', {
      body: 'Have some rest and return! :) '
    })
    new Audio('../../public/sound.mp3').play()
  }

  return {
    minutes,
    seconds,
    shownSeconds,
    shownMinutes,
    activeTab,
    tabs,
    showModal,
    goals,
    startTimer,
    stopTimer,
    resetTimer,
    switchTab,
    saveGoal,
    openModal,
    hideModal,
  }
})