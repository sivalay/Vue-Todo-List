import { reactive, ref } from 'vue';
import axios from 'axios';
import { defineStore } from 'pinia';

import type { TodoData, TodoItem } from '@/types';

export const useTodoStore = defineStore('counter', () => {
  // states
  const todoList = ref<TodoItem[]>([]);
  const hasError = ref<string>('');
  const TodoItem = reactive<TodoData>({
    todo: {
      completed: false,
      id: '',
      title: '',
      userId: '',
    },
  });

  // actions
  const getTodoList = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      todoList.value = response.data;
    } catch (error) {
      hasError.value = 'Error while loading response...';
    }
  };

  function handleToggleDone(id: string) {
    getTodoItem(id);
    const updatedTodo = {
      completed: !TodoItem.todo.completed,
      id: TodoItem.todo.id,
      title: 'Test task',
      userId: TodoItem.todo.userId,
    };
    updateToggle(id, updatedTodo);
    console.log(TodoItem, 'todoItem');
  }

  const getTodoItem = async (id: string) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
      TodoItem.todo = response.data;
      console.log(TodoItem, 'todoItem inside the function');
    } catch (error) {
      console.log('Error in loading response ...');
    }
  };

  const updateToggle = async (id: string, updatedTodo: TodoItem) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        updatedTodo,
      );
      console.log(response.data, 'Successfully updated');
    } catch (error) {
      console.log('Error in loading response in updateToggle');
    }
  };

  // returns
  return {
    // states
    todoList,

    // actions
    getTodoList,
    handleToggleDone,
    getTodoItem,
  };
});
