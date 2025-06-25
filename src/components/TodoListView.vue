<template>
  <ul v-for="todo in storeCounter.todoList" :key="todo.id" class="todo-list">
    <li>
      <input type="checkbox" v-bind:checked="todo.completed" />
      <span>{{ todo.title }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()

const props = defineProps<{
  checked?: boolean
}>()

const emits = defineEmits<{
  (event: 'toggle-done', id: string): void
}>()
</script>

<style scoped lang="scss">
.todo-list {
  display: flex;
  flex-flow: column;
  list-style-type: none;

  input {
    margin-right: 10px;
  }
}
</style>
