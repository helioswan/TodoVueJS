<template>
  <p>
    {{ task.title }}
  </p>
  <form>
    <label>
      Completed
      <input type="checkbox" v-model="task.completed" />
    </label>
  </form>
</template>

<script setup>
defineProps({
  task: Object,
});
</script>
