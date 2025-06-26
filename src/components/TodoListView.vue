<template>
  <ul v-for="todo in storeCounter.todoList" :key="todo.id" class="todo-list">
    <li>
      <input
        type="checkbox"
        v-bind:checked="todo.completed"
        @input="emits('toggle-done', todo.id)"
      />
      <span>{{ todo.title }}</span>
    </li>
    <!-- <todo-view :title="todo.title" :item-id="todo.id" :is-checked="todo.completed" /> -->
  </ul>
</template>

<script setup lang="ts">
import type { TodoItem } from '@/types';
import { useTodoStore } from '@/stores/counter';

import TodoView from './TodoItemView.vue';

const storeCounter = useTodoStore();

const props = defineProps<{
  checked?: boolean;
  todoItem?: TodoItem;
}>();

const emits = defineEmits<{
  (event: 'toggle-done', id: string): void;
}>();
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
