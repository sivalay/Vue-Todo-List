import { ref } from 'vue';
import axios from 'axios';
import { defineStore } from 'pinia';

import type { TodoItem } from '@/types';

export const useTodoStore = defineStore('counter', () => {
  // states
  const todoList = ref<TodoItem[]>([]);
  const hasError = ref<string>('');

  // actions
  const getTodoList = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      todoList.value = response.data;
    } catch (error) {
      hasError.value = 'Error while loading response...';
    }
  };

  // returns
  return {
    // states
    todoList,

    // actions
    getTodoList,
  };
});
