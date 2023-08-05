<template>
  <div class="modal-wrapper" @click.self="closeModal">
    <section class="modal">
      <form class="form">
        <label class="form__label">Enter your goal please</label>
        <input class="form__input" type="text" id="goal-input" v-model="goal" />
        <div class="form-controls">
          <button class="form__button" @click.prevent="saveGoal" @keyup.enter="saveGoal">Save</button>
          <!-- <button class="form__button" @click.prevent="closeModal">Cancel</button> -->
        </div>
      </form>
    </section>
  </div>
</template>

<script setup >
import { ref } from 'vue'
import { usePomidorStore } from '../store/timer';
const store = usePomidorStore()

const goal = ref('')

function saveGoal() {
  store.saveGoal(goal.value)
}

function closeModal() {
  store.hideModal()
}
</script>

<style lang="scss" scoped >
.modal-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, .5);

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: 300px;
    background-color: rgb(255, 255, 255);
    overflow: hidden;
  }

  .form {
    display: flex;
    flex-direction: column;
    margin: 2rem;
    gap: 2rem;

    &__label {
      font-size: 2rem;
      text-align: center;

      &::after {
        content: ':';
      }
    }

    &__input {
      border: 1px solid black;
      padding: 1rem;
      font-size: 2rem;
      font-style: italic;

      &:focus {
        outline: 2px solid rgb(133, 57, 57)
      }
    }
  }

  .form-controls {
    position: absolute;
    right: 0rem;
    bottom: 2rem;

    .form__button {
      width: 150px;
      margin: 2rem;
      padding: 0.5rem 2rem;
      border: 2px solid rgb(133, 57, 57)
    }

    .form__button:active {
      background-color: rebeccapurple;
      border-color: transparent;
      color: white;
    }
  }
}
</style>