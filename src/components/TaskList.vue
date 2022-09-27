<template>
  <p>
    {{ tasks.title }}
  </p>
  <form>
    <label>
      Completed
      <input type="checkbox" v-model="tasks.completed" />
    </label>
  </form>
</template>

<script setup>
defineProps({
  tasks: Object,
});
</script>
