import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

export const useGoalsStore = () => {
  const todayGoals = reactive([])

  return {
    goals
  }
}