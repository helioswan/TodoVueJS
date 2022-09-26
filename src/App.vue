<script setup>
import Task from "./components/task.vue";
import { ref } from "vue";

const taskInput = ref("");
const tasks = ref([]);

const addTask = () => {
  if (taskInput.value)
    tasks.value.push({ title: taskInput.value, completed: false });
  else alert("taskInput is empty");
};
const logTask = () => {
  console.log(tasks.value);
};
</script>

<template>
  <main class="bg-gray-700">
    <div class="container mx-auto min-h-screen">
      <h1 class="text-xl text-center text-white">Todolist</h1>
      <form>
        <label>
          Add task
          <input type="text" v-model="taskInput" placeholder="Enter a task" />
        </label>
        <button @click.prevent="addTask">Submit</button>
        <button @click.prevent="logTask">Log</button>
      </form>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <Task :task="task" />
        </li>
      </ul>
    </div>
  </main>
</template>
<style></style>
