<template>
  <li v-for="(todo, index) in todoList" :key="index">
    <p>
      {{ todo.title }}
    </p>
    <form>
      <button>Done</button>
      <button>Remove</button>
    </form>
  </li>
</template>

<script setup>
import { useTodoListStore } from "../stores/useTodoListStore";
import { storeToRefs } from "pinia";
const store = useTodoListStore();
const { todoList } = storeToRefs(store);
</script>
