<template>
  <li>
    <input type="checkbox" v-bind:checked="isChecked" @input="emits('toggle-done', itemId)" />
    <span>{{ title }}</span>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  itemId?: string;
  isChecked?: boolean;
}>();

const emits = defineEmits<{
  (event: 'toggle-done', id: string): void;
}>();
</script>

<style scoped lang="scss">
input {
  margin-right: 10px;
}
</style>
