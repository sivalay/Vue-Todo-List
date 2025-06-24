import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

import type { TodoItem } from '@/types'

export const useCounterStore = defineStore('counter', () => {
  // states
  const todoList = ref<TodoItem[]>([])

  // actions
  const getTodoList = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      todoList.value = response.data
    } catch (error) {
      console.log('Error while loading response...')
    }
  }

  // returns
  return {
    // states
    todoList,

    // actions
    getTodoList,
  }
})
