import { createWebHistory, createRouter } from "vue-router";
import Todo from "@/components/todo/Todo.vue";
import Todo from "@/components/todo/ListTodo.vue";
import EditComponent from "@/components/EditComponent.vue";

const routes = [
  {
    path: "/",
    name: "todo",
    component: Todo,
  },
  // {
  //   path: "/edit/:id",
  //   name: "edit",
  //   component: EditComponent,
  // },
  {
    path: "/list-todos",
    name: "view",
    component: ListTodo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;