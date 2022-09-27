<template>
  <form>
    <label>
      Add task
      <input type="text" v-model="taskInput" placeholder="Enter a task" />
    </label>
    <button @click.prevent="addTask">Submit</button>
    <button @click.prevent="logTask">Log</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  tasks: Array,
});
const taskInput = ref("");
const addTask = () => {
  if (taskInput.value) {
    props.tasks.push({ title: taskInput.value, completed: false });
    taskInput.value = "";
  } else alert("taskInput is empty");
};
</script>
