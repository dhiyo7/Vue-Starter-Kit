import {defineStore} from "pinia";
import {requestGet} from "@/config/Engine";
import axios from "axios";

export const useTodosStore = defineStore({
    id: 'todos',
    state: () => ({
        todos: [],
        error: null,
        loading: false,
    }),
    getters : {
        getTodos(state){
            return state.todos
        }
    },
    actions: {
        async fetchTodos() {
            this.todos = []
            this.loading = true
            try {
                this.todos = await requestGet('/users')
                return this.todos.data
            } catch (e) {
                console.log("ERROR ", e)
            } finally {
                this.loading = false
            }
        }
    }
})