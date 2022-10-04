<template>
  <form @submit.prevent="addTaskandClean">
    <label class="text-slate-700 text-lg mb-1"> Add task </label>
    <div class="flex justify-between items-end">
      <input
        type="text"
        v-model="taskInput"
        placeholder="Add todo"
        class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
      />
      <button
        type="submit"
        class="p-2 border-2 rounded text-lime-300 border-lime-300 hover:text-white hover:bg-lime-300 max-h-12"
      >
        Add
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTodoListStore } from "../stores/useTodoListStore";

const store = useTodoListStore();
const taskInput = ref("");
const addTaskandClean = () => {
  if (taskInput.value) {
    store.addTodo(taskInput.value);
    taskInput.value = "";
  } else alert("taskInput is empty");
};
</script>
