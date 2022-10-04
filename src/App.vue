<script setup>
import { ref } from "vue";
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

</script>

<template>
  <main
    class="min-h-screen w-full flex items-center justify-center bg-green-100 font-sans"
  >
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
        <h1 class="text-slate-700 text-4xl font-bold mb-6">Todo List</h1>
        <TodoForm />
      </div>
      <ul>
        <TodoList/>
      </ul>
    </div>
  </main>
</template>
<style></style>
