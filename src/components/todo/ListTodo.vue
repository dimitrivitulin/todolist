<template>
    <div >
        <div >
            <h1>TO DO LIST</h1>
            <div >
                <div >
                    <table >
                        <thead >
                            <th>Sujet</th>
                            <th>Objet</th>
                            <th>Message</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                            <tr v-for="student in Students" :key="student.id">
                                <td > {{ todo.sujet}} </td>
                                <td > {{ todo.objet}} </td>
                                <td> {{ todo.message}} </td>
                                <td> 
                                    <router-link :to="{name: 'edit', params: {id: todo._id}}"  
                                   >
                                        Edit
                                    </router-link>   
                                    <button @click.prevent="deleteTodos(todo._id)"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            Todos: []
            
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api';
        axios.get(apiURL).then(res =>{
            this.Todos = res.data
        }).catch(error =>{
            console.log(error);
        })
    },
    methods:{
        deleteTodos(id){
            let apiURL = `http://localhost:4000/api/delete-todo/${id}`;
            let indexOfArrayItem = this.Todos.findIndex(i => i._id === id);
            if(confirm("Do you really want to delete")){
                axios.delete(apiURL).then(() =>{
                    this.Todos.splice(indexOfArrayItem,1)
                }).catch(error =>{
                    console.log(error);
                })
            }
        }
    }
}
</script>

<style scoped>

</style>