<template>
  <div class="todo-list-wrapper">
    <h1 class="todo-list-wrapper__header">Todo-List</h1>
    <div class="todo-list-wrapper__list-container">
      <!-- <ul v-for="todo in storeCounter.todoList" class="todo-list">
        <li>
          <input type="checkbox" />
          <span>{{ todo.title }}</span>
        </li>
      </ul> -->
      <todo-list @toggle-done="storeTodo.handleToggleDone" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { useTodoStore } from '@/stores/counter';

import TodoList from '@/components/TodoListView.vue';

const storeTodo = useTodoStore();

// function handleToggleDone(id: string) {
//   console.log(id, 'is id')
//   storeTodo.getTodoItem
// }

onMounted(storeTodo.getTodoList);
</script>

<style scoped lang="scss">
.todo-list-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  gap: 40px;
  background-image: url('../../public/images/Todo-background.avif');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;

  &__header {
    top: 10px;
    display: block;
    position: relative;
    background-color: #fff;
    padding: 10px 20px;
    margin: 10px;
    text-align: center;
    border-radius: 10px;
  }

  &__list-container {
    width: 600px;
    height: 800px;
    display: block;
    background-color: rgb(255, 255, 255, 0.5);
    padding: 10px 5px;
    margin: 10px auto;
    border-radius: 10px;
    overflow-y: scroll;

    .todo-list {
      display: flex;
      flex-flow: column;
      list-style-type: none;

      input {
        margin-right: 10px;
      }
    }
  }

  &__list-container::-webkit-scrollbar {
    display: none;
  }
}
</style>
