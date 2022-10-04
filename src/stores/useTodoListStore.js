import { defineStore } from "pinia";

export const useTodoListStore = defineStore("TodoList", {
  state: () => ({
    todoList: [],
    id: 0,
  }),
  actions: {
    addTodo(Todo) {
      this.todoList.push({
        title: Todo,
        completed: false,
        id: this.id++,
      });
    },
    deleteTodo(TodoId) {
      this.todoList = this.todoList.filter((todo) => todo.id !== TodoId);
    },
    toggleCompleted(TodoId) {
      var targetTodo = this.todoList.find((todo) => todo.id === TodoId);
      if (targetTodo) targetTodo.completed = !targetTodo.completed;
    },
  },
});
