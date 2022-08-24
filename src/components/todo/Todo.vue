<template>

  <form @submit.prevent="handleSubmitForm">
  <input type="text"  v-model="todo.sujet" required>
  <input type="text"  v-model="todo.objet" required>
  <textarea v-model="todo.message" required ></textarea>
  <button>Envoyer</button>
  </form>

    
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      todo: {
        sujet: "",
        objet: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      console.log("55555555555555");
      let apiURL = "http://localhost:4000/api/create-todo";
      axios
        .post(apiURL, this.todo)
        .then(() => {
          this.$router.push("/list-todos");
          this.todo = {
            sujet: "",
            objet: "",
            message: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

</script>

<style scoped>


</style>