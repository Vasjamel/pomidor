<template>
  <div class="tabs">
    <button class="tab" v-for="tab in tabs" :key="tab.value" :class="{ 'tab--active': activeTab === tab.value }"
      @click="switchTab(tab)">
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { usePomidorStore } from '../store/timer'
import { onMounted } from 'vue';
const store = usePomidorStore()
const { activeTab, tabs } = storeToRefs(store)

function switchTab(tab) {
  store.switchTab(tab)
}

onMounted(() => {
  switchTab(tabs.value[0])
})

</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;

  .tab {
    border: 1px solid black;
    padding: 0 30px;
    font-size: 2rem;
    min-width: 200px;

    &--active {
      background-color: rebeccapurple;
      color: aliceblue;
    }
  }

}

@media only screen and (max-width: 375px) {
  .tabs {
    flex-direction: column;
    width: 100%;
    margin: 0 0 2rem 0;

    .tab {
      width: 100%;
      padding: 1rem;
    }
  }
}
</style>