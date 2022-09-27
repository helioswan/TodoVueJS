<script setup>
import TaskList from "./components/TaskList.vue";
import { ref } from "vue";
import TaskForm from "./components/TaskForm.vue";

const tasks = ref([{title: "exmple", completed: true}]);
</script>

<template>
  <main class="bg-gray-700">
    <div class="container mx-auto min-h-screen">
      <h1 class="text-xl text-center text-white">Todolist</h1>
      <TaskForm :tasks="tasks" />
      <ul>
        <li v-for="(tasks, index) in tasks" :key="index">
          <TaskList :tasks="tasks" />
        </li>
      </ul>
    </div>
  </main>
</template>
<style></style>
