<template>
  <li v-for="todo in todoList" :key="todo.id" class="flex mb-3">
    <p
      class="flex-1 my-auto text-slate-700"
      :class="{ 'line-through': todo.completed }"
    >
      {{ todo.title }}
    </p>
    <form>
      <button
        @click.prevent.stop="toggleCompleted(todo.id)"
        :class="{
          'text-green-300 border-green-300 hover:bg-green-300': !todo.completed,
          'text-gray-300 border-gray-300 hover:bg-gray-300': todo.completed,
        }"
        class="p-2 border-2 rounded hover:text-white max-h-12 mr-2"
      >
        {{ todo.completed ? "Undone" : "Done" }}
      </button>
      <button
        @click.prevent.stop="deleteTodo(todo.id)"
        class="p-2 border-2 rounded text-red-300 border-red-300 hover:text-white hover:bg-red-300 max-h-12"
      >
        Remove
      </button>
    </form>
  </li>
</template>

<script setup>
import { useTodoListStore } from "../stores/useTodoListStore";
import { storeToRefs } from "pinia";

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;
</script>
