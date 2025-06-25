<template>
  <ul v-for="todo in storeCounter.todoList" :key="todo.id" class="todo-list">
    <li>
      <input type="checkbox" />
      <span>{{ todo.title }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()

const props = defineProps<{
  checked: boolean
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

<!-- Typing      : [47wpm] [99%]
Focus       : [11hr 10min] [1642hr 29min]
CT          : [10hr 52min] [1545hr 59min]
ACT         : [09hr 08min] [1382hr 49min]
HTML        : [00] [4741]
CSS         : [00] [17564]
JS          : [00] [13378]
TS          : [20] [67]
Vue         : [131] [2810]
JSON        : [00] [46]
Total       : [151] [38460]
Day         : 17 -->
